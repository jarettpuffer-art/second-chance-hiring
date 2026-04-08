export const metadata = {
  title: 'Employer FAQ | Second-Chance Hiring in Utah',
};

const faqs = [
  {
    q: 'What if other employees are uncomfortable working alongside someone with a criminal record?',
    a: 'This is a common concern, and it deserves a direct response. Discomfort typically stems from uncertainty and assumptions, not direct experience. Organizations that proactively communicate their values — and explain why they are making this hire — see significantly less friction than those who say nothing. Addressing it openly, with data and a clear policy, is far more effective than avoiding the conversation. Research on diverse teams consistently shows that initial discomfort decreases quickly when people work together toward a shared goal.',
  },
  {
    q: 'What about theft or other liability risks?',
    a: 'Negligent hiring claims require demonstrating that an employer knowingly ignored a "clearly foreseeable" risk given the specific role. A blanket exclusion policy is not actually the safest legal approach — in fact, it can expose employers to disparate impact claims. The legally sound approach is individualized assessment: considering the nature of the conviction, how long ago it occurred, evidence of rehabilitation, and the specific duties of the role. Most legal experts recommend this case-by-case approach over blanket exclusions.',
  },
  {
    q: 'Are second-chance hires actually reliable?',
    a: 'Yes — and often more so than average hires. Multiple large employer surveys, including research from the Dave\'s Killer Bread Foundation and SHRM, show that second-chance employees perform as well or better than other workers in both productivity and reliability. Retention data is particularly strong: employees who were given an opportunity when others would not tend to demonstrate significant loyalty, reducing absenteeism and turnover.',
  },
  {
    q: 'How should background checks be handled?',
    a: 'The recommended approach is "individualized assessment" rather than automatic exclusion. This means reviewing the nature of the offense, how much time has passed, evidence of rehabilitation or changed circumstances, and how closely the conviction relates to the specific job duties. The Equal Employment Opportunity Commission (EEOC) guidelines explicitly caution against blanket exclusion policies, which can create disparate impact liability. Many states and cities have also enacted "ban-the-box" legislation that restricts when in the hiring process a criminal history question can be asked.',
  },
  {
    q: 'What types of positions are appropriate for second-chance hires?',
    a: 'The range is much wider than most employers assume. Warehouse, logistics, manufacturing, food service, construction, customer service, landscaping, and many skilled trades have all been successfully filled by second-chance workers. The key is matching the role requirements to an individualized assessment of the candidate — not applying a categorical rule based on record alone. Some convictions are relevant to certain positions (e.g., financial fraud and a role involving cash handling); most are not.',
  },
  {
    q: 'What if the conviction is directly relevant to the position?',
    a: 'This is the one case where exclusion may be genuinely warranted — but even here, time, context, and evidence of rehabilitation matter. A financial fraud conviction from 15 years ago, followed by a clean record and documented personal growth, is a different situation than a recent conviction. The individualized assessment process helps you make defensible decisions rather than reflexive ones. When in doubt, document your reasoning.',
  },
  {
    q: 'How do I reduce risk without automatically excluding candidates?',
    a: 'Implement a structured individualized assessment process. Ask three questions: (1) Is this conviction directly related to the job duties? (2) How long ago did it occur, and what has the person done since? (3) What does the full picture of this candidate look like? Also consider: obtaining appropriate insurance, building clear workplace conduct policies, using probationary periods consistently (not selectively), and connecting with reentry organizations who can provide additional support and accountability structures.',
  },
  {
    q: 'What policies should I have in place before I start hiring second-chance workers?',
    a: 'At minimum: a written individualized assessment policy for background checks, a clear conduct and accountability framework applied to all employees, a point of contact or support structure for new hires in their first 90 days, and manager training on both the legal landscape and the leadership practices that support successful integration. Many organizations also find it helpful to partner with a local reentry organization, which can provide pre-screened candidates and ongoing support.',
  },
  {
    q: 'Are there financial incentives for hiring someone with a criminal record?',
    a: 'Yes. The federal Work Opportunity Tax Credit (WOTC) provides a tax credit of up to $9,600 per qualified hire for employees who fall into target groups, including individuals with felony convictions released within the past year. The Federal Bonding Program provides fidelity bonds for employers who hire higher-risk workers at no cost. These programs meaningfully offset the perceived costs of taking a chance on a second-chance worker.',
  },
];

export default function FAQ() {
  return (
    <>
      <section style={{ background: '#1C2B3A' }} className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#8FB8D4' }}>Practical Guidance</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5" style={{ color: '#FFFFFF', fontFamily: 'Poppins, sans-serif' }}>
            Employer FAQ
          </h1>
          <p className="text-lg" style={{ color: '#A8BFCF', lineHeight: 1.8 }}>
            Direct, research-backed answers to the questions employers ask most about second-chance hiring.
          </p>
        </div>
      </section>

      <section style={{ background: '#F9F8F6' }} className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-5">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="rounded-xl p-7" style={{ background: '#FFFFFF', border: '1px solid #E2DDD8' }}>
                <h3 className="font-bold text-base mb-3" style={{ fontFamily: 'Poppins, sans-serif', color: '#1C2B3A' }}>
                  {q}
                </h3>
                <p className="text-sm" style={{ color: '#4A5568', lineHeight: 1.8 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#EBF3FA' }} className="px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm" style={{ color: '#4A6A80', lineHeight: 1.8 }}>
            Have a question not covered here?{' '}
            <a href="/contact" style={{ color: '#2C5F8A', fontWeight: 600 }}>
              Send us a message
            </a>{' '}
            — or explore{' '}
            <a href="/utah-resources" style={{ color: '#2C5F8A', fontWeight: 600 }}>
              Utah-specific resources
            </a>{' '}
            for additional guidance.
          </p>
        </div>
      </section>
    </>
  );
}
