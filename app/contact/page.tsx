'use client';
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });

    setSubmitted(true);
  }

  return (
    <>
      <section style={{ background: '#1C2B3A' }} className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#8FB8D4' }}>Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5" style={{ color: '#FFFFFF', fontFamily: 'Poppins, sans-serif' }}>
            Contact &amp; Feedback
          </h1>
          <p className="text-lg" style={{ color: '#A8BFCF', lineHeight: 1.8 }}>
            Have a question, feedback on the resource, or want to share how you are using it in your organization? We would love to hear from you.
          </p>
        </div>
      </section>

      <section style={{ background: '#F9F8F6' }} className="px-6 py-16">
        <div className="max-w-xl mx-auto">
          {submitted ? (
            <div className="rounded-xl p-10 text-center" style={{ background: '#FFFFFF', border: '1px solid #E2DDD8' }}>
              <CheckCircle size={40} style={{ color: '#2C5F8A' }} className="mx-auto mb-5" />
              <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Message Received</h2>
              <p style={{ color: '#6B7A8D' }}>Thank you for reaching out. Your feedback helps make this resource more useful for Utah employers.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-xl p-8 space-y-5"
              style={{ background: '#FFFFFF', border: '1px solid #E2DDD8' }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: '#1C2B3A' }}>Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-lg text-sm outline-none"
                    style={{ border: '1px solid #D1CCc7', background: '#F9F8F6', color: '#1C2B3A' }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: '#1C2B3A' }}>Organization</label>
                  <input
                    name="organization"
                    type="text"
                    className="w-full px-4 py-2.5 rounded-lg text-sm outline-none"
                    style={{ border: '1px solid #D1CCC7', background: '#F9F8F6', color: '#1C2B3A' }}
                    placeholder="Company or org (optional)"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: '#1C2B3A' }}>Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg text-sm outline-none"
                  style={{ border: '1px solid #D1CCC7', background: '#F9F8F6', color: '#1C2B3A' }}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: '#1C2B3A' }}>Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-lg text-sm outline-none resize-none"
                  style={{ border: '1px solid #D1CCC7', background: '#F9F8F6', color: '#1C2B3A' }}
                  placeholder="Questions, feedback, or how you're using this resource..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: '#1C2B3A' }}>
                  Would you use this resource in your workplace? <span style={{ color: '#6B7A8D', fontWeight: 400 }}>(optional)</span>
                </label>
                <select
                  name="would_use"
                  className="w-full px-4 py-2.5 rounded-lg text-sm outline-none"
                  style={{ border: '1px solid #D1CCC7', background: '#F9F8F6', color: '#1C2B3A' }}
                >
                  <option value="">Select an answer</option>
                  <option value="yes_already">Yes — I already use it or plan to</option>
                  <option value="yes_possibly">Possibly — I need to learn more first</option>
                  <option value="no">Not likely for my organization</option>
                  <option value="na">Not applicable</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ background: '#2C5F8A', color: '#FFFFFF' }}
              >
                Send Message <Send size={15} />
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
