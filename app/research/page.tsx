import { BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Research & Sources | Second-Chance Hiring in Utah',
};

const sources = [
  {
    category: 'Social Work & Reentry Research',
    color: '#8B6914',
    bg: '#FDF6E3',
    entries: [
      {
        citation: 'Pager, D. (2003). The mark of a criminal record. American Journal of Sociology, 108(5), 937–975.',
        summary: 'Landmark audit study demonstrating that individuals with criminal records receive significantly fewer callbacks in the job market, regardless of other qualifications. Established the empirical basis for discrimination against formerly incarcerated job seekers.',
      },
      {
        citation: 'Uggen, C. (2000). Work as a turning point in the life course of criminals: A duration model of age, employment, and recidivism. American Sociological Review, 65(4), 529–546.',
        summary: 'Foundational study on the relationship between employment and reduced recidivism. Demonstrates that stable work serves as a "turning point" in criminal trajectories, particularly for those over 26.',
      },
      {
        citation: 'Travis, J., Western, B., & Redburn, S. (Eds.). (2014). The growth of incarceration in the United States: Exploring causes and consequences. National Academies Press.',
        summary: 'Comprehensive National Academy of Sciences report examining mass incarceration, its causes, and its wide-ranging social consequences — including the employment and reintegration barriers it creates.',
      },
      {
        citation: 'Western, B., Kling, J. R., & Weiman, D. F. (2001). The labor market consequences of incarceration. Crime & Delinquency, 47(3), 410–427.',
        summary: 'Examines the structural and individual barriers formerly incarcerated people face in the labor market, including lack of employment records, restricted occupational access, and transportation challenges.',
      },
    ],
  },
  {
    category: 'Business & Employer Research',
    color: '#2C5F8A',
    bg: '#EBF3FA',
    entries: [
      {
        citation: "Dave's Killer Bread Foundation. (2021). Second chance employment: The employer perspective. DKBF.",
        summary: 'Employer survey reporting that 85% of HR leaders and 81% of business leaders found second-chance employees to perform as well as or better than employees without criminal records. Widely cited in second-chance hiring advocacy.',
      },
      {
        citation: 'SHRM & CAP. (2021). Getting talent back to work: Workforce development and second chance hiring. Society for Human Resource Management.',
        summary: 'Joint SHRM and Center for American Progress report providing data on employer attitudes, retention outcomes, and practical guidance for implementing second-chance hiring programs.',
      },
      {
        citation: 'U.S. Department of Labor. (2023). Work Opportunity Tax Credit (WOTC) program overview.',
        summary: 'Official documentation of the federal tax credit program providing financial incentives for employers who hire from target groups, including individuals with felony convictions released within the prior year.',
      },
      {
        citation: 'Utah Department of Workforce Services. (2025). Utah labor market conditions report.',
        summary: 'State labor market data documenting Utah\'s approximately 3.6% unemployment rate and tight labor conditions, providing context for the workforce pool expansion argument for second-chance hiring.',
      },
    ],
  },
  {
    category: 'Leadership Research',
    color: '#1C2B3A',
    bg: '#F0EDE8',
    entries: [
      {
        citation: 'Bass, B. M., & Avolio, B. J. (1994). Improving organizational effectiveness through transformational leadership. Sage.',
        summary: 'Foundational work establishing the framework of transformational leadership — inspiration, intellectual stimulation, individualized consideration, and idealized influence. Applied in this project to examine how leadership style shapes second-chance hiring outcomes.',
      },
      {
        citation: 'Edmondson, A. C. (1999). Psychological safety and learning behavior in work teams. Administrative Science Quarterly, 44(2), 350–383.',
        summary: 'The defining empirical study on psychological safety in organizational settings, showing its role in enabling learning, performance, and honest communication. Applied here to explain why workplace culture determines second-chance hiring success.',
      },
      {
        citation: 'Luthans, F., & Avolio, B. J. (2003). Authentic leadership development. In K. S. Cameron, J. E. Dutton, & R. E. Quinn (Eds.), Positive organizational scholarship (pp. 241–258). Berrett-Koehler.',
        summary: 'Introduces authentic leadership theory, connecting leader integrity and self-awareness to positive organizational outcomes — directly relevant to "leadership of character" discussed in this project.',
      },
    ],
  },
];

export default function Research() {
  return (
    <>
      <section style={{ background: '#1C2B3A' }} className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <BookOpen size={32} style={{ color: '#8FB8D4' }} className="mx-auto mb-4" />
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#8FB8D4' }}>Academic Foundation</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5" style={{ color: '#FFFFFF', fontFamily: 'Poppins, sans-serif' }}>
            Research &amp; Sources
          </h1>
          <p className="text-lg" style={{ color: '#A8BFCF', lineHeight: 1.8 }}>
            The claims made throughout this site are grounded in peer-reviewed research, employer surveys, and government data. Sources are organized by the three disciplines informing this project.
          </p>
        </div>
      </section>

      <section style={{ background: '#F9F8F6' }} className="px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-14">
          {sources.map(({ category, color, bg, entries }) => (
            <div key={category}>
              <div
                className="inline-block text-xs font-semibold tracking-widest uppercase mb-6 px-4 py-1.5 rounded-full"
                style={{ background: bg, color }}
              >
                {category}
              </div>
              <div className="space-y-5">
                {entries.map(({ citation, summary }) => (
                  <div key={citation} className="rounded-xl p-6" style={{ background: '#FFFFFF', border: '1px solid #E2DDD8' }}>
                    <p className="text-sm font-medium mb-2" style={{ color: '#1C2B3A', fontFamily: 'monospace', lineHeight: 1.6 }}>
                      {citation}
                    </p>
                    <p className="text-sm" style={{ color: '#6B7A8D', lineHeight: 1.75 }}>{summary}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#EBF3FA' }} className="px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm" style={{ color: '#4A6A80', lineHeight: 1.8 }}>
            All sources cited using APA 7th edition format. This project was completed in partial fulfillment of the requirements for BIS 4800 at Weber State University, April 2026.
          </p>
        </div>
      </section>
    </>
  );
}
