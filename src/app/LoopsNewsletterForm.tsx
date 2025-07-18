"use client";
import { useRef, useState } from "react";

function LoopsNewsletterForm() {
  const [status, setStatus] = useState("idle"); // idle, loading, success, error, rateLimit
  const [errorMsg, setErrorMsg] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const timestamp = Date.now();
    const previousTimestamp = localStorage.getItem("loops-form-timestamp");
    if (previousTimestamp && Number(previousTimestamp) + 60000 > timestamp) {
      setStatus("rateLimit");
      setErrorMsg("Too many signups, please try again in a little while");
      return;
    }
    localStorage.setItem("loops-form-timestamp", String(timestamp));
    setStatus("loading");
    setErrorMsg("");
    const email = inputRef.current?.value || "";
    const formBody = `userGroup=Waiting%20List&mailingLists=&email=${encodeURIComponent(email)}`;
    try {
      const res = await fetch(
        "https://app.loops.so/api/newsletter-form/cmakxd8pd0tz8rgtrm7ue7kzl",
        {
          method: "POST",
          body: formBody,
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );
      if (res.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        const data = await res.json();
        setStatus("error");
        setErrorMsg(data.message || res.statusText);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.message === "Failed to fetch") {
          setStatus("rateLimit");
          setErrorMsg("Too many signups, please try again in a little while");
        } else {
          setStatus("error");
          setErrorMsg(error.message || "Oops! Something went wrong, please try again");
          localStorage.setItem("loops-form-timestamp", "");
        }
      } else {
        setStatus("error");
        setErrorMsg("Oops! Something went wrong, please try again");
        localStorage.setItem("loops-form-timestamp", "");
      }
    }
  };

  const handleBack = () => {
    setStatus("idle");
    setErrorMsg("");
  };

  return (
    <div className="newsletter-form-container flex flex-col items-center w-full">
      {status === "success" ? (
        <div className="newsletter-success flex flex-col items-center justify-center w-full">
          <p className="newsletter-success-message text-black text-sm" style={{ fontFamily: "Inter, sans-serif" }}>Thanks! We&apos;ll be in touch!</p>
          <button
            type="button"
            className="newsletter-back-button"
            style={{
              color: "#6b7280",
              fontSize: 14,
              fontFamily: "Inter, sans-serif",
              margin: "10px auto",
              textAlign: "center",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            onClick={handleBack}
            onMouseOver={e => (e.currentTarget.style.textDecoration = "underline")}
            onMouseOut={e => (e.currentTarget.style.textDecoration = "none")}
          >
            &larr; Back
          </button>
        </div>
      ) : (
        <form
          className="newsletter-form flex flex-col items-center w-full"
          action="https://app.loops.so/api/newsletter-form/cmakxd8pd0tz8rgtrm7ue7kzl"
          method="POST"
          onSubmit={handleSubmit}
          style={{ width: "100%" }}
        >
          <input
            className="newsletter-form-input"
            name="newsletter-form-input"
            type="email"
            placeholder="you@example.com"
            required
            ref={inputRef}
            style={{
              fontFamily: "Inter, sans-serif",
              color: "#000",
              fontSize: 14,
              margin: "0 0 10px",
              width: "100%",
              maxWidth: 300,
              minWidth: 100,
              background: "#fff",
              border: "1px solid #d1d5db",
              boxSizing: "border-box",
              boxShadow: "rgba(0,0,0,0.05) 0px 1px 2px",
              borderRadius: 6,
              padding: "8px 12px",
            }}
            disabled={status === "loading"}
          />
          {status === "loading" ? (
            <button
              type="button"
              className="newsletter-loading-button"
              style={{
                background: "#000",
                fontSize: 14,
                color: "#fff",
                fontFamily: "Inter, sans-serif",
                width: "100%",
                maxWidth: 300,
                height: 38,
                alignItems: "center",
                justifyContent: "center",
                padding: "9px 17px",
                boxShadow: "rgba(0,0,0,0.05) 0px 1px 2px",
                borderRadius: 6,
                textAlign: "center",
                fontWeight: 500,
                lineHeight: "20px",
                border: "none",
                cursor: "pointer",
                display: "flex",
              }}
              disabled
            >
              Please wait...
            </button>
          ) : (
            <button
              type="submit"
              className="newsletter-form-button"
              style={{
                background: "#000",
                fontSize: 14,
                color: "#fff",
                fontFamily: "Inter, sans-serif",
                width: "100%",
                maxWidth: 300,
                height: 38,
                alignItems: "center",
                justifyContent: "center",
                padding: "9px 17px",
                boxShadow: "rgba(0,0,0,0.05) 0px 1px 2px",
                borderRadius: 6,
                textAlign: "center",
                fontWeight: 500,
                lineHeight: "20px",
                border: "none",
                cursor: "pointer",
                display: "flex",
              }}
            >
              Get the free leads
            </button>
          )}
          {(status === "error" || status === "rateLimit") && (
            <div className="newsletter-error flex flex-col items-center justify-center w-full mt-2">
              <p
                className="newsletter-error-message"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "rgb(185, 28, 28)",
                  fontSize: 14,
                }}
              >
                {errorMsg || "Oops! Something went wrong, please try again"}
              </p>
              <button
                type="button"
                className="newsletter-back-button"
                style={{
                  color: "#6b7280",
                  fontSize: 14,
                  fontFamily: "Inter, sans-serif",
                  margin: "10px auto",
                  textAlign: "center",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={handleBack}
                onMouseOver={e => (e.currentTarget.style.textDecoration = "underline")}
                onMouseOut={e => (e.currentTarget.style.textDecoration = "none")}
              >
                &larr; Back
              </button>
            </div>
          )}
        </form>
      )}
    </div>
  );
}

export default LoopsNewsletterForm; 