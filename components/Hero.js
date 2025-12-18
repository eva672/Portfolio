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
            Full Stack Developer & Designer
          </h2>

          <p className="text-gray-700 max-w-lg mb-8 text-lg">
            Creating beautiful, functional, and user-centered digital experiences.
            Specializing in modern web technologies and clean, efficient code.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <a 
              href="#contact" 
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="border-2 border-black hover:bg-gray-100 text-black font-medium py-3 px-8 rounded-lg transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Right side - Profile image */}
        <div className="relative flex-shrink-0 order-1 md:order-2 mb-8 md:mb-0">
          <div className="absolute -left-4 -top-4 w-full h-full bg-yellow-300 rounded-2xl -z-10"></div>
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl w-64 h-80 md:w-80 md:h-96">
            <img 
              src="/profile.jpg" 
              alt="Eva Manuska" 
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