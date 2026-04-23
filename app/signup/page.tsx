"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth-context";

export default function SignupPage() {
  const { loginAsUser } = useAuth();
  const router = useRouter();
  const [name, setName] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    loginAsUser(name.trim());
    router.push("/profile");
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
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-primary py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            Sign up
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}
