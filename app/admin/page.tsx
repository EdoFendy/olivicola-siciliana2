"use client";
import { useEffect, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Lead = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string | null;
  message?: string | null;
  created_at: string;
};

export default function AdminDashboard() {
  const [rows, setRows] = useState<Lead[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    date_from: "",
    date_to: "",
  });

  const query = useMemo(() => {
    const p = new URLSearchParams();
    (Object.entries(filters) as [string, string][]).forEach(([k, v]) => {
      if (v) p.set(k, v);
    });
    p.set("limit", "200");
    return p.toString();
  }, [filters]);

  async function load() {
    setLoading(true);
    try {
      const res = await fetch(`/api/leads?${query}`);
      const data = await res.json();
      setRows(data.rows ?? []);
      setTotal(data.total ?? 0);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <main className="min-h-screen p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Leads</h1>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await fetch("/api/admin/logout", { method: "POST" });
            window.location.href = "/admin/login";
          }}
        >
          <Button type="submit" variant="secondary">Logout</Button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
        <Input placeholder="Nome" value={filters.first_name} onChange={(e) => setFilters(f => ({ ...f, first_name: e.target.value }))} />
        <Input placeholder="Cognome" value={filters.last_name} onChange={(e) => setFilters(f => ({ ...f, last_name: e.target.value }))} />
        <Input placeholder="Email" value={filters.email} onChange={(e) => setFilters(f => ({ ...f, email: e.target.value }))} />
        <Input placeholder="Telefono" value={filters.phone} onChange={(e) => setFilters(f => ({ ...f, phone: e.target.value }))} />
        <Input type="date" placeholder="Dal" value={filters.date_from} onChange={(e) => setFilters(f => ({ ...f, date_from: e.target.value }))} />
        <Input type="date" placeholder="Al" value={filters.date_to} onChange={(e) => setFilters(f => ({ ...f, date_to: e.target.value }))} />
      </div>

      <div className="overflow-auto border">
        <table className="min-w-full text-sm">
          <thead className="bg-muted/40">
            <tr>
              <th className="text-left p-2">Data</th>
              <th className="text-left p-2">Nome</th>
              <th className="text-left p-2">Cognome</th>
              <th className="text-left p-2">Email</th>
              <th className="text-left p-2">Telefono</th>
              <th className="text-left p-2">Messaggio</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t">
                <td className="p-2 whitespace-nowrap">{new Date(r.created_at).toLocaleString()}</td>
                <td className="p-2">{r.first_name}</td>
                <td className="p-2">{r.last_name}</td>
                <td className="p-2">{r.email}</td>
                <td className="p-2">{r.phone ?? ""}</td>
                <td className="p-2 max-w-[400px] truncate" title={r.message ?? ""}>{r.message}</td>
              </tr>
            ))}
            {!loading && rows.length === 0 && (
              <tr>
                <td className="p-4 text-center text-muted-foreground" colSpan={6}>Nessun risultato</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="text-sm text-muted-foreground">Totale: {total}</div>
    </main>
  );
}



