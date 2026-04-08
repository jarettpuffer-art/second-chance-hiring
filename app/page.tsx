import Link from 'next/link';
import { ArrowRight, Briefcase, Users, Heart, TrendingUp, Shield, Building2 } from 'lucide-react';

const stats = [
  { value: '85%', label: 'of HR leaders report second-chance hires perform as well or better than other employees' },
  { value: '36%', label: 'higher retention rates among second-chance employees compared to the general workforce' },
  { value: '70M+', label: 'Americans have a criminal record, representing a largely untapped talent pool' },
  { value: '3.6%', label: 'Utah unemployment rate — making workforce pool expansion critical for employers' },
];

const disciplines = [
  {
    icon: Briefcase,
    title: 'Business Administration',
    desc: 'Why second-chance hiring supports workforce needs, retention, and long-term organizational value — with data from real employers.',
    href: '/business-case',
    color: '#2C5F8A',
  },
  {
    icon: Users,
    title: 'Leadership',
    desc: 'How transformational leadership, psychological safety, and intentional onboarding shape successful hiring and workplace integration.',
    href: '/leadership',
    color: '#1C2B3A',
  },
  {
    icon: Heart,
    title: 'Social Work',
    desc: 'Why employment matters for reintegration, reduced recidivism, and long-term stability — for individuals, families, and communities.',
    href: '/why-it-matters',
    color: '#8B6914',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#1C2B3A' }} className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-6 px-4 py-1.5 rounded-full"
            style={{ background: '#2C5F8A22', color: '#8FB8D4', border: '1px solid #2C5F8A' }}
          >
            Weber State University · BIS 4800 Capstone
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ color: '#FFFFFF', fontFamily: 'Poppins, sans-serif', lineHeight: 1.15 }}
          >
            Second-Chance Hiring<br />
            <span style={{ color: '#8FB8D4' }}>in Utah</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto" style={{ color: '#A8BFCF', lineHeight: 1.8 }}>
            A research-based resource for employers, managers, and hiring decision-makers — translating business, leadership, and social work research into practical guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/business-case"
              className="no-underline inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ background: '#2C5F8A', color: '#FFFFFF' }}
            >
              Practical Employer Guide <ArrowRight size={16} />
            </Link>
            <Link
              href="/research"
              className="no-underline inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ background: 'transparent', color: '#FFFFFF', border: '1px solid #4A6A80' }}
            >
              Explore the Research <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section style={{ background: '#F9F8F6' }} className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-sm font-semibold tracking-widest uppercase mb-10" style={{ color: '#6B7A8D' }}>
            Who this site is for
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Building2, title: 'For Employers', desc: 'Understand the real data on second-chance workers — retention, performance, and practical risk management.' },
              { icon: Users, title: 'For Communities', desc: 'See how expanding hiring pools strengthens local economies, reduces recidivism, and builds safer neighborhoods.' },
              { icon: Heart, title: 'For Workers & Families', desc: 'Employment after incarceration is one of the strongest predictors of successful reintegration and long-term stability.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl p-6" style={{ background: '#FFFFFF', border: '1px solid #E2DDD8' }}>
                <Icon size={28} style={{ color: '#2C5F8A' }} className="mb-4" />
                <h3 className="font-semibold text-base mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{title}</h3>
                <p className="text-sm" style={{ color: '#6B7A8D', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#EBF3FA' }} className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-sm font-semibold tracking-widest uppercase mb-10" style={{ color: '#2C5F8A' }}>
            By the numbers
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ value, label }) => (
              <div key={value} className="rounded-xl p-6 text-center" style={{ background: '#FFFFFF', border: '1px solid #C5DCF0' }}>
                <div className="text-4xl font-bold mb-2" style={{ color: '#2C5F8A', fontFamily: 'Poppins, sans-serif' }}>{value}</div>
                <p className="text-sm" style={{ color: '#4A6A80', lineHeight: 1.65 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three disciplines */}
      <section style={{ background: '#F9F8F6' }} className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Three Disciplines. One Solution.
          </h2>
          <p className="text-center max-w-xl mx-auto mb-12" style={{ color: '#6B7A8D' }}>
            This project integrates research from business administration, leadership, and social work to build a complete picture of second-chance hiring.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {disciplines.map(({ icon: Icon, title, desc, href, color }) => (
              <Link
                key={href}
                href={href}
                className="no-underline group block rounded-xl p-7 transition-shadow hover:shadow-lg"
                style={{ background: '#FFFFFF', border: '1px solid #E2DDD8' }}
              >
                <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-5" style={{ background: `${color}18` }}>
                  <Icon size={22} style={{ color }} />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{title}</h3>
                <p className="text-sm mb-4" style={{ color: '#6B7A8D', lineHeight: 1.7 }}>{desc}</p>
                <span className="text-sm font-semibold flex items-center gap-1" style={{ color }}>
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ background: '#2C5F8A' }} className="px-6 py-14">
        <div className="max-w-3xl mx-auto text-center">
          <Shield size={36} style={{ color: '#8FB8D4' }} className="mx-auto mb-5" />
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFFFFF', fontFamily: 'Poppins, sans-serif' }}>
            Have Questions About Second-Chance Hiring?
          </h2>
          <p className="mb-8" style={{ color: '#A8BFCF' }}>
            Our employer FAQ addresses the most common concerns — from background checks to liability — with practical, research-backed answers.
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
