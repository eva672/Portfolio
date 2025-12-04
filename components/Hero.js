import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Hi, I'm Eva Manuska</h1>
          <h2 className="text-2xl text-gray-600 mb-8">Systems Engineer & Developer</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            I build secure, observable infrastructure and developer tools. 
            I specialize in Rust, JavaScript, Kubernetes, and security tooling like 
            Suricata and Wazuh.
          </p>
          <div className="flex space-x-4">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>
        
        <div className="mt-12 flex items-center space-x-6">
          <div className="h-1 w-16 bg-primary rounded-full"></div>
          <span className="text-text-secondary">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}