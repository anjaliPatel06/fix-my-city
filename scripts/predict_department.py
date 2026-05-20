import argparse
import json
import os

import joblib
import numpy as np
from PIL import Image


_BUNDLE = None


def load_bundle(model_path: str):
    global _BUNDLE
    if _BUNDLE is None:
        _BUNDLE = joblib.load(model_path)
    return _BUNDLE


def build_image_features(image_path: str | None, bins: int) -> np.ndarray:
    try:
        if image_path and os.path.exists(image_path):
            img = Image.open(image_path).convert("RGB").resize((64, 64))
        else:
            img = Image.new("RGB", (64, 64), color=(180, 180, 180))
    except Exception:
        img = Image.new("RGB", (64, 64), color=(180, 180, 180))

    arr = np.array(img, dtype=np.float32) / 255.0
    features = []

    for channel in range(3):
        hist, _ = np.histogram(arr[:, :, channel], bins=bins, range=(0, 1))
        features.extend(hist / hist.sum())

    for channel in range(3):
        features.append(float(arr[:, :, channel].mean()))
        features.append(float(arr[:, :, channel].std()))

    return np.array(features, dtype=np.float32)


def predict_department(model_path: str, description: str, image_path: str | None):
    bundle = load_bundle(model_path)
    classifier = bundle["classifier"]
    tfidf = bundle["tfidf_vectorizer"]
    departments = bundle["departments"]
    confidence_threshold = bundle["confidence_threshold"]
    image_feature_bins = bundle["image_feature_bins"]

    image_features = build_image_features(image_path, image_feature_bins)
    text_features = tfidf.transform([description]).toarray()[0]
    feature_vector = np.hstack([image_features, text_features]).reshape(1, -1)

    probabilities = classifier.predict_proba(feature_vector)[0]
    top3_idx = np.argsort(probabilities)[-3:][::-1]
    best_idx = int(top3_idx[0])
    confidence = float(round(probabilities[best_idx], 4))

    return {
        "department": departments[best_idx],
        "label_idx": best_idx,
        "confidence": confidence,
        "auto_route": confidence >= confidence_threshold,
        "top3": [
            {
                "department": departments[index],
                "confidence": float(round(probabilities[index], 4)),
            }
            for index in top3_idx
        ],
    }


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--model", required=True)
    parser.add_argument("--description", default="")
    parser.add_argument("--image", default=None)
    args = parser.parse_args()

    result = predict_department(
        model_path=args.model,
        description=args.description or "",
        image_path=args.image,
    )
    print(json.dumps(result))


if __name__ == "__main__":
    main()
