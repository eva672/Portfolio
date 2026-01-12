import { playfair } from '../utils/fonts';

export default function Hero() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Left side - Text content */}
        <div className="flex-1 order-2 md:order-1 text-center md:text-left">
          <h1 className={`${playfair.variable} font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6`}>
            EVA MANUSKA
          </h1>
          
          <div className="w-28 h-1 bg-yellow-400 mx-auto md:mx-0 mb-6"></div>

          <h2 className="text-2xl md:text-3xl text-gray-800 mb-6">
            Security Engineer & Full-Stack Developer
          </h2>

          <p className="text-gray-700 max-w-lg mb-6 text-lg">
            Securing cloud infrastructure and building robust applications with a focus on automation and best practices. 
            Certified in Terraform, LPIC, and JavaScript, I bring security-first thinking to every project.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            <a 
              href="https://wazuh.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full transition-colors"
            >
              Wazuh SOC
            </a>
            <a 
              href="https://www.credly.com/badges/eb3b75db-3942-4d78-ac61-564b3e1d66ae" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full transition-colors"
              title="HashiCorp Certified: Terraform Associate"
            >
              Terraform Certified
            </a>
            <a 
              href="https://www.lpi.org/our-certifications/certification-holder-resources" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full transition-colors"
            >
              LPIC Certified
            </a>
            <a 
              href="https://verify.openedg.org/?id=jGnK.dqX4.CRvs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full transition-colors"
              title="OpenEDG JavaScript Certification"
            >
              JavaScript Certified
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#contact" 
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-8 rounded-lg transition-colors text-center"
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="border-2 border-black hover:bg-gray-100 text-black font-medium py-3 px-8 rounded-lg transition-colors text-center"
            >
              View My Work
            </a>
            <a 
              href="https://github.com/evamanuska" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-2 border-black hover:bg-gray-100 text-black font-medium py-3 px-6 rounded-lg transition-colors text-center"
              aria-label="GitHub Profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </div>
        </div>

        {/* Right side - Profile image */}
        <div className="relative flex-shrink-0 order-1 md:order-2 mb-8 md:mb-0">
          <div className="absolute -left-4 -top-4 w-full h-full bg-yellow-300 rounded-2xl -z-10"></div>
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl w-64 h-80 md:w-80 md:h-96">
            <img 
              src="/profile.jpg" 
              alt="Eva Manuska - Security Engineer" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}