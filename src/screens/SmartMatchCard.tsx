import { useState } from 'react'

const PROFILE = {
  name: 'Aditya Malhotra',
  age: 29,
  city: 'Bengaluru',
  profession: 'Product Lead · Fintech',
}

const ICEBREAKERS = [
  'Both into trekking 🏔',
  'You both love filter coffee ☕',
  'Same IIM alumni network 🎓',
] as const

export function SmartMatchCard() {
  const [activeIce, setActiveIce] = useState<number | null>(0)

  return (
    <div className="relative flex min-h-full flex-col overflow-hidden bg-gradient-to-b from-[#fdf7fa] to-white px-4 pb-28 pt-6">
      <header className="mb-4 px-1 text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-berry-accent">
          Smart Match
        </p>
        <h1 className="mt-1 text-xl font-semibold text-berry">Today&apos;s pick</h1>
      </header>

      <div className="relative mx-auto w-full max-w-[340px] origin-bottom animate-[swipeHint_2.4s_ease-in-out_infinite]">
        <p className="mb-2 text-center text-[11px] font-medium text-neutral-400">
          Swipe card · Try matching vibe
        </p>

        <article className="overflow-hidden rounded-3xl border border-rose-100/90 bg-white shadow-xl shadow-berry/10">
          <div className="flex flex-wrap gap-2 border-b border-rose-50 bg-gradient-to-r from-berry/5 to-transparent px-4 py-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-berry/10 px-2.5 py-1 text-[11px] font-semibold text-berry">
              🛡 Verified
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-100/90 px-2.5 py-1 text-[11px] font-semibold text-amber-900">
              💫 87% Match
            </span>
          </div>

          <div className="aspect-[4/5] w-full bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-300">
            <div className="flex h-full flex-col items-center justify-center gap-2 text-neutral-500">
              <span className="text-5xl opacity-40">👤</span>
              <span className="text-xs font-medium">Photo placeholder</span>
            </div>
          </div>

          <div className="space-y-3 px-4 pb-4 pt-4">
            <div>
              <h2 className="text-lg font-bold text-berry">{PROFILE.name}</h2>
              <p className="text-sm text-neutral-600">
                {PROFILE.age} · {PROFILE.city}
              </p>
              <p className="mt-1 text-sm font-medium text-neutral-700">{PROFILE.profession}</p>
            </div>

            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-neutral-400">
                Personalised icebreakers
              </p>
              <div className="flex flex-col gap-2">
                {ICEBREAKERS.map((line, i) => (
                  <button
                    key={line}
                    type="button"
                    onClick={() => setActiveIce(i)}
                    className={`rounded-xl border px-3 py-2.5 text-left text-sm transition ${
                      activeIce === i
                        ? 'border-gold bg-amber-50/90 font-semibold text-berry shadow-sm ring-2 ring-gold/40'
                        : 'border-rose-100 bg-white text-neutral-700 hover:border-rose-200'
                    }`}
                  >
                    {line}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3 px-1">
        <button
          type="button"
          className="flex h-14 flex-1 items-center justify-center rounded-2xl border-2 border-neutral-300 bg-white text-lg font-semibold text-neutral-600 shadow-sm transition active:scale-95"
          aria-label="Skip"
        >
          ✕ <span className="ml-1 text-xs">Skip</span>
        </button>
        <button
          type="button"
          className="flex h-14 flex-[1.15] items-center justify-center rounded-2xl bg-gradient-to-br from-berry-accent to-berry text-lg font-semibold text-white shadow-lg shadow-berry-accent/35 transition active:scale-95"
          aria-label="Accept"
        >
          ❤ <span className="ml-1 text-xs">Accept</span>
        </button>
        <button
          type="button"
          className="flex h-14 flex-1 items-center justify-center rounded-2xl border-2 border-gold/50 bg-amber-50 text-lg font-semibold text-berry transition active:scale-95"
          aria-label="Family share"
        >
          👨‍👩‍👧 <span className="ml-1 text-xs">Family</span>
        </button>
      </div>
    </div>
  )
}
