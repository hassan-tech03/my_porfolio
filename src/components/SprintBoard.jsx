import { Bug, Bookmark, SquareCheckBig, ChevronUp, ChevronDown, Equal } from 'lucide-react';
import { board } from '../data/resume';

/* Issue-type marks, following the conventions of common trackers. */
const types = {
  story: { Icon: Bookmark, className: 'bg-emerald-50 text-emerald-600', label: 'Story' },
  task: { Icon: SquareCheckBig, className: 'bg-sky-50 text-sky-600', label: 'Task' },
  bug: { Icon: Bug, className: 'bg-red-50 text-red-500', label: 'Bug' },
};

const priorities = {
  high: { Icon: ChevronUp, className: 'text-red-500', label: 'High priority' },
  medium: { Icon: Equal, className: 'text-amber-500', label: 'Medium priority' },
  low: { Icon: ChevronDown, className: 'text-sky-500', label: 'Low priority' },
};

/* Deterministic avatar tint so a given set of initials keeps its colour. */
const avatarTints = [
  'bg-brand-100 text-brand-700',
  'bg-accent-500/15 text-accent-600',
  'bg-amber-100 text-amber-700',
  'bg-rose-100 text-rose-700',
];
const tintFor = (initials) =>
  avatarTints[
    [...initials].reduce((sum, ch) => sum + ch.charCodeAt(0), 0) % avatarTints.length
  ];

function Card({ item }) {
  const type = types[item.type] ?? types.task;
  const priority = priorities[item.priority] ?? priorities.medium;

  return (
    <li className="rounded-lg border border-ink-200 bg-white p-3 shadow-sm transition-shadow hover:shadow-md">
      <p
        className={`text-[13px] font-medium leading-snug ${
          item.done ? 'text-ink-400 line-through decoration-ink-300' : 'text-ink-800'
        }`}
      >
        {item.summary}
      </p>

      <div className="mt-3 flex items-center gap-2">
        <span
          className={`inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] ${type.className}`}
          title={type.label}
        >
          <type.Icon size={11} aria-hidden />
          <span className="sr-only">{type.label}</span>
        </span>

        <span className="font-mono text-[11px] font-medium uppercase tracking-wide text-ink-400">
          {item.key}
        </span>

        <priority.Icon
          size={14}
          className={`shrink-0 ${priority.className}`}
          aria-hidden
        />
        <span className="sr-only">{priority.label}</span>

        <span className="ml-auto inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-ink-100 px-1.5 text-[11px] font-semibold text-ink-600">
          {item.points}
        </span>

        <span
          className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${tintFor(
            item.assignee,
          )}`}
          title={`Assignee ${item.assignee}`}
        >
          {item.assignee}
        </span>
      </div>
    </li>
  );
}

export default function SprintBoard() {
  const pct = Math.round((board.completed / board.committed) * 100);

  return (
    <div className="rounded-2xl border border-ink-200 bg-white shadow-sm">
      {/* Board header */}
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b border-ink-100 px-5 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-brand-500 to-brand-700 text-white">
            <SquareCheckBig size={16} aria-hidden />
          </span>
          <div>
            <h2 className="font-display text-sm font-bold text-ink-900">
              Sprint {board.sprint} board
            </h2>
            <p className="text-xs text-ink-400">Delivery team · 2-week cadence</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-left sm:text-right">
            <p className="text-sm font-semibold text-ink-900">
              {board.completed}
              <span className="font-normal text-ink-400">/{board.committed} pts</span>
            </p>
            <p className="text-xs text-ink-400">{board.daysLeft} days remaining</p>
          </div>
          <div
            className="hidden h-1.5 w-28 overflow-hidden rounded-full bg-ink-100 sm:block"
            role="img"
            aria-label={`${pct} percent of committed story points complete`}
          >
            <div
              className="h-full rounded-full bg-linear-to-r from-brand-500 to-accent-500"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      </div>

      {/* Columns — scroll sideways on narrow screens, as a real board does */}
      <div className="relative">
        <div className="overflow-x-auto p-4 sm:p-5">
          <div className="flex min-w-2xl gap-3 sm:min-w-0">
            {board.columns.map((column) => (
              <section key={column.name} className="flex min-w-0 flex-1 flex-col">
                <h3 className="flex items-center gap-2 px-1 pb-2.5 text-[11px] font-bold uppercase tracking-widest text-ink-400">
                  {column.name}
                  <span className="inline-flex h-4 min-w-4 items-center justify-center rounded bg-ink-100 px-1 text-[10px] font-semibold text-ink-500">
                    {column.items.length + (column.more ?? 0)}
                  </span>
                </h3>

                <ul className="flex flex-1 flex-col gap-2.5 rounded-xl bg-ink-50 p-2.5">
                  {column.items.map((item) => (
                    <Card key={item.key} item={item} />
                  ))}
                  {column.more && (
                    <li className="rounded-lg border border-dashed border-ink-200 px-3 py-2 text-center text-[11px] font-medium text-ink-400">
                      +{column.more} more
                    </li>
                  )}
                </ul>
              </section>
            ))}
          </div>
        </div>

        {/* Affordance that the board keeps going past the right edge */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-12 rounded-r-2xl bg-linear-to-l from-white via-white/80 to-transparent sm:hidden"
        />
      </div>
    </div>
  );
}
