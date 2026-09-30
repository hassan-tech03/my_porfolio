import { useState } from 'react';
import { CheckCircle2, Loader2, Send, TriangleAlert } from 'lucide-react';

// Set VITE_WEB3FORMS_ACCESS_KEY in .env (locally) and in the Vercel project
// settings (production). Vite inlines it at build time.
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
const ENDPOINT = 'https://api.web3forms.com/submit';

const fieldClass =
  'focus-ring mt-2 w-full rounded-xl border border-line bg-chip px-4 py-3 text-sm text-fg placeholder:text-fg-3 transition-colors focus:border-b';

export default function ContactForm() {
  // idle | sending | sent | error
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: real visitors never fill this in.
    if (data.get('botcheck')) return;

    if (!ACCESS_KEY) {
      setError('The form is not configured.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setError('');

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Portfolio message from ${data.get('name')}`,
          from_name: 'Portfolio contact form',
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
        }),
      });
      const result = await res.json();
      if (!res.ok || !result.success) throw new Error(result.message || 'Request failed');

      form.reset();
      setStatus('sent');
    } catch (err) {
      setError(err.message || 'Something went wrong.');
      setStatus('error');
    }
  };

  return (
    <form id="contact-form" onSubmit={onSubmit} className="card scroll-mt-24 p-6 sm:p-8">
      <h3 className="font-display text-lg font-bold text-fg">Send me a message</h3>
      <p className="mt-1 text-sm text-fg-3">I usually reply within a day.</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-fg-2">
          Name
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={fieldClass}
          />
        </label>
        <label className="block text-sm font-medium text-fg-2">
          Email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={fieldClass}
          />
        </label>
      </div>

      <label className="mt-5 block text-sm font-medium text-fg-2">
        Message
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell me about the role or project…"
          className={`${fieldClass} resize-y`}
        />
      </label>

      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="focus-ring inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-b/25 transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'sending' ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <Send size={16} />
          )}
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>

        <p role="status" aria-live="polite" className="text-sm">
          {status === 'sent' && (
            <span className="inline-flex items-center gap-1.5 font-medium text-a">
              <CheckCircle2 size={16} />
              Thanks, your message has been sent.
            </span>
          )}
          {status === 'error' && (
            <span className="inline-flex items-center gap-1.5 font-medium text-red-400">
              <TriangleAlert size={16} />
              {error} Please email me directly instead.
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
