import Link from 'next/link';
import { ArrowRight, Zap, Shield, Heart, Users, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Leadership & Workplace Culture | Second-Chance Hiring in Utah',
};

export default function Leadership() {
  return (
    <>
      <section style={{ background: '#1C2B3A' }} className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#8FB8D4' }}>Leadership Perspective</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5" style={{ color: '#FFFFFF', fontFamily: 'Poppins, sans-serif' }}>
            Leadership &amp; Workplace Culture
          </h1>
          <p className="text-lg" style={{ color: '#A8BFCF', lineHeight: 1.8 }}>
            The success of second-chance hiring depends less on the worker's record and more on the culture they walk into. Leadership is the determining variable.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: '#F9F8F6' }} className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Leadership Makes the Difference
          </h2>
          <p className="mb-5" style={{ color: '#4A5568', lineHeight: 1.85 }}>
            Research consistently shows that the success or failure of second-chance hiring programs is not primarily determined by the individual being hired — it is determined by the leadership and workplace culture they enter. The same person can thrive in one organization and fail in another, depending almost entirely on the managerial environment.
          </p>
          <p style={{ color: '#4A5568', lineHeight: 1.85 }}>
            This has significant implications for employers. It means that second-chance hiring is not primarily a risk management question — it is a leadership question. Organizations with strong, intentional leadership cultures are well-positioned to make these hires successfully.
          </p>
        </div>
      </section>

      {/* Transformational Leadership */}
      <section style={{ background: '#FFFFFF' }} className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: '#EBF3FA' }}>
                  <Zap size={20} style={{ color: '#2C5F8A' }} />
                </div>
                <h2 className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Transformational Leadership</h2>
              </div>
              <p className="mb-4" style={{ color: '#4A5568', lineHeight: 1.85 }}>
                Transformational leadership — characterized by inspiration, vision, individualized consideration, and intellectual stimulation — creates the conditions that allow second-chance workers to integrate successfully.
              </p>
              <p style={{ color: '#4A5568', lineHeight: 1.85 }}>
                Transformational leaders see the potential in people, not just the record. They set high expectations while providing genuine support, and they model the kind of judgment that ripples through an organization's culture. When managers operate this way, teams tend to follow.
              </p>
            </div>
            <div className="space-y-4">
              {[
                'Focuses on individual strengths and potential',
                'Builds trust through consistency and transparency',
                'Sets clear expectations with genuine support',
                'Models non-judgmental, equitable treatment',
                'Develops people rather than just managing them',
                'Creates shared meaning and organizational purpose',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} style={{ color: '#2C5F8A', flexShrink: 0, marginTop: 2 }} />
                  <p className="text-sm" style={{ color: '#4A5568', lineHeight: 1.7 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership of Character */}
      <section style={{ background: '#F9F8F6' }} className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: '#FDF6E3' }}>
              <Heart size={20} style={{ color: '#8B6914' }} />
            </div>
            <h2 className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Leadership of Character</h2>
          </div>
          <p className="mb-5" style={{ color: '#4A5568', lineHeight: 1.85 }}>
            Leadership of character goes beyond skill and style — it is about integrity, humility, and consistency between values and action. For second-chance hiring, this means leaders who are genuinely committed to giving people a fair opportunity, not just going through the motions.
          </p>
          <p style={{ color: '#4A5568', lineHeight: 1.85 }}>
            When leaders demonstrate character-based leadership, it creates an organizational signal that is picked up across all levels. Teams understand that the organization's stated commitment to fairness and opportunity is real — and they adjust their own behavior accordingly.
          </p>
        </div>
      </section>

      {/* Psychological Safety */}
      <section style={{ background: '#EBF3FA' }} className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: '#FFFFFF' }}>
              <Shield size={20} style={{ color: '#2C5F8A' }} />
            </div>
            <h2 className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Psychological Safety</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4" style={{ color: '#4A5568', lineHeight: 1.85 }}>
                Psychological safety — the belief that one can speak up, ask questions, and make mistakes without fear of punishment — is one of the most researched predictors of team performance and individual flourishing at work.
              </p>
              <p style={{ color: '#4A5568', lineHeight: 1.85 }}>
                For second-chance workers, psychological safety is especially critical. People who have experienced institutional punishment and social rejection need to know that the workplace is genuinely different — that they will be evaluated on their work, not their record.
              </p>
            </div>
            <div className="space-y-4">
              <p className="font-semibold text-sm" style={{ color: '#2C5F8A' }}>How managers build psychological safety:</p>
              {[
                'Acknowledge mistakes openly without punitive responses',
                'Ask for input and visibly act on it',
                'Address team concerns about second-chance hires directly and honestly',
                'Create consistent, transparent evaluation processes',
                'Avoid behind-the-scenes conversations that signal double standards',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} style={{ color: '#2C5F8A', flexShrink: 0, marginTop: 3 }} />
                  <p className="text-sm" style={{ color: '#4A5568', lineHeight: 1.7 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding */}
      <section style={{ background: '#FFFFFF' }} className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: '#EBF3FA' }}>
              <Users size={20} style={{ color: '#2C5F8A' }} />
            </div>
            <h2 className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Onboarding with Dignity</h2>
          </div>
          <p className="mb-5" style={{ color: '#4A5568', lineHeight: 1.85 }}>
            Effective onboarding for second-chance workers balances structure with dignity. It means providing clear expectations, mentorship, and accountability — without surveillance, double standards, or signaling distrust.
          </p>
          <div className="rounded-xl p-6 mt-4" style={{ background: '#F9F8F6', border: '1px solid #E2DDD8' }}>
            <p className="font-semibold text-sm mb-3" style={{ color: '#1C2B3A' }}>Practical onboarding principles:</p>
            <ul className="space-y-2">
              {[
                'Apply the same onboarding process to all employees — consistency signals fairness',
                'Assign a mentor or point of contact for the first 90 days',
                'Set milestone check-ins that focus on work, not background',
                'Address team questions about second-chance hiring proactively and with data',
                'Provide clear pathways for advancement — second-chance workers who see a future stay',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: '#4A5568', lineHeight: 1.7 }}>
                  <span style={{ color: '#2C5F8A', fontWeight: 700, flexShrink: 0 }}>·</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#2C5F8A' }} className="px-6 py-14">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#FFFFFF', fontFamily: 'Poppins, sans-serif' }}>
            Ready to address specific concerns?
          </h2>
          <p className="mb-8" style={{ color: '#A8BFCF' }}>
            Our FAQ addresses the most common employer questions — from team dynamics to liability — with direct, practical answers.
          </p>
          <Link
            href="/faq"
            className="no-underline inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm"
            style={{ background: '#FFFFFF', color: '#1C2B3A' }}
          >
            View Employer FAQ <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
