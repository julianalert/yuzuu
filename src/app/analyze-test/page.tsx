"use client";
import React, { useState } from "react";

export default function AnalyzeTestPage() {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("/api/analyze-website", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ websiteUrl, userEmail }),
      });
      const data = await res.json();
      if (!res.ok) throw data;
      setResult(data);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "2rem auto", padding: 24, border: "1px solid #eee", borderRadius: 8 }}>
      <h2>Test Analyze Website API</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <input
          type="text"
          placeholder="Website URL (https://...)"
          value={websiteUrl}
          onChange={e => setWebsiteUrl(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={userEmail}
          onChange={e => setUserEmail(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </form>
      {error && (
        <pre style={{ color: "red", marginTop: 12, background: "#fff0f0", padding: 12, borderRadius: 4, fontSize: 13 }}>
          {typeof error === 'string' ? error : JSON.stringify(error, null, 2)}
        </pre>
      )}
      {result && (
        <pre style={{ marginTop: 16, background: "#f9f9f9", padding: 12, borderRadius: 4, fontSize: 13 }}>
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
} 