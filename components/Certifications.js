'use client';

const certifications = [
  {
    title: 'HashiCorp Certified: Terraform Associate',
    issuer: 'HashiCorp',
    date: 'Issued Nov 2023',
    credentialId: 'eb3b75db-3942-4d78-ac61-564b3e1d66ae',
    link: 'https://www.credly.com/badges/eb3b75db-3942-4d78-ac61-564b3e1d66ae',
    icon: '☁️',
    color: 'from-blue-400 to-blue-600'
  },
  {
    title: 'OpenEDG JavaScript Certified',
    issuer: 'OpenEDG',
    date: 'Issued 2022',
    credentialId: 'jGnK.dqX4.CRvs',
    link: 'https://verify.openedg.org/?id=jGnK.dqX4.CRvs',
    icon: '💻',
    color: 'from-yellow-400 to-yellow-600'
  },
  {
    title: 'LPIC-1: Linux Administrator',
    issuer: 'Linux Professional Institute',
    date: 'Issued 2021',
    credentialId: 'LPI000637819',
    link: 'https://cs.lpi.org/caf/Xamman/certification/verify/LPI000637819/rad652md8l',
    icon: '🐧',
    color: 'from-green-400 to-green-600'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-black mb-12 text-center">
          Certifications
          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4"></div>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-start">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center text-3xl mr-4`}>
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{cert.issuer}</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-sm text-gray-500">{cert.date}</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        View Credential
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 transition-colors"
          >
            Request Full Certification Details
          </a>
        </div>
      </div>
    </section>
  );
}
