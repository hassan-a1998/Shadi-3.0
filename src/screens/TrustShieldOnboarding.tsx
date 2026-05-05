import { useEffect, useState } from 'react'

const STEPS = ['Video check', 'Face match', 'ID sync'] as const

export function TrustShieldOnboarding() {
  const [screenStep, setScreenStep] = useState(0)
  const [verifyIndex, setVerifyIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (screenStep !== 1) return
    setVerifyIndex(0)
    setProgress(100 / STEPS.length)
    let n = 0
    const t = window.setInterval(() => {
      n += 1
      if (n <= STEPS.length - 1) {
        setVerifyIndex(n)
        setProgress((n + 1) * (100 / STEPS.length))
      } else {
        window.clearInterval(t)
        setVerifyIndex(STEPS.length - 1)
        setProgress(100)
      }
    }, 1100)
    return () => window.clearInterval(t)
  }, [screenStep])

  return (
    <div className="flex min-h-full flex-col bg-white px-5 pb-24 pt-8">
      <header className="mb-6 text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-berry-accent">
          Shaadi.com 3.0
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-berry">Trust Shield</h1>
        <p className="mt-2 text-sm text-neutral-600">
          Verify once. Match with confidence everywhere on the app.
        </p>
      </header>

      <div
        className="relative flex-1 overflow-hidden rounded-2xl transition-all duration-500 ease-out"
        style={{
          opacity: 1,
          transform: 'translateX(0)',
        }}
      >
        {screenStep === 0 && (
          <section className="flex flex-col gap-4 duration-500 animate-[fadeIn_0.5s_ease-out]">
            <div className="rounded-2xl border border-rose-100 bg-gradient-to-br from-white to-[#fdf5f8] p-5 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-berry text-2xl text-white shadow-md">
                🛡
              </div>
              <h2 className="mt-4 text-lg font-semibold text-berry">
                Your safety is layered
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Trust Shield combines live video, document signals, and social proof so
                serious matches know you are real.
              </p>
            </div>
          </section>
        )}

        {screenStep === 1 && (
          <section className="flex flex-col gap-5 duration-500 animate-[fadeIn_0.5s_ease-out]">
            <div className="relative overflow-hidden rounded-2xl bg-neutral-900 shadow-lg">
              <div className="aspect-[4/5] w-full bg-gradient-to-b from-neutral-800 to-neutral-950">
                <div className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center">
                  <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-4 border-dashed border-white/30">
                    <span className="text-4xl" aria-hidden>
                      📹
                    </span>
                    <span className="absolute inset-0 animate-ping rounded-full border border-white/20" />
                  </div>
                  <p className="text-sm font-medium text-white/90">Video selfie · Liveness</p>
                  <p className="text-xs text-white/60">Hold steady — we are mapping your face mesh</p>
                </div>
              </div>
              <div className="space-y-3 bg-black/40 px-4 py-4 backdrop-blur-md">
                <p className="text-xs font-medium uppercase tracking-wide text-white/70">
                  Verification progress
                </p>
                <div className="h-2 overflow-hidden rounded-full bg-white/15">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-gold to-amber-300 transition-[width] duration-700 ease-out"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  />
                </div>
                <ol className="flex justify-between gap-2 text-[11px] text-white/80">
                  {STEPS.map((label, i) => (
                    <li
                      key={label}
                      className={`flex flex-1 flex-col items-center gap-1 text-center ${
                        i <= verifyIndex ? 'text-gold' : 'text-white/40'
                      }`}
                    >
                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ${
                          i <= verifyIndex ? 'bg-gold text-berry' : 'bg-white/10'
                        }`}
                      >
                        {i + 1}
                      </span>
                      {label}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>
        )}

        {screenStep === 2 && (
          <section className="flex flex-col gap-5 duration-500 animate-[fadeIn_0.5s_ease-out]">
            <div className="rounded-2xl border border-rose-100 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-berry">Strengthen your badge</p>
              <p className="mt-1 text-xs text-neutral-500">
                Optional links boost visibility to families who filter for verified profiles.
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <button
                  type="button"
                  className="flex items-center gap-3 rounded-xl border border-amber-200/80 bg-amber-50/80 px-4 py-3 text-left transition active:scale-[0.99]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-xl shadow-sm">
                    🪪
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm font-semibold text-berry">Link Aadhaar (DigiLocker)</span>
                    <span className="text-xs text-neutral-500">Government-backed identity signal</span>
                  </span>
                  <span className="text-gold">›</span>
                </button>
                <button
                  type="button"
                  className="flex items-center gap-3 rounded-xl border border-[#0a66c2]/20 bg-[#eef5fe] px-4 py-3 text-left transition active:scale-[0.99]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-xl shadow-sm">
                    in
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm font-semibold text-[#0a66c2]">
                      Connect LinkedIn
                    </span>
                    <span className="text-xs text-neutral-500">Career graph & education proof</span>
                  </span>
                  <span className="text-[#0a66c2]">›</span>
                </button>
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Badge tiers preview
              </p>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { tier: 'Basic', tone: 'bg-neutral-100 text-neutral-600 border-neutral-200', dot: 'bg-neutral-400' },
                  { tier: 'Verified', tone: 'bg-rose-50 text-berry border-rose-200', dot: 'bg-berry-accent' },
                  { tier: 'Elite', tone: 'bg-gradient-to-br from-amber-50 to-amber-100 text-berry border-gold/60', dot: 'bg-gold' },
                ].map((b) => (
                  <div
                    key={b.tier}
                    className={`flex flex-col items-center rounded-xl border px-2 py-3 text-center ${b.tone}`}
                  >
                    <span className={`mb-2 h-2 w-2 rounded-full ${b.dot}`} />
                    <span className="text-[11px] font-bold">{b.tier}</span>
                    <span className="mt-1 text-[9px] opacity-80">
                      {b.tier === 'Basic' && 'Phone'}
                      {b.tier === 'Verified' && 'Video + 1 proof'}
                      {b.tier === 'Elite' && 'Full stack'}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-2 flex items-center justify-center gap-1 text-[10px] text-neutral-400">
                <span className="h-px w-6 bg-neutral-200" />
                <span>Progression path</span>
                <span className="h-px w-6 bg-neutral-200" />
              </div>
            </div>
          </section>
        )}
      </div>

      <div className="mt-auto pt-6">
        <div className="mb-4 flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                screenStep === i ? 'w-6 bg-berry' : 'w-1.5 bg-neutral-300'
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => {
            if (screenStep < 2) setScreenStep((s) => s + 1)
            else setScreenStep(0)
          }}
          className="w-full rounded-2xl bg-berry py-3.5 text-sm font-semibold text-white shadow-lg shadow-berry/25 transition active:scale-[0.98]"
        >
          {screenStep < 2 ? 'Next' : 'Finish & explore Soul Score'}
        </button>
      </div>
    </div>
  )
}
