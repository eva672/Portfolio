'use client';

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-8 py-20">
      <div className="max-w-2xl mx-auto w-full">
  <h2 className="text-4xl font-bold text-black mb-12 text-center">Get In Touch</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="Your message..."
              ></textarea>
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors font-medium"
              >
                Send Message
              </button>
            </div>
          </form>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Or reach out directly</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-800">
                <span className="mr-3">✉️</span>
                <a href="mailto:contact@evamanuska.com" className="hover:underline">
                  contact@evamanuska.com
                </a>
              </p>
              <p className="flex items-center text-gray-800">
                <span className="mr-3">🔗</span>
                <a href="https://linkedin.com/in/evamanuska" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  linkedin.com/in/evamanuska
                </a>
              </p>
              <p className="flex items-center text-gray-800">
                <span className="mr-3">🐙</span>
                <a href="https://github.com/evamanuska" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  github.com/evamanuska
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
