'use client';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="space-y-16">
      <Head>
        <title>Eva Manuska - Portfolio</title>
        <meta name="description" content="Personal portfolio of Eva Manuska - Systems Engineer & Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Hi, I'm Eva Manuska</h1>
          <h2 className="text-2xl text-gray-600 mb-8">Systems Engineer & Developer</h2>
          
          <div className="prose max-w-3xl text-gray-700 mb-12">
            <p className="text-lg leading-relaxed mb-8">
              I'm a passionate developer with expertise in building secure, scalable systems and developer tools. 
              My focus is on creating robust infrastructure and efficient solutions using modern technologies.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="/contact" 
                className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Contact Me
              </a>
              <a 
                href="/resume" 
                className="inline-block border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="bg-gray-50 py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-gray-700 leading-relaxed mb-6">
                I'm a passionate developer with expertise in building secure, scalable systems and developer tools. 
                My focus is on creating robust infrastructure and efficient solutions using modern technologies.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                With experience in Rust, JavaScript, and cloud technologies, I specialize in building high-performance 
                applications and developer tools that make a difference.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['Rust', 'JavaScript', 'TypeScript', 'Node.js', 'React', 'Kubernetes', 'Docker', 'AWS', 'Terraform', 'CI/CD'].map((skill) => (
                    <span key={skill} className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Senior Software Engineer</h4>
                  <p className="text-gray-600">Company Name • 2020 - Present</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Software Engineer</h4>
                  <p className="text-gray-600">Previous Company • 2018 - 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((project) => (
              <div key={project} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400">Project {project} Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Project {project} Title</h3>
                  <p className="text-gray-600 mb-4">A brief description of the project and what it does.</p>
                  <div className="flex space-x-2">
                    <span className="text-sm bg-gray-100 px-2 py-1 rounded">React</span>
                    <span className="text-sm bg-gray-100 px-2 py-1 rounded">Node.js</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a 
              href="/projects" 
              className="inline-block text-indigo-600 hover:text-indigo-800 font-medium"
            >
              View All Projects →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 text-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll get back to you as soon as possible!
          </p>
          <a 
            href="mailto:hello@evamanuska.com" 
            className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Say Hello
          </a>
        </div>
      </section>
    </div>
  );
}