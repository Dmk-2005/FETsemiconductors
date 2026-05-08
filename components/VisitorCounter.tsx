"use client";

import { useEffect, useState, useRef } from "react";

const STORAGE_KEY = "fet_visit_count";
const DIGITS = 5;

function OdometerDigit({ digit, animate }: { digit: number; animate: boolean }) {
  const offset = digit * 36;
  return (
    <div
      className="relative overflow-hidden bg-gray-900 border border-gray-600"
      style={{ width: 28, height: 36, borderRadius: 4 }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          transform: `translateY(-${offset}px)`,
          transition: animate ? "transform 0.5s cubic-bezier(0.4,0,0.2,1)" : "none",
        }}
      >
        {[0,1,2,3,4,5,6,7,8,9].map((n) => (
          <div key={n} style={{ height: 36, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontFamily: "monospace", fontWeight: 700, fontSize: 18 }}>
            {n}
          </div>
        ))}
      </div>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 8, background: "linear-gradient(to bottom, #111827, transparent)", zIndex: 10 }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 8, background: "linear-gradient(to top, #111827, transparent)", zIndex: 10 }} />
    </div>
  );
}

export default function VisitorCounter() {
  const [displayCount, setDisplayCount] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [ready, setReady] = useState(false);
  const called = useRef(false);

  useEffect(() => {
    if (called.current) return;
    called.current = true;
    setReady(true);

    fetch("https://api.counterapi.dev/v1/fetsemi-website/visits/up")
      .then((res) => res.json())
      .then((data) => {
        const count = data?.count ?? 0;
        localStorage.setItem(STORAGE_KEY, String(count));
        setTimeout(() => { setAnimate(true); setDisplayCount(count); }, 300);
      })
      .catch(() => {
        const stored = parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10) + 1;
        localStorage.setItem(STORAGE_KEY, String(stored));
        setTimeout(() => { setAnimate(true); setDisplayCount(stored); }, 300);
      });
  }, []);

  const digits = String(displayCount).padStart(DIGITS, "0").slice(-DIGITS).split("").map(Number);

  if (!ready) return null;

  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-500 text-xs font-medium">Visitors</span>
      <div className="flex gap-px">
        {digits.map((d, i) => <OdometerDigit key={i} digit={d} animate={animate} />)}
      </div>
    </div>
  );
}
