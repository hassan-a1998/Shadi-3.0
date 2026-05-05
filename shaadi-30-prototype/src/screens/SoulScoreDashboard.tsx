import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'

const COMPAT = 87

const DIMENSIONS = [
  { label: 'Values Alignment', value: 92 },
  { label: 'Communication Style', value: 78 },
  { label: 'Life Goals', value: 85 },
  { label: 'Conflict Resolution', value: 74 },
  { label: 'Financial Philosophy', value: 81 },
  { label: 'Social & Family Role', value: 88 },
] as const

const donutData = [
  { name: 'match', value: COMPAT },
  { name: 'rest', value: 100 - COMPAT },
]

export function SoulScoreDashboard() {
  return (
    <div className="flex min-h-full flex-col bg-[#FAF0F5] px-5 pb-28 pt-8">
      <header className="mb-6 text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-berry-accent">Soul Score</p>
        <h1 className="mt-1 text-2xl font-semibold text-berry">Compatibility pulse</h1>
        <p className="mt-2 text-sm text-neutral-600">
          How you and your next match align across life — powered by signals you both share.
        </p>
      </header>

      <div className="mb-6 flex justify-center">
        <div className="relative h-[200px] w-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={donutData}
                cx="50%"
                cy="50%"
                innerRadius={68}
                outerRadius={88}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
                stroke="none"
                animationDuration={900}
              >
                <Cell fill="#D4A843" />
                <Cell fill="#E9D4DF" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold tabular-nums text-berry">{COMPAT}%</span>
            <span className="text-[11px] font-medium uppercase tracking-wide text-neutral-500">
              compatibility
            </span>
          </div>
        </div>
      </div>

      <section className="mb-6 space-y-4">
        <h2 className="text-sm font-semibold text-berry">Dimensions</h2>
        {DIMENSIONS.map((row) => (
          <div key={row.label}>
            <div className="mb-1 flex justify-between text-xs">
              <span className="font-medium text-neutral-700">{row.label}</span>
              <span className="tabular-nums text-berry-accent">{row.value}%</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-white/80 shadow-inner">
              <div
                className="h-full rounded-full bg-gradient-to-r from-berry to-berry-accent transition-[width] duration-700"
                style={{ width: `${row.value}%` }}
              />
            </div>
          </div>
        ))}
      </section>

      <div className="rounded-2xl border border-rose-100/80 bg-white p-5 shadow-md shadow-rose-900/5">
        <p className="text-xs font-semibold uppercase tracking-wide text-gold-deep">AI insight</p>
        <p className="mt-2 text-sm leading-relaxed text-neutral-700">
          You&apos;re <span className="font-semibold text-berry">{COMPAT}% aligned</span> on family
          values — both of you prioritise joint festivals, elder care, and transparent money
          conversations. That usually predicts smoother first meetings with families.
        </p>
        <button
          type="button"
          className="mt-4 w-full rounded-xl bg-gold py-3 text-sm font-semibold text-berry shadow-sm transition active:scale-[0.99]"
        >
          Discover How
        </button>
      </div>
    </div>
  )
}
