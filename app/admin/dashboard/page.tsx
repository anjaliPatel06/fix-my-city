// app/admin/dashboard/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth-context";
import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  Loader2,
  MapPin,
  Search,
  Filter,
  MoreHorizontal,
} from "lucide-react";

type Status = "Pending" | "In Progress" | "Resolved";

type Complaint = {
  id: string;
  category: string;
  area: string;
  city: string;
  status: Status;
  priority: "Low" | "Medium" | "High";
  date: string;
  time: string;
};

const dummyComplaints: Complaint[] = [
  {
    id: "#1023",
    category: "Pothole",
    area: "MG Road",
    city: "Mumbai",
    status: "Pending",
    priority: "High",
    date: "21 Nov 2025",
    time: "10:32 AM",
  },
  {
    id: "#1022",
    category: "Streetlight not working",
    area: "Sector 15",
    city: "Pune",
    status: "Resolved",
    priority: "Medium",
    date: "20 Nov 2025",
    time: "08:14 PM",
  },
  {
    id: "#1021",
    category: "Garbage collection",
    area: "Old City",
    city: "Jaipur",
    status: "In Progress",
    priority: "High",
    date: "20 Nov 2025",
    time: "03:47 PM",
  },
  {
    id: "#1020",
    category: "Water leakage",
    area: "Civil Lines",
    city: "Mumbai",
    status: "Pending",
    priority: "Medium",
    date: "19 Nov 2025",
    time: "11:05 AM",
  },
  {
    id: "#1019",
    category: "Broken footpath",
    area: "Station Road",
    city: "Pune",
    status: "Resolved",
    priority: "Low",
    date: "18 Nov 2025",
    time: "05:29 PM",
  },
];

const statusColors: Record<Status, string> = {
  Pending:
    "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-200 dark:border-amber-500/60",
  "In Progress":
    "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-500/10 dark:text-sky-200 dark:border-sky-500/60",
  Resolved:
    "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-200 dark:border-emerald-500/60",
};

