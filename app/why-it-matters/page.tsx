import Link from 'next/link';
import { ArrowRight, AlertCircle, TrendingDown, MapPin, RefreshCw } from 'lucide-react';

export const metadata = {
  title: 'Why It Matters | Second-Chance Hiring in Utah',
};

const barriers = [
  {
    title: 'Stigma & Labeling',
    desc: 'Individuals with criminal records receive fewer callbacks and job opportunities regardless of qualifications. Research consistently shows that labeling theory operates powerfully in hiring — people are defined by their past rather than their potential.',
  },
  {
    title: 'Structural Barriers',
    desc: 'Beyond stigma, structural obstacles compound the challenge: gaps in employment history, limited access to education and training, legal occupational restrictions, lack of stable housing, and limited transportation all create compounding disadvantages.',
  },
  {
    title: 'Policy & Systemic Inequality',
    desc: 'Researchers identify both individual and systemic barriers — discrimination, exclusionary policy, and structural inequality. In reality, both operate simultaneously, creating a layered challenge that no single solution addresses alone.',
  },
  {
    title: 'Recidivism Risk',
    desc: 'Continued rejection from the employment market creates instability that increases the risk of returning to crime. Employment provides structure, purpose, and financial security — its absence has documented consequences for public safety.',
  },
];

export default function WhyItMatters() {
  return (
    <>
      {/* Header */}
      <section style={{ background: '#1C2B3A' }} className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#8FB8D4' }}>Social Work Perspective</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5" style={{ color: '#FFFFFF', fontFamily: 'Poppins, sans-serif' }}>
            Why It Matters
          </h1>
          <p className="text-lg" style={{ color: '#A8BFCF', lineHeight: 1.8 }}>
            Employment is one of the most powerful factors in successful reintegration after incarceration — yet it remains one of the hardest to access. Understanding why helps employers become part of the solution.
          </p>
        </div>
      </section>

      {/* The problem */}
      <section style={{ background: '#F9F8F6' }} className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>The Employment Gap After Incarceration</h2>
          <p className="mb-5" style={{ color: '#4A5568', lineHeight: 1.85 }}>
            Mass incarceration in the United States has created a significant and often overlooked workforce challenge. Individuals with criminal records face barriers to employment that are both deeply personal and structurally embedded — and these barriers have consequences that extend far beyond any individual.
          </p>
          <p style={{ color: '#4A5568', lineHeight: 1.85 }}>
            Studies consistently find that those with a criminal record receive fewer callbacks and job opportunities than those without, regardless of the nature of the crime or how much time has passed (Pager, 2003). From a social work perspective, this reflects labeling theory in action — where an individual is reduced to their past record rather than evaluated on their present potential or future trajectory.
          </p>
        </div>
      </section>

      {/* Barriers */}
      <section style={{ background: '#FFFFFF' }} className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Key Barriers to Employment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {barriers.map(({ title, desc }) => (
              <div key={title} className="rounded-xl p-7" style={{ background: '#F9F8F6', border: '1px solid #E2DDD8' }}>
                <div className="flex items-start gap-4">
                  <AlertCircle size={20} style={{ color: '#8B6914', flexShrink: 0, marginTop: 3 }} />
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

      {/* Utah context */}
      <section style={{ background: '#EBF3FA' }} className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <MapPin size={24} style={{ color: '#2C5F8A' }} />
            <h2 className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>The Utah Context</h2>
          </div>
          <p className="mb-5" style={{ color: '#4A5568', lineHeight: 1.85 }}>
            While Utah is known for a robust economy and one of the lowest unemployment rates in the nation — approximately 3.6% as of late 2025 — the challenge of finding employment remains acute for people with criminal records. Utah's tight labor market actually amplifies the opportunity: employers who need workers and people who need work are separated only by hiring practices that can be changed.
          </p>
          <p style={{ color: '#4A5568', lineHeight: 1.85 }}>
            Utah has made meaningful investments in workforce development and reintegration programs. This creates a foundation for connecting employers with this underutilized segment of the workforce — turning a social problem into an economic opportunity for both parties.
          </p>
        </div>
      </section>

      {/* Employment & recidivism */}
      <section style={{ background: '#F9F8F6' }} className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <TrendingDown size={24} style={{ color: '#2C5F8A' }} />
            <h2 className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Employment Reduces Recidivism</h2>
          </div>
          <p className="mb-5" style={{ color: '#4A5568', lineHeight: 1.85 }}>
            A consistent finding across social work and criminology research is the strong relationship between employment and reduced recidivism. Those who secure stable employment after incarceration have a significantly lower likelihood of returning to criminal behavior (Uggen, 2000).
          </p>
          <p className="mb-5" style={{ color: '#4A5568', lineHeight: 1.85 }}>
            Employment provides more than income — it provides structure, a sense of purpose, social integration, and an identity that competes with past patterns. When individuals are repeatedly rejected in the job market, the resulting financial instability and social isolation can push them back toward criminal behavior.
          </p>
          <div className="rounded-xl p-6 mt-6" style={{ background: '#FFFFFF', border: '1px solid #C5DCF0' }}>
            <p className="font-semibold text-sm mb-1" style={{ color: '#2C5F8A' }}>Key Insight</p>
            <p className="text-sm" style={{ color: '#4A5568', lineHeight: 1.75 }}>
              When an employer hires a second-chance worker, they are not just filling a position — they are actively participating in community safety. The ripple effects extend to families, neighborhoods, and public resources that would otherwise bear the cost of reincarceration.
            </p>
          </div>
        </div>
      </section>

      {/* The opportunity */}
      <section style={{ background: '#1C2B3A' }} className="px-6 py-14">
        <div className="max-w-3xl mx-auto text-center">
          <RefreshCw size={32} style={{ color: '#8FB8D4' }} className="mx-auto mb-5" />
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#FFFFFF', fontFamily: 'Poppins, sans-serif' }}>
            From Problem to Opportunity
          </h2>
          <p className="mb-8" style={{ color: '#A8BFCF', lineHeight: 1.8 }}>
            The barriers to employment for individuals with criminal records are real — but they are not insurmountable. Employers have more power to address this than any policy alone. The next step is understanding the business case.
          </p>
          <Link
            href="/business-case"
            className="no-underline inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm"
            style={{ background: '#2C5F8A', color: '#FFFFFF' }}
          >
            View the Business Case <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
