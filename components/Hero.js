import { playfair } from '../utils/fonts';

export default function Hero() {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-8 flex items-center gap-12">
        {/* Left framed photo with yellow accent */}
        <div className="relative flex-shrink-0">
          <div className="absolute -left-6 -top-6 w-40 h-40 bg-yellow-300 transform rotate-0"></div>
          <div className="border-4 border-black p-3 bg-white relative z-10">
            {/* If portrait.jpg is missing, fallback to a colored box */}
            <div className="w-64 h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
              {/* Render img unconditionally so SSR and client markup match (avoids hydration mismatch) */}
              <img src="/portrait.jpg" alt="portrait" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Right copy */}
        <div className="flex-1">
          <h1 className={`${playfair.variable} font-serif text-6xl leading-tight text-black mb-6`}>
            WEBSITE
            <br />
            DEVELOPER
          </h1>

          <div className="w-28 h-1 bg-black mb-6"></div>

          <p className="text-gray-700 max-w-lg mb-8">
            Founder of Frenify. Professional UI/UX designer and web developer based on London. Sometimes works as a freelancer.
          </p>

          <div className="mt-8">
            <p className="text-2xl font-medium italic">Felicia Aman</p>
          </div>
        </div>
      </div>
    </section>
  );
}