'use client';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with user authentication, product catalog, and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '🛍️'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    technologies: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    image: '✅'
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with modern web technologies.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    image: '🎨'
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-8 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-black mb-12 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="text-5xl mb-4 text-center">{project.image}</div>
                <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                <p className="text-gray-800 mb-4">{project.description}</p>
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
