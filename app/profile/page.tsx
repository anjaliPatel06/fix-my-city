"use client";

import { FormEvent, useEffect, useState } from "react";
import { useAuth } from "@/components/auth-context";

export default function ProfilePage() {
  const { profile, updateProfile } = useAuth();
  const [isSaving, setIsSaving] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    if (!profile) return;
    setFirstName(profile.firstName || "");
    setMiddleName(profile.middleName || "");
    setLastName(profile.lastName || "");
    setDob(profile.dob || "");
    setGender(profile.gender || "");
    setMaritalStatus(profile.maritalStatus || "");
    setAddressLine1(profile.addressLine1 || "");
    setAddressLine2(profile.addressLine2 || "");
    setCity(profile.city || "");
    setState(profile.state || "");
    setPincode(profile.pincode || "");
    setCountry(profile.country || "");
  }, [profile]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!firstName.trim()) {
      alert("First name is required.");
      return;
    }

    try {
      setIsSaving(true);
      await updateProfile({
        firstName: firstName.trim(),
        middleName: middleName.trim() || undefined,
        lastName: lastName.trim() || undefined,
        dob: dob || undefined,
        gender: gender || undefined,
        maritalStatus: maritalStatus || undefined,
        addressLine1: addressLine1.trim() || undefined,
        addressLine2: addressLine2.trim() || undefined,
        city: city.trim() || undefined,
        state: state.trim() || undefined,
        pincode: pincode.trim() || undefined,
        country: country.trim() || undefined,
      });

      alert("Profile saved successfully.");
    } catch (error) {
      alert(error instanceof Error ? error.message : "Profile save failed.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <main className="flex min-h-[80vh] items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl rounded-2xl border border-border bg-card/80 shadow-lg">
        <div className="border-b border-border px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              My Profile
            </p>
            <h1 className="text-lg sm:text-xl font-semibold text-card-foreground">
              Personal Information
            </h1>
          </div>
        </div>

        <div className="px-6 pt-4">
          <div className="mb-4 rounded-xl bg-blue-500/10 border border-blue-500/40 px-4 py-3 text-xs sm:text-sm text-black-100">
            <p className="font-medium">
              Fill in your correct details because this profile is now stored in the project database.
            </p>
          </div>
        </div>

        <form className="px-6 pb-6 space-y-8" onSubmit={handleSubmit}>
          <section className="space-y-4">
            <h2 className="text-base sm:text-lg font-semibold text-card-foreground">
              Personal Details
            </h2>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="sm:col-span-1">
                <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1">
                  First Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background/60 px-3 py-2 text-sm text-card-foreground outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div className="sm:col-span-1">
                <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1">
                  Middle Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Middle Name"
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background/60 px-3 py-2 text-sm text-card-foreground outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div className="sm:col-span-1">
                <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background/60 px-3 py-2 text-sm text-card-foreground outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="sm:col-span-1">
                <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background/60 px-3 py-2 text-sm text-card-foreground outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div className="sm:col-span-1">
                <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1">
                  Gender
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background/60 px-3 py-2 text-sm text-card-foreground outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select Gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                  <option value="prefer_not">Prefer not to say</option>
                </select>
              </div>

              <div className="sm:col-span-1">
                <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1">
                  Marital Status
                </label>
                <select
                  value={maritalStatus}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background/60 px-3 py-2 text-sm text-card-foreground outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select Marital Status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-base sm:text-lg font-semibold text-card-foreground">
              Address Details
            </h2>

            <div className="space-y-3">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1">
                  Address Line 1
                </label>
                <input
                  type="text"
                  placeholder="House No., Street, Area"
                  value={addressLine1}
                  onChange={(e) => setAddressLine1(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background/60 px-3 py-2 text-sm text-card-foreground outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1">
                  Address Line 2
                </label>
                <input
                  type="text"
                  placeholder="Landmark, Nearby place (optional)"
                  value={addressLine2}
                  onChange={(e) => setAddressLine2(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background/60 px-3 py-2 text-sm text-card-foreground outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1">
                  City
                </label>
                <input
                  type="text"
                  placeholder="Enter City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background/60 px-3 py-2 text-sm text-card-foreground outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1">
                  State
                </label>
                <input
                  type="text"
                  placeholder="Enter State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background/60 px-3 py-2 text-sm text-card-foreground outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1">
                  Pincode
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Enter Pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background/60 px-3 py-2 text-sm text-card-foreground outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1">
                  Country
                </label>
                <input
                  type="text"
                  placeholder="Enter Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background/60 px-3 py-2 text-sm text-card-foreground outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
          </section>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              className="px-4 py-2 rounded-lg text-sm font-medium border border-border text-muted-foreground hover:bg-muted/60 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSaving}
              className="px-5 py-2 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {isSaving ? "Saving..." : "Save & Continue"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
