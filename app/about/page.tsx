import { GraduationCap, Target, Users } from 'lucide-react';

export const metadata = {
  title: 'About the Project | Second-Chance Hiring in Utah',
};

export default function About() {
  return (
    <>
      <section style={{ background: '#1C2B3A' }} className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <GraduationCap size={32} style={{ color: '#8FB8D4' }} className="mx-auto mb-4" />
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#8FB8D4' }}>Project Information</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5" style={{ color: '#FFFFFF', fontFamily: 'Poppins, sans-serif' }}>
            About the Project
          </h1>
          <p className="text-lg" style={{ color: '#A8BFCF', lineHeight: 1.8 }}>
            This site exists to translate academic research into practical guidance — helping Utah employers make more informed, equitable, and effective hiring decisions.
          </p>
        </div>
      </section>

      {/* About section */}
      <section style={{ background: '#F9F8F6' }} className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>The Capstone Project</h2>
          <p className="mb-5" style={{ color: '#4A5568', lineHeight: 1.85 }}>
            This website is a creative project component of a Bachelor of Integrated Studies (BIS) capstone at Weber State University, completed in April 2026. The BIS program integrates three academic disciplines into a unified area of study — and this project applies that integrated approach to a real, pressing issue in Utah's workforce landscape.
          </p>
          <p style={{ color: '#4A5568', lineHeight: 1.85 }}>
            Rather than producing a traditional academic paper alone, this project was designed to create something genuinely useful: a professional, research-backed resource that employers, HR leaders, and hiring managers can actually use to inform their practices. The aim is not to lecture or advocate — it is to inform, answer real questions, and reduce the fear that drives exclusionary hiring practices.
          </p>
        </div>
      </section>

      {/* Three areas */}
      <section style={{ background: '#FFFFFF' }} className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Three Integrated Areas of Study
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: 'Business Administration',
                color: '#2C5F8A',
                bg: '#EBF3FA',
                desc: 'Examines how second-chance hiring fits within broader business strategy — addressing workforce needs, retention, financial incentives, and organizational performance.',
              },
              {
                icon: Users,
                title: 'Leadership',
                color: '#1C2B3A',
                bg: '#F0EDE8',
                desc: 'Explores how transformational leadership, character, and psychological safety shape the conditions necessary for second-chance hiring to succeed at the team and organizational level.',
              },
              {
                icon: GraduationCap,
                title: 'Social Work',
                color: '#8B6914',
                bg: '#FDF6E3',
                desc: 'Grounds the project in research on reentry, recidivism, stigma, and the social determinants that shape employment outcomes for formerly incarcerated individuals.',
              },
            ].map(({ icon: Icon, title, color, bg, desc }) => (
              <div key={title} className="rounded-xl p-6" style={{ background: '#F9F8F6', border: '1px solid #E2DDD8' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: bg }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{title}</h3>
                <p className="text-sm" style={{ color: '#6B7A8D', lineHeight: 1.75 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intended audience */}
      <section style={{ background: '#EBF3FA' }} className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Intended Audience</h2>
          <ul className="space-y-3">
            {[
              'Utah employers and small business owners navigating hiring decisions',
              'HR professionals seeking research-backed guidance on background check policies',
              'Hiring managers who want to expand their talent pool without unnecessary risk',
              'Organizational leaders interested in building more equitable workplace cultures',
              'Community organizations and workforce development partners in Utah',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span style={{ color: '#2C5F8A', fontWeight: 700, flexShrink: 0 }}>·</span>
                <p className="text-sm" style={{ color: '#4A5568', lineHeight: 1.7 }}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Academic info */}
      <section style={{ background: '#F9F8F6' }} className="px-6 py-14">
        <div className="max-w-3xl mx-auto rounded-xl p-8" style={{ background: '#FFFFFF', border: '1px solid #E2DDD8' }}>
          <h3 className="font-bold text-lg mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>Project Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {[
              ['Student', 'Kilee Hori'],
              ['Course', 'BIS 4800 — Interdisciplinary Capstone'],
              ['Institution', 'Weber State University'],
              ['Instructor', 'Professor Susan Matt'],
              ['Completion', 'April 2026'],
              ['Integrated Disciplines', 'Business Administration, Leadership, Social Work'],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-xs font-semibold tracking-wide uppercase mb-0.5" style={{ color: '#6B7A8D' }}>{label}</p>
                <p style={{ color: '#1C2B3A', fontWeight: 500 }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
