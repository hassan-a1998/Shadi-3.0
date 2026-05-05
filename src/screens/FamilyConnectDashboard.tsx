import { useState } from 'react'

const SHORTLIST = [
  { id: '1', name: 'Aditya Malhotra', meta: '29 · Bengaluru · IIM' },
  { id: '2', name: 'Rohan Mehta', meta: '30 · Mumbai · CA' },
  { id: '3', name: 'Kabir Sen', meta: '28 · Hyderabad · Doctor' },
] as const

export function FamilyConnectDashboard() {
  const [approved, setApproved] = useState<Record<string, boolean>>({
    '1': true,
    '2': false,
    '3': true,
  })
  const [scheduleOpen, setScheduleOpen] = useState(false)
  const [consentOpen, setConsentOpen] = useState(false)
  const [dateStr, setDateStr] = useState('2026-05-10')
  const [timeStr, setTimeStr] = useState('18:30')

  return (
    <div className="flex min-h-full flex-col bg-gradient-to-b from-white to-[#faf5f8] px-4 pb-28 pt-7">
      <header className="mb-5 flex flex-col gap-2 border-b border-rose-100 pb-4 text-left">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h1 className="text-xl font-semibold text-berry">Welcome, Dad — Riya&apos;s profile</h1>
            <p className="mt-1 text-sm text-neutral-600">Family Connect · limited parent view</p>
          </div>
          <span className="shrink-0 rounded-full bg-amber-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-900">
            Limited access
          </span>
        </div>
        <button
          type="button"
          onClick={() => setConsentOpen(true)}
          className="mt-1 w-fit rounded-lg border border-dashed border-berry/30 bg-rose-50/80 px-3 py-2 text-xs font-medium text-berry"
        >
          Riya must approve deeper access — send consent request
        </button>
      </header>

      <section>
        <h2 className="mb-3 text-sm font-semibold text-berry">Shortlisted for family</h2>
        <div className="flex flex-col gap-3">
          {SHORTLIST.map((p) => (
            <div
              key={p.id}
              className="flex items-center gap-3 rounded-2xl border border-rose-100 bg-white p-4 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-xl text-neutral-400">
                👤
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-berry">{p.name}</p>
                <p className="text-xs text-neutral-500">{p.meta}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-[10px] font-semibold text-berry">
                  {approved[p.id] ? 'Family Approved ✓' : 'Pending'}
                </span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={approved[p.id]}
                  onClick={() => setApproved((a) => ({ ...a, [p.id]: !a[p.id] }))}
                  className={`relative h-8 w-14 rounded-full transition-colors ${
                    approved[p.id] ? 'bg-gold' : 'bg-neutral-200'
                  }`}
                >
                  <span
                    className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow transition-all ${
                      approved[p.id] ? 'left-7' : 'left-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-8">
        <button
          type="button"
          onClick={() => setScheduleOpen(true)}
          className="w-full rounded-2xl bg-berry py-3.5 text-sm font-semibold text-white shadow-lg shadow-berry/25"
        >
          Schedule Joint Video Call
        </button>
      </div>

      {scheduleOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/45 p-4 backdrop-blur-[2px] sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="schedule-title"
        >
          <div className="w-full max-w-[360px] animate-[fadeIn_0.25s_ease-out] rounded-2xl bg-white p-5 shadow-2xl">
            <h3 id="schedule-title" className="text-lg font-semibold text-berry">
              Joint video call
            </h3>
            <p className="mt-1 text-sm text-neutral-600">
              Pick a slot that works for Riya and your family. She&apos;ll get a calendar invite.
            </p>
            <div className="mt-4 space-y-3">
              <label className="block text-xs font-medium text-neutral-500">
                Date
                <input
                  type="date"
                  value={dateStr}
                  onChange={(e) => setDateStr(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-rose-100 px-3 py-2 text-sm text-berry"
                />
              </label>
              <label className="block text-xs font-medium text-neutral-500">
                Time
                <input
                  type="time"
                  value={timeStr}
                  onChange={(e) => setTimeStr(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-rose-100 px-3 py-2 text-sm text-berry"
                />
              </label>
            </div>
            <div className="mt-5 flex gap-2">
              <button
                type="button"
                onClick={() => setScheduleOpen(false)}
                className="flex-1 rounded-xl border border-rose-100 py-2.5 text-sm font-semibold text-neutral-600"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => setScheduleOpen(false)}
                className="flex-1 rounded-xl bg-gold py-2.5 text-sm font-semibold text-berry"
              >
                Confirm slot
              </button>
            </div>
          </div>
        </div>
      )}

      {consentOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4 backdrop-blur-[2px]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="consent-title"
        >
          <div className="w-full max-w-[340px] animate-[fadeIn_0.25s_ease-out] rounded-2xl bg-white p-6 shadow-2xl">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-rose-50 text-2xl">
              🔐
            </div>
            <h3 id="consent-title" className="text-lg font-semibold text-berry">
              Family section access
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              Riya must approve access to this section. Send request?
            </p>
            <div className="mt-6 flex gap-2">
              <button
                type="button"
                onClick={() => setConsentOpen(false)}
                className="flex-1 rounded-xl border border-rose-100 py-3 text-sm font-semibold text-neutral-600"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => setConsentOpen(false)}
                className="flex-1 rounded-xl bg-berry py-3 text-sm font-semibold text-white"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
