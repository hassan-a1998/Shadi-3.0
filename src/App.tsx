import { useEffect, useState } from 'react'
import { TrustShieldOnboarding } from './screens/TrustShieldOnboarding'
import { SoulScoreDashboard } from './screens/SoulScoreDashboard'
import { SmartMatchCard } from './screens/SmartMatchCard'
import { FamilyConnectDashboard } from './screens/FamilyConnectDashboard'

const TABS = [
  { id: 'shield' as const, label: 'Trust' },
  { id: 'heart' as const, label: 'Soul' },
  { id: 'match' as const, label: 'Match' },
  { id: 'family' as const, label: 'Family' },
]

function IconShield({ active }: { active: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={active ? 'text-white' : 'text-neutral-400'}
      width="22"
      height="22"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2l8 4v6c0 5-3.4 9.2-8 10-4.6-.8-8-5-8-10V6l8-4z" />
    </svg>
  )
}

function IconHeart({ active }: { active: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={active ? 'text-white' : 'text-neutral-400'}
      width="22"
      height="22"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 21s-6.7-4.35-9.1-8.1C.8 9.5 1.7 6 4.5 4.5 6.7 3.3 9.2 4 12 6.1 14.8 4 17.3 3.3 19.5 4.5c2.8 1.5 3.7 5 1.6 8.4C18.7 16.65 12 21 12 21z" />
    </svg>
  )
}

function IconMatch({ active }: { active: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={active ? 'text-white' : 'text-neutral-400'}
      width="22"
      height="22"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
    </svg>
  )
}

function IconFamily({ active }: { active: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={active ? 'text-white' : 'text-neutral-400'}
      width="24"
      height="22"
      fill="currentColor"
      aria-hidden
    >
      <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  )
}

const ICONS = [IconShield, IconHeart, IconMatch, IconFamily]

export default function App() {
  const [tab, setTab] = useState(0)
  const [enter, setEnter] = useState(true)

  useEffect(() => {
    setEnter(false)
    const t = window.requestAnimationFrame(() => setEnter(true))
    return () => window.cancelAnimationFrame(t)
  }, [tab])

  return (
    <div className="flex min-h-full justify-center bg-neutral-300/90 py-4">
      <div className="relative flex w-full max-w-[390px] flex-col overflow-hidden rounded-[28px] border border-white/40 bg-white shadow-2xl shadow-berry/20">
        <main
          className={`max-h-[min(780px,100vh-120px)] flex-1 overflow-y-auto transition-all duration-300 ease-out ${
            enter ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'
          }`}
        >
          {tab === 0 && <TrustShieldOnboarding />}
          {tab === 1 && <SoulScoreDashboard />}
          {tab === 2 && <SmartMatchCard />}
          {tab === 3 && <FamilyConnectDashboard />}
        </main>

        <nav
          className="flex shrink-0 items-stretch justify-around border-t border-rose-100 bg-white/95 px-2 pb-safe pt-2 backdrop-blur-md"
          style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}
          aria-label="Main"
        >
          {TABS.map((item, i) => {
            const Icon = ICONS[i]
            const active = tab === i
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(i)}
                className={`flex flex-1 flex-col items-center gap-1 rounded-xl py-2 text-[10px] font-semibold transition-colors ${
                  active ? 'text-berry' : 'text-neutral-400 hover:text-neutral-600'
                }`}
              >
                <span
                  className={`flex h-9 w-11 items-center justify-center rounded-xl transition-all ${
                    active ? 'bg-berry text-white shadow-md shadow-berry/30' : 'bg-transparent'
                  }`}
                >
                  <Icon active={active} />
                </span>
                {item.label}
              </button>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
