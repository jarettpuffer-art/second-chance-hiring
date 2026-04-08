import Link from 'next/link';
import { ArrowRight, Users, TrendingUp, DollarSign, Star, Briefcase } from 'lucide-react';

export const metadata = {
  title: 'Business Case | Second-Chance Hiring in Utah',
};

const benefits = [
  {
    icon: Users,
    title: 'Expanded Talent Pool',
    desc: 'With Utah\'s unemployment rate near historic lows, employers face real competition for qualified workers. Over 70 million Americans have criminal records — accessing this population meaningfully expands your candidate pipeline without sacrificing quality.',
  },
  {
    icon: Star,
    title: 'Higher Retention Rates',
    desc: 'Research and employer surveys consistently show that individuals with criminal records demonstrate strong loyalty when given an opportunity. Studies indicate second-chance employees have retention rates up to 36% higher than the general workforce — reducing costly turnover.',
  },
  {
    icon: TrendingUp,
    title: 'Strong Performance',
    desc: 'A Dave\'s Killer Bread Foundation survey found that 85% of HR leaders and 81% of business leaders reported that employees with criminal records perform as well as or better than employees without records. Performance, not record, predicts success.',
  },
  {
    icon: DollarSign,
    title: 'Financial Incentives',
    desc: 'The Work Opportunity Tax Credit (WOTC) provides employers a federal tax credit of up to $9,600 per qualified employee when hiring from target groups including individuals with felony convictions. This directly offsets onboarding costs.',
  },
  {
    icon: Briefcase,
    title: 'Reduced Turnover Costs',
    desc: 'Employee turnover is one of the most significant hidden costs in business — often estimated at 50–200% of an employee\'s annual salary. Second-chance workers\' higher loyalty and retention directly translate to lower costs and more stable teams.',
  },
  {
    icon: Star,
    title: 'Brand & Culture Differentiation',
    desc: 'Companies increasingly compete on values and culture. Organizations known for equitable hiring practices attract mission-driven employees and customers, particularly among younger demographics who prioritize corporate social responsibility.',
  },
];

export default function BusinessCase() {
  return (
    <>
      <section style={{ background: '#1C2B3A' }} className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#8FB8D4' }}>Business Administration Perspective</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5" style={{ color: '#FFFFFF', fontFamily: 'Poppins, sans-serif' }}>
            The Business Case
          </h1>
          <p className="text-lg" style={{ color: '#A8BFCF', lineHeight: 1.8 }}>
            Hiring second-chance workers is not just a socially responsible choice — it is increasingly recognized as a smart business strategy. Here is what the data shows.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: '#F9F8F6' }} className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            The Employer Perspective Has Shifted
          </h2>
          <p className="mb-5" style={{ color: '#4A5568', lineHeight: 1.85 }}>
            For decades, criminal records functioned as an automatic disqualifier in most hiring processes. That practice is changing — not primarily for social reasons, but because employers who have taken a chance on second-chance workers are reporting better outcomes than expected.
          </p>
          <p style={{ color: '#4A5568', lineHeight: 1.85 }}>
            Research from a business perspective shows that hiring formerly incarcerated individuals can be a smart strategy that improves retention, expands hiring pools, and strengthens organizational culture. The evidence increasingly points in the same direction: the automatic exclusion of individuals with criminal records is not only socially costly — it may also be a business mistake.
          </p>
        </div>
      </section>

      {/* Benefits grid */}
      <section style={{ background: '#FFFFFF' }} className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Six Business Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl p-7" style={{ background: '#F9F8F6', border: '1px solid #E2DDD8' }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#EBF3FA' }}>
                    <Icon size={20} style={{ color: '#2C5F8A' }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{title}</h3>
                    <p className="text-sm" style={{ color: '#6B7A8D', lineHeight: 1.75 }}>{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misconceptions */}
      <section style={{ background: '#FDF6E3' }} className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: 'Poppins, sans-serif', color: '#8B6914' }}>
            Addressing Common Misconceptions
          </h2>
          {[
            {
              myth: 'Myth: Criminal records predict job performance.',
              fact: 'Research does not support this. Job performance is better predicted by skills, work ethic, and fit — all of which can be assessed directly in the hiring process.',
            },
            {
              myth: 'Myth: Hiring someone with a record increases liability.',
              fact: 'Negligent hiring claims require showing an employer ignored a "clearly foreseeable" risk. Background check use paired with individualized assessment — rather than blanket exclusion — is the legally sound approach.',
            },
            {
              myth: 'Myth: Second-chance hires are temporary fill-ins.',
              fact: 'Retention data shows the opposite. Employees who were given an opportunity often stay longer and demonstrate stronger organizational loyalty than average hires.',
            },
          ].map(({ myth, fact }) => (
            <div key={myth} className="mb-6 rounded-xl p-6" style={{ background: '#FFFFFF', border: '1px solid #E8D9A0' }}>
              <p className="font-semibold text-sm mb-2" style={{ color: '#8B6914' }}>{myth}</p>
              <p className="text-sm" style={{ color: '#4A5568', lineHeight: 1.75 }}>{fact}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#2C5F8A' }} className="px-6 py-14">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#FFFFFF', fontFamily: 'Poppins, sans-serif' }}>
            Ready to think through implementation?
          </h2>
          <p className="mb-8" style={{ color: '#A8BFCF' }}>
            Leadership and workplace culture are critical to making second-chance hiring work. See how transformational leadership creates the conditions for success.
          </p>
          <Link
            href="/leadership"
            className="no-underline inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm"
            style={{ background: '#FFFFFF', color: '#1C2B3A' }}
          >
            Leadership & Culture <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
