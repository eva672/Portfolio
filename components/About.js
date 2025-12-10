'use client';

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-8">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-gray-800 leading-relaxed mb-6">
              I'm a passionate developer with expertise in building secure, scalable systems and developer tools. 
              My focus is on creating robust infrastructure and efficient solutions using modern technologies.
            </p>
            <p className="text-gray-800 leading-relaxed mb-6">
              With a strong foundation in computer science and years of hands-on experience, I specialize in developing 
              applications that are both performant and user-friendly. I'm always eager to learn new technologies and 
              methodologies to stay at the forefront of web development.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                JavaScript/TypeScript
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                React/Next.js
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Node.js
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Tailwind CSS
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-48 h-48 rounded-full bg-purple-100 flex items-center justify-center">
              <span className="text-4xl text-purple-800">👩‍💻</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
