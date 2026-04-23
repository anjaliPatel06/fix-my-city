"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth-context";

export default function LoginPage() {
  const { loginAsUser, loginAsAdmin } = useAuth();
  const router = useRouter();

  const handleCitizenLogin = () => {
    loginAsUser("Citizen User");
    router.push("/profile");
  };

  const handleAdminLogin = () => {
    loginAsAdmin("City Admin");
    router.push("/admin/dashboard");
  };

  return (
    <main className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card/80 p-6 shadow-lg space-y-6">
        <div>
          <h1 className="text-xl font-semibold text-card-foreground">
            Login to Fix My City
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Choose how you want to login.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-card-foreground">
            Citizen Login
          </h2>
          <button
            onClick={handleCitizenLogin}
            className="w-full rounded-lg bg-primary py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            Login as Citizen
          </button>
        </div>

        <div className="space-y-3 border-t border-border pt-4">
          <h2 className="text-sm font-semibold text-card-foreground">
            Admin Login (Demo)
          </h2>
          <button
            onClick={handleAdminLogin}
            className="w-full rounded-lg border border-border py-2 text-sm font-medium text-card-foreground hover:bg-muted transition"
          >
            Login as Admin
          </button>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          New user?{" "}
          <Link href="/signup" className="text-primary hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </main>
  );
}