export default function AdminDashboardPage() {
  const { user } = useAuth();
  const router = useRouter();

  // Route guard – sirf admin ke liye
  useEffect(() => {
    if (!user) {
      router.push("/login");
      return;
    }
    if (user.role !== "admin") {
      router.push("/");
    }
  }, [user, router]);

  // UI state
  const [statusFilter, setStatusFilter] = useState<Status | "All">("All");
  const [cityFilter, setCityFilter] = useState<string>("All");
  const [search, setSearch] = useState("");

  const cities = useMemo(
    () => Array.from(new Set(dummyComplaints.map((c) => c.city))),
    []
  );

  const stats = useMemo(() => {
    const total = dummyComplaints.length;
    const pending = dummyComplaints.filter((c) => c.status === "Pending").length;
    const inProgress = dummyComplaints.filter((c) => c.status === "In Progress").length;
    const resolved = dummyComplaints.filter((c) => c.status === "Resolved").length;
    return { total, pending, inProgress, resolved };
  }, []);

  const filteredComplaints = useMemo(() => {
    return dummyComplaints.filter((c) => {
      if (statusFilter !== "All" && c.status !== statusFilter) return false;
      if (cityFilter !== "All" && c.city !== cityFilter) return false;
      if (
        search &&
        !(
          c.id.toLowerCase().includes(search.toLowerCase()) ||
          c.category.toLowerCase().includes(search.toLowerCase()) ||
          c.area.toLowerCase().includes(search.toLowerCase())
        )
      ) {
        return false;
      }
      return true;
    });
  }, [statusFilter, cityFilter, search]);

  if (!user || user.role !== "admin") {
    return (
      <main className="min-h-[80vh] flex items-center justify-center">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Checking admin access…</span>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[80vh] px-4 py-8 flex justify-center bg-slate-50 dark:bg-slate-950">
      <div className="w-full max-w-6xl space-y-6">
        {/* Header */}
        <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
              Admin Dashboard
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Monitor city issues, track resolution status and manage high-priority cases.
            </p>
            <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
              Last updated: 21 Nov 2025, 10:45 AM
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs sm:text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition-colors dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800">
              <Filter className="mr-2 h-4 w-4" />
              Export CSV
            </button>
            <button
              onClick={() => router.push("/report")}
              className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-xs sm:text-sm font-medium text-white shadow-md hover:bg-blue-500 transition-colors"
            >
              <AlertTriangle className="mr-2 h-4 w-4" />
              New Complaint
            </button>
          </div>
        </header>

        {/* Stats cards */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:bg-slate-900 dark:border-slate-800">
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                Total Complaints
              </p>
              <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <p className="mt-3 text-3xl font-semibold text-slate-900 dark:text-slate-50">
              {stats.total}
            </p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Across {cities.length} cities
            </p>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 shadow-sm dark:bg-amber-500/10 dark:border-amber-500/40">
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs font-medium text-amber-700 uppercase tracking-wide dark:text-amber-200">
                Pending
              </p>
              <AlertTriangle className="h-5 w-5 text-amber-500 dark:text-amber-300" />
            </div>
            <p className="mt-3 text-3xl font-semibold text-amber-800 dark:text-amber-100">
              {stats.pending}
            </p>
            <p className="mt-1 text-xs text-amber-700/80 dark:text-amber-200/80">
              Need assignment or action
            </p>
          </div>

          <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4 shadow-sm dark:bg-sky-500/10 dark:border-sky-500/40">
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs font-medium text-sky-700 uppercase tracking-wide dark:text-sky-200">
                In Progress
              </p>
              <Clock className="h-5 w-5 text-sky-500 dark:text-sky-300" />
            </div>
            <p className="mt-3 text-3xl font-semibold text-sky-800 dark:text-sky-100">
              {stats.inProgress}
            </p>
            <p className="mt-1 text-xs text-sky-700/80 dark:text-sky-200/80">
              Assigned to field teams
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 shadow-sm dark:bg-emerald-500/10 dark:border-emerald-500/40">
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs font-medium text-emerald-700 uppercase tracking-wide dark:text-emerald-200">
                Resolved
              </p>
              <CheckCircle2 className="h-5 w-5 text-emerald-500 dark:text-emerald-300" />
            </div>
            <p className="mt-3 text-3xl font-semibold text-emerald-800 dark:text-emerald-100">
              {stats.resolved}
            </p>
            <p className="mt-1 text-xs text-emerald-700/80 dark:text-emerald-200/80">
              Successfully closed issues
            </p>
          </div>
        </section>

        {/* Main grid: table + side panel */}
        <section className="grid gap-6 lg:grid-cols-3">
          {/* Left: Filters + table */}
          <div className="lg:col-span-2 space-y-4">
            {/* Filters */}
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:bg-slate-900 dark:border-slate-800">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                  Complaints Overview
                </h2>

                <div className="flex flex-wrap gap-2">
                  {(["All", "Pending", "In Progress", "Resolved"] as const).map(
                    (status) => (
                      <button
                        key={status}
                        onClick={() =>
                          setStatusFilter(
                            status === "All" ? "All" : (status as Status)
                          )
                        }
                        className={`rounded-full px-3 py-1 text-xs font-medium border transition-colors ${
                          statusFilter === status
                            ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                            : "border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                        }`}
                      >
                        {status}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                {/* Search */}
                <div className="relative w-full sm:max-w-xs">
                  <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by ID, area, category…"
                    className="w-full rounded-full border border-slate-200 bg-slate-50 pl-9 pr-3 py-2 text-xs sm:text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100"
                  />
                </div>

                {/* City Filter */}
                <select
                  value={cityFilter}
                  onChange={(e) => setCityFilter(e.target.value)}
                  className="w-full sm:w-40 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs sm:text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100"
                >
                  <option value="All">All Cities</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Table */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm dark:bg-slate-900 dark:border-slate-800">
              <div className="border-b border-slate-200 px-4 py-3 flex items-center justify-between dark:border-slate-800">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                  Latest Complaints
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Showing {filteredComplaints.length} of {dummyComplaints.length}
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm">
                  <thead className="bg-slate-50 text-slate-500 border-b border-slate-200 dark:bg-slate-900/80 dark:text-slate-400 dark:border-slate-800">
                    <tr>
                      <th className="px-4 py-2 text-left font-medium">ID</th>
                      <th className="px-4 py-2 text-left font-medium">
                        Category
                      </th>
                      <th className="px-4 py-2 text-left font-medium">Area</th>
                      <th className="px-4 py-2 text-left font-medium">City</th>
                      <th className="px-4 py-2 text-left font-medium">
                        Status
                      </th>
                      <th className="px-4 py-2 text-left font-medium">
                        Priority
                      </th>
                      <th className="px-4 py-2 text-left font-medium">
                        Date &amp; Time
                      </th>
                      <th className="px-4 py-2 text-right font-medium">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredComplaints.map((c, idx) => (
                      <tr
                        key={c.id}
                        className={`border-t border-slate-100 dark:border-slate-800 ${
                          idx % 2 === 0
                            ? "bg-white dark:bg-slate-900"
                            : "bg-slate-50/70 dark:bg-slate-900/80"
                        } hover:bg-blue-50/60 dark:hover:bg-slate-800/80 transition-colors`}
                      >
                        <td className="px-4 py-2 align-top text-slate-900 dark:text-slate-50 font-mono">
                          {c.id}
                        </td>
                        <td className="px-4 py-2 align-top text-slate-800 dark:text-slate-100">
                          {c.category}
                        </td>
                        <td className="px-4 py-2 align-top text-slate-800 dark:text-slate-100">
                          {c.area}
                        </td>
                        <td className="px-4 py-2 align-top text-slate-800 dark:text-slate-100">
                          {c.city}
                        </td>
                        <td className="px-4 py-2 align-top">
                          <span
                            className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium ${statusColors[c.status]}`}
                          >
                            {c.status}
                          </span>
                        </td>
                        <td className="px-4 py-2 align-top">
                          <span
                            className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium border ${
                              c.priority === "High"
                                ? "bg-red-50 text-red-700 border-red-200 dark:bg-red-500/10 dark:text-red-200 dark:border-red-500/50"
                                : c.priority === "Medium"
                                ? "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-200 dark:border-amber-500/50"
                                : "bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-500/10 dark:text-slate-200 dark:border-slate-500/50"
                            }`}
                          >
                            {c.priority}
                          </span>
                        </td>
                        <td className="px-4 py-2 align-top text-slate-800 dark:text-slate-100">
                          <div className="flex flex-col">
                            <span>{c.date}</span>
                            <span className="text-[11px] text-slate-400 dark:text-slate-500">
                              {c.time}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-2 align-top text-right">
                          <button className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] text-slate-600 hover:bg-slate-50 shadow-sm dark:bg-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
                            <MoreHorizontal className="h-3 w-3" />
                            <span className="ml-1 hidden sm:inline">
                              Manage
                            </span>
                          </button>
                        </td>
                      </tr>
                    ))}

                    {filteredComplaints.length === 0 && (
                      <tr>
                        <td
                          colSpan={8}
                          className="px-4 py-6 text-center text-xs text-slate-500 dark:text-slate-400"
                        >
                          No complaints found for selected filters.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right: City breakdown + recent activity */}
          <div className="space-y-4">
            {/* City-wise stats */}
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:bg-slate-900 dark:border-slate-800">
              <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50 mb-2">
                City-wise Breakdown
              </h2>

              <div className="space-y-3">
                {cities.map((city) => {
                  const total = dummyComplaints.filter((c) => c.city === city)
                    .length;
                  const resolved = dummyComplaints.filter(
                    (c) => c.city === city && c.status === "Resolved"
                  ).length;
                  const percent =
                    total === 0 ? 0 : Math.round((resolved / total) * 100);

                  return (
                    <div
                      key={city}
                      className="rounded-xl border border-slate-100 bg-slate-50 p-3 space-y-1 dark:bg-slate-900 dark:border-slate-800"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-900 dark:text-slate-50">
                          {city}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400">
                          {resolved}/{total} resolved
                        </span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden dark:bg-slate-800">
                        <div
                          className="h-full rounded-full bg-emerald-500"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {percent}% resolution rate
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recent activity */}
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:bg-slate-900 dark:border-slate-800">
              <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Recent Activity
              </h2>

              <ul className="space-y-3 text-xs">
                <li className="flex gap-3">
                  <div className="mt-0.5 h-6 w-6 rounded-full bg-emerald-50 flex items-center justify-center dark:bg-emerald-500/15">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 dark:text-emerald-300" />
                  </div>
                  <div>
                    <p className="text-slate-900 dark:text-slate-100">
                      Complaint <span className="font-mono">#1022</span> marked as{" "}
                      <span className="font-medium text-emerald-600 dark:text-emerald-300">
                        Resolved
                      </span>
                      .
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      15 min ago • Sector 15, Pune
                    </p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <div className="mt-0.5 h-6 w-6 rounded-full bg-sky-50 flex items-center justify-center dark:bg-sky-500/15">
                    <Clock className="h-3.5 w-3.5 text-sky-500 dark:text-sky-300" />
                  </div>
                  <div>
                    <p className="text-slate-900 dark:text-slate-100">
                      Field team assigned to{" "}
                      <span className="font-mono">#1021</span> (Garbage collection).
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      1 hour ago • Old City, Jaipur
                    </p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <div className="mt-0.5 h-6 w-6 rounded-full bg-amber-50 flex items-center justify-center dark:bg-amber-500/15">
                    <AlertTriangle className="h-3.5 w-3.5 text-amber-500 dark:text-amber-300" />
                  </div>
                  <div>
                    <p className="text-slate-900 dark:text-slate-100">
                      New high-priority complaint{" "}
                      <span className="font-mono">#1023</span> (Pothole).
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      2 hours ago • MG Road, Mumbai
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
