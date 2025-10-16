"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const search = useSearchParams();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) throw new Error("invalid");
      const next = search.get("next") || "/admin";
      router.replace(next);
    } catch {
      setError("Credenziali non valide");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <form onSubmit={onSubmit} className="w-full max-w-sm space-y-6 border p-6">
        <h1 className="text-2xl font-semibold">Login Admin</h1>
        <div>
          <label className="text-sm block mb-2">Username</label>
          <Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="admin" />
        </div>
        <div>
          <label className="text-sm block mb-2">Password</label>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
        </div>
        {error && <div className="text-sm text-red-600">{error}</div>}
        <Button type="submit" disabled={submitting} className="w-full">
          {submitting ? "Accesso..." : "Accedi"}
        </Button>
      </form>
    </main>
  );
}



