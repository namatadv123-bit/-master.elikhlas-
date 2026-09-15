export default function Loading() {
  return (
    <div className="min-h-screen bg-[#070b12] flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-spin mx-auto" />
        <p className="text-amber-400 font-bold text-sm">جاري التحميل...</p>
      </div>
    </div>
  );
}
