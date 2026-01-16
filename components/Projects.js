'use client';

import { useTranslation } from 'next-i18next';

const projects = [
  {
    title: 'auth_api2',
    description: 'auth_api2',
    technologies: ['auth_api2'],
    image: '🛡️',
    link: 'https://github.com/eva672/auth_api2'
  },
  {
    title: 'Cloud-Native-G',
    description: 'Cloud-Native-G',
    technologies: ['Cloud-Native-G'],
    image: '☁️',
    link: 'https://github.com/eva672/Cloud-Native-G'
  },
  {
    title: 'Emoji-Mood-Interpreter',
    description: 'Emoji-Mood-Interpreter',
    technologies: ['Emoji-Mood-Interpreter'],
    image: '😊',
    link: 'https://github.com/eva672/Emoji-Mood-Interpreter'
  },
  {
    title: 'gitops-mailhog-terraform',
    description: 'gitops-mailhog-terraform',
    technologies: ['gitops-mailhog-terraform'],
    image: '📧',
    link: 'https://github.com/eva672/gitops-mailhog-terraform'
  },
  {
    title: 'Rust_Api',
    description: 'Rust_Api',
    technologies: ['Rust_Api'],
    image: '🦀',
    link: 'https://github.com/eva672/Rust_Api'
  }
];

export default function Projects() {
  const { t } = useTranslation('common');
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-8 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-black dark:text-white mb-12 text-center">{t('myProjects')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a href={project.link} key={index} target="_blank" rel="noopener noreferrer">
              <div
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 h-full"
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
            </a>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="/projects"
            className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors"
          >
            {t('viewAllProjects')}
          </a>
        </div>
      </div>
    </div>
  );
}
