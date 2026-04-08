import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#1C2B3A', color: '#A8BFCF' }} className="mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h4 style={{ color: '#FFFFFF', fontFamily: 'Poppins, sans-serif', fontSize: '1rem', marginBottom: '0.75rem' }}>
              Second-Chance Hiring in Utah
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: '#8FB8D4' }}>
              A research-based resource helping Utah employers make informed, practical decisions about hiring individuals with criminal records.
            </p>
          </div>
          <div>
            <h4 style={{ color: '#FFFFFF', fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
              Explore
            </h4>
            <ul className="space-y-1.5 text-sm">
              {[
                ['Why It Matters', '/why-it-matters'],
                ['Business Case', '/business-case'],
                ['Leadership', '/leadership'],
                ['Employer FAQ', '/faq'],
                ['Utah Resources', '/utah-resources'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="no-underline hover:underline" style={{ color: '#8FB8D4' }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#FFFFFF', fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
              Project Info
            </h4>
            <ul className="space-y-1.5 text-sm">
              {[
                ['Research & Sources', '/research'],
                ['About the Project', '/about'],
                ['Contact / Feedback', '/contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="no-underline hover:underline" style={{ color: '#8FB8D4' }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 text-xs text-center" style={{ borderTop: '1px solid #2C3E50', color: '#6B7A8D' }}>
          Weber State University · BIS 4800 Capstone · Kilee Hori · April 2026
        </div>
      </div>
    </footer>
  );
}
