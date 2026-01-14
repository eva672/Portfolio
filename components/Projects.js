'use client';

const projects = [
  {
    title: 'Security Operations Center (SOC)',
    description: 'Led SOC operations including security monitoring, incident response, and threat hunting using Wazuh and other security tools to protect organizational assets.',
    technologies: ['Wazuh', 'SOC Operations', 'Incident Response', 'Threat Hunting'],
    image: '🛡️'
  },
  {
    title: 'Cloud Security Hardening',
    description: 'Implemented security best practices and compliance standards for AWS infrastructure using Terraform and security automation tools.',
    technologies: ['AWS', 'Terraform', 'Cloud Security', 'Compliance'],
    image: '☁️'
  },
  {
    title: 'Incident Response Automation',
    description: 'Developed automated incident response workflows to reduce mean time to detection (MTTD) and response (MTTR) for security events.',
    technologies: ['Python', 'Automation', 'Incident Response', 'SOC'],
    image: '🚨'
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-8 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-black dark:text-white mb-12 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="text-5xl mb-4 text-center">{project.image}</div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-800 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="/projects"
            className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors"
          >
            View All Projects
          </a>
        </div>
      </div>
    </div>
  );
}
