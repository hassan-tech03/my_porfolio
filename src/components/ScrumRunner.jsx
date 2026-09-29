import { useEffect, useRef, useState } from 'react';
import { Play, Trash2 } from 'lucide-react';
import { runnerSuites } from '../data/resume';

const STEP_MS = 320;
const PROMPT = 'hassan-scrum ~ %';

/**
 * Terminal-style widget that "runs" a suite by printing its assertions one at
 * a time. Purely presentational — each line restates a figure from the
 * experience section.
 */
export default function ScrumRunner() {
  const [log, setLog] = useState([]);
  const [running, setRunning] = useState(false);
  const timers = useRef([]);
  const screen = useRef(null);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  useEffect(() => clearTimers, []);

  useEffect(() => {
    if (screen.current) screen.current.scrollTop = screen.current.scrollHeight;
  }, [log]);

  const schedule = (fn, delay) => {
    timers.current.push(setTimeout(fn, delay));
  };

  const run = (suite) => {
    if (running) return;
    clearTimers();
    setRunning(true);
    setLog([{ kind: 'cmd', text: `run ${suite.id}` }]);

    suite.lines.forEach((text, i) => {
      schedule(() => setLog((l) => [...l, { kind: 'pass', text }]), STEP_MS * (i + 1));
    });

    const end = STEP_MS * (suite.lines.length + 1);
    schedule(() => {
      setLog((l) => [
        ...l,
        { kind: 'sum', text: `PASS  ${suite.lines.length}/${suite.lines.length} checks` },
      ]);
      setRunning(false);
    }, end);
  };

  const clear = () => {
    clearTimers();
    setRunning(false);
    setLog([]);
  };

  return (
    <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-line bg-term shadow-2xl shadow-black/30">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-xs text-slate-400">scrum-runner.spec.ts</span>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
          {running ? 'running' : 'ready'}
        </span>
      </div>

      <div
        ref={screen}
        role="log"
        aria-live="polite"
        className="h-56 overflow-y-auto px-5 py-4 font-mono text-[13px] leading-7 text-slate-300"
      >
        {log.length === 0 && (
          <p className="text-slate-500">// Pick a suite below to run checks against my delivery record.</p>
        )}
        {log.map((row, i) => (
          <p key={i} className="break-words">
            {row.kind === 'cmd' && (
              <>
                <span className="text-emerald-300">{PROMPT}</span>{' '}
                <span className="text-slate-100">{row.text}</span>
              </>
            )}
            {row.kind === 'pass' && (
              <>
                <span className="text-emerald-400">✓</span> {row.text}
              </>
            )}
            {row.kind === 'sum' && (
              <span className="font-semibold text-emerald-300">{row.text}</span>
            )}
          </p>
        ))}
        {log.length > 0 && (
          <p>
            <span className="text-emerald-300">{PROMPT}</span>{' '}
            <span className="caret inline-block h-4 w-2 translate-y-0.5 bg-slate-300" />
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2 border-t border-white/10 px-4 py-3">
        {runnerSuites.map((suite) => (
          <button
            key={suite.id}
            type="button"
            onClick={() => run(suite)}
            disabled={running}
            className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Play size={12} />
            {suite.label}
          </button>
        ))}
        <button
          type="button"
          onClick={clear}
          className="focus-ring ml-auto inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-xs font-semibold text-slate-400 transition-colors hover:text-slate-200"
        >
          <Trash2 size={12} />
          Clear
        </button>
      </div>
    </div>
  );
}
