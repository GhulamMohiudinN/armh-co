'use client';

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Static gradient background - minimalist approach */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-50 via-emerald-50/20 to-charcoal-100" />
    </div>
  );
}
