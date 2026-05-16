"use client";

import { FormEvent, Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/components/auth-context";

function SignupPageContent() {
  const { signup, isLoading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const redirectParam = searchParams.get("redirect");
  const loginHref = redirectParam
    ? `/login?redirect=${encodeURIComponent(redirectParam)}`
    : "/login";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setError("");
      setIsSubmitting(true);
      await signup({ name, email, password });
      router.push(redirectParam || "/profile");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to create account.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card/80 p-6 shadow-lg">
        <h1 className="mb-2 text-xl font-semibold text-card-foreground">
          Create your Fix My City account
        </h1>
        <p className="mb-6 text-sm text-muted-foreground">
          Sign up to track your complaints and manage your profile.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="mb-1 block text-sm text-muted-foreground">
              Full Name
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-border bg-background/60 px-3 py-2 text-sm text-card-foreground outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isLoading || isSubmitting}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-muted-foreground">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-lg border border-border bg-background/60 px-3 py-2 text-sm text-card-foreground outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading || isSubmitting}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-muted-foreground">
              Password
            </label>
            <input
              type="password"
              className="w-full rounded-lg border border-border bg-background/60 px-3 py-2 text-sm text-card-foreground outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading || isSubmitting}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-muted-foreground">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full rounded-lg border border-border bg-background/60 px-3 py-2 text-sm text-card-foreground outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={isLoading || isSubmitting}
            />
          </div>

          {error && (
            <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading || isSubmitting}
            className="mt-2 w-full rounded-lg bg-primary py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Creating account..." : "Sign up"}
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href={loginHref} className="text-primary hover:underline">
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="py-12 text-center">Loading...</div>}>
      <SignupPageContent />
    </Suspense>
  );
}
