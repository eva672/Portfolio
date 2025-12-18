'use client';

export default function About() {
  const skills = [
    'JavaScript/TypeScript', 'React/Next.js', 'Node.js', 'Python',
    'Tailwind CSS', 'UI/UX Design', 'Responsive Development', 'Git'
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
              Hello! I'm Eva Manuska, a passionate Full Stack Developer with a keen eye for design and a love for creating 
              beautiful, functional web applications. With a background in both development and design, I bring a unique 
              perspective to every project I work on.
            </p>
            
            <p className="text-lg text-gray-800 leading-relaxed">
              I specialize in building modern web applications using the latest technologies, with a strong focus on 
              creating seamless user experiences. My approach combines clean code, thoughtful design, and efficient 
              solutions to solve real-world problems.
            </p>
            
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">My Skills</h3>
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
