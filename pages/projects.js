import Head from 'next/head';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Link from 'next/link';

const projects = [
  {
    title: 'Proof-of-Work Chrome Extension',
    description: 'A Chrome extension that implements client-side Proof-of-Work for rate-limiting and anti-abuse protection. Built with Manifest V3 and modern JavaScript, this extension helps prevent spam and abuse in web applications.',
    tech: ['Chrome Extension', 'JavaScript', 'WebExtensions API', 'Crypto'],
    repo: 'https://github.com/yourusername/pow-extension',
    demo: '#',
    image: '/images/pow-extension.png'
  },
  {
    title: 'Suricata IDS Automation',
    description: 'Automated deployment and configuration of Suricata Intrusion Detection/Prevention System across multiple Linux and macOS environments. Includes custom rule management and log aggregation.',
    tech: ['Suricata', 'Bash', 'Ansible', 'SIEM'],
    repo: 'https://github.com/yourusername/suricata-automation',
    demo: '#',
    image: '/images/suricata.png'
  },
  {
    title: 'Rust Auth Service',
    description: 'High-performance authentication and authorization microservice implemented in Rust using the Axum framework. Features JWT-based authentication, role-based access control, and OpenAPI documentation with Utoipa.',
    tech: ['Rust', 'Axum', 'OpenAPI', 'JWT', 'PostgreSQL'],
    repo: 'https://github.com/yourusername/rust-auth-service',
    demo: '#',
    image: '/images/rust-auth.png'
  },
  {
    title: 'Terraform AWS Infrastructure',
    description: 'Infrastructure as Code (IaC) project for deploying scalable and secure AWS infrastructure using Terraform. Includes VPC, ECS, RDS, and security best practices.',
    tech: ['Terraform', 'AWS', 'DevOps', 'CI/CD'],
    repo: 'https://github.com/yourusername/terraform-aws',
    demo: '#',
    image: '/images/terraform-aws.png'
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Projects — Eva Manuska</title>
        <meta name="description" content="Explore my portfolio of software development and infrastructure projects" />
      </Head>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of my recent work, including open-source contributions and personal projects.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/project-placeholder.png';
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center">
                    <span className="text-gray-400">Project Preview</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4 mt-4">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <FiGithub className="mr-1.5 h-4 w-4" />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <FiExternalLink className="mr-1.5 h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}