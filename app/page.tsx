"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [code, setCode] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);

  function generateCode() {
    const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
    setCode(randomCode);
    setTimeLeft(60); // start 60 sec cooldown
  }

  // countdown timer
  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const isDisabled = timeLeft > 0;

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <div className="text-center max-w-xl px-6">
        <h1 className="text-4xl font-bold mb-4">
          Private Facebook Group Access
        </h1>

        <p className="text-gray-300 mb-8">
          This group is invite-only. You must complete a quick verification
          process before joining.
        </p>

        <button
          onClick={generateCode}
          disabled={isDisabled}
          className={`px-6 py-3 rounded-lg text-lg font-medium transition ${
            isDisabled
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {timeLeft > 0 ? `Wait ${timeLeft}s` : code ? "Resend Code" : "Start Verification"}
        </button>

        {code && (
          <div className="mt-6 bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-400 text-sm">Your verification code:</p>
            <p className="text-2xl font-bold tracking-widest">{code}</p>
          </div>
        )}

        <p className="text-xs text-gray-500 mt-6">
          Anti-bot protection enabled • Manual approval required
        </p>
      </div>
    </main>
  );
}