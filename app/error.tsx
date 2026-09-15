"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#070b12] flex items-center justify-center text-white">
      <div className="text-center space-y-4 max-w-md mx-auto px-4">
        <h2 className="text-3xl font-black text-amber-400">حدث خطأ!</h2>
        <p className="text-slate-300">عذراً، حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.</p>
        <button
          onClick={reset}
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 font-black"
        >
          حاول مرة أخرى
        </button>
      </div>
    </div>
  );
}
