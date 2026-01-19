'use client';

export default function About() {
  const skills = [
    'SOC Operations', 'Threat Hunting', 'Incident Response', 'Terraform',
    'AWS Security', 'LPIC Certified', 'Cloud Security', 'Network Security', 'Security Monitoring'
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-8 py-20">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">About Me</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg text-gray-800 leading-relaxed">
              Hello! I'm Eva Manuska, a dedicated Security Engineer with a strong foundation in full-stack development. 
              With certifications in Terraform, LPIC, and JavaScript, I bring a security-first mindset to every project, 
              ensuring robust and secure systems from the ground up.
            </p>
            
            <p className="text-lg text-gray-800 leading-relaxed">
              I specialize in Security Operations Center (SOC) activities, including threat hunting, incident response, and security monitoring. 
              With hands-on experience in cloud security and infrastructure as code using Terraform, I bring a comprehensive 
              security perspective to protect and defend organizational assets.
            </p>
            
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">Security & Technical Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium 
                             hover:bg-yellow-100 hover:border-yellow-300 transition-colors shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/profile.jpg" 
                alt="Eva Manuska" 
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80';
                }}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-yellow-400 rounded-2xl -z-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
