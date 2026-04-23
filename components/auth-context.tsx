// components/auth-context.tsx
"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Role = "user" | "admin";

type User = {
  name: string;
  role: Role;
} | null;

type Profile = {
  firstName: string;
  middleName?: string;
  lastName?: string;
  dob?: string;
  gender?: string;
  maritalStatus?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  pincode?: string;
  country?: string;
} | null;

type AuthContextType = {
  user: User;
  profile: Profile;
  updateProfile: (data: NonNullable<Profile>) => void;
  loginAsUser: (name: string) => void;
  loginAsAdmin: (name: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [profile, setProfile] = useState<Profile>(null);

  // page reload hone par localStorage se profile load karo
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem("fmc_profile");
    if (saved) {
      try {
        setProfile(JSON.parse(saved));
      } catch {
        // agar parse error ho jaye to ignore
      }
    }
  }, []);

  const updateProfile = (data: NonNullable<Profile>) => {
    setProfile(data);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("fmc_profile", JSON.stringify(data));
    }
  };

  const loginAsUser = (name: string) => {
    setUser({ name, role: "user" });
  };

  const loginAsAdmin = (name: string) => {
    setUser({ name, role: "admin" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, profile, updateProfile, loginAsUser, loginAsAdmin, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return ctx;
}
