import { MapPin, ExternalLink, DollarSign, Briefcase, Users, Scale } from 'lucide-react';

export const metadata = {
  title: 'Utah Resources | Second-Chance Hiring in Utah',
};

const resources = [
  {
    icon: Briefcase,
    category: 'State Workforce Services',
    items: [
      {
        name: 'Utah Department of Workforce Services (DWS)',
        desc: 'The primary state agency for employment services, job training, and employer resources. DWS connects employers with job seekers and offers support programs for individuals returning from incarceration.',
        link: 'https://jobs.utah.gov',
      },
      {
        name: 'Workforce Innovation and Opportunity Act (WIOA) Programs',
        desc: 'Federally funded programs administered through DWS that provide job training, placement support, and workforce development — including for justice-involved individuals.',
        link: null,
      },
    ],
  },
  {
    icon: Users,
    category: 'Reentry & Support Organizations',
    items: [
      {
        name: 'Utah Reentry Initiative',
        desc: 'A state-level coordination effort focused on successful reentry after incarceration, connecting individuals with housing, employment, and community support resources.',
        link: null,
      },
      {
        name: 'Second Chance Act Programs',
        desc: 'Federally funded reentry programs operating in Utah that provide comprehensive transition support — including employment assistance — for individuals leaving prison or jail.',
        link: null,
      },
      {
        name: 'Volunteers of America Utah',
        desc: 'Provides reentry services including transitional housing and employment support for individuals returning from incarceration.',
        link: null,
      },
    ],
  },
  {
    icon: DollarSign,
    category: 'Financial Incentives for Employers',
    items: [
      {
        name: 'Work Opportunity Tax Credit (WOTC)',
        desc: 'A federal tax credit of up to $9,600 for employers who hire individuals from target groups, including those with felony convictions released within the past year. Administered through DWS in Utah.',
        link: null,
      },
      {
        name: 'Federal Bonding Program',
        desc: 'Provides fidelity bonds at no cost to employers who hire job seekers considered higher risk, including individuals with criminal records. Bonds cover the first six months of employment.',
        link: null,
      },
    ],
  },
  {
    icon: Scale,
    category: 'Legal & Fair Chance Guidance',
    items: [
      {
        name: 'EEOC Guidance on Criminal Records',
        desc: 'The Equal Employment Opportunity Commission provides clear guidance on using criminal records in hiring decisions, including individualized assessment requirements and disparate impact considerations.',
        link: null,
      },
      {
        name: 'Utah Legal Services',
        desc: 'Provides free or low-cost legal assistance including guidance on employment rights for individuals with criminal records.',
        link: null,
      },
      {
        name: 'Ban-the-Box Status in Utah',
        desc: 'Utah has enacted fair chance hiring legislation for state government positions. While private employer requirements vary, many organizations voluntarily adopt fair chance policies. Check current state law for updates.',
        link: null,
      },
    ],
  },
];

export default function UtahResources() {
  return (
    <>
      <section style={{ background: '#1C2B3A' }} className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <MapPin size={32} style={{ color: '#8FB8D4' }} className="mx-auto mb-4" />
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#8FB8D4' }}>State-Specific</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5" style={{ color: '#FFFFFF', fontFamily: 'Poppins, sans-serif' }}>
            Utah Resources
          </h1>
          <p className="text-lg" style={{ color: '#A8BFCF', lineHeight: 1.8 }}>
            Concrete, location-specific resources for Utah employers, job seekers, and organizations engaged in second-chance hiring.
          </p>
        </div>
      </section>

      <section style={{ background: '#F9F8F6' }} className="px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {resources.map(({ icon: Icon, category, items }) => (
            <div key={category}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: '#EBF3FA' }}>
                  <Icon size={20} style={{ color: '#2C5F8A' }} />
                </div>
                <h2 className="text-xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>{category}</h2>
              </div>
              <div className="space-y-4">
                {items.map(({ name, desc, link }) => (
                  <div key={name} className="rounded-xl p-6" style={{ background: '#FFFFFF', border: '1px solid #E2DDD8' }}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-base mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{name}</h3>
                        <p className="text-sm" style={{ color: '#6B7A8D', lineHeight: 1.75 }}>{desc}</p>
                      </div>
                      {link && (
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 flex items-center gap-1 text-xs font-semibold no-underline px-3 py-1.5 rounded"
                          style={{ color: '#2C5F8A', background: '#EBF3FA' }}
                        >
                          Visit <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
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
            This list reflects resources available as of April 2026. Program availability and eligibility may change. Always verify directly with the organization before referral.
          </p>
        </div>
      </section>
    </>
  );
}
