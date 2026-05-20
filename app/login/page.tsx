"use client";

import { FormEvent, Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/components/auth-context";

function LoginPageContent() {
  const { login, isLoading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [role, setRole] = useState<"user" | "admin">("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const redirectParam = searchParams.get("redirect");
  const signupHref = redirectParam
    ? `/signup?redirect=${encodeURIComponent(redirectParam)}`
    : "/signup";
  const redirectTo = redirectParam || (role === "admin" ? "/admin/dashboard" : "/report");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      setIsSubmitting(true);
      await login({ email, password, role });
      router.push(redirectTo);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to sign in.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card/80 p-6 shadow-lg space-y-6">
        <div>
          <h1 className="text-xl font-semibold text-card-foreground">
            Login to Fix My City
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Sign in to access reporting, tracking, community, and profile features.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 rounded-xl bg-muted/60 p-1">
          <button
            type="button"
            onClick={() => setRole("user")}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              role === "user" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            Citizen
          </button>
          <button
            type="button"
            onClick={() => setRole("admin")}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              role === "admin" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            Admin
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="mb-1 block text-sm text-muted-foreground">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-lg border border-border bg-background/60 px-3 py-2 text-sm text-card-foreground outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder={role === "admin" ? "admin@fixmycity.com" : "Enter your email"}
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            className="w-full rounded-lg bg-primary py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Signing in..." : role === "admin" ? "Login as Admin" : "Login"}
          </button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          New user?{" "}
          <Link href={signupHref} className="text-primary hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="py-12 text-center">Loading...</div>}>
      <LoginPageContent />
    </Suspense>
  );
}
