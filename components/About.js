'use client';

import { useTranslation } from 'next-i18next';

export default function About() {
  const { t } = useTranslation('common');
  const skills = [
    'SOC Operations', 'Threat Hunting', 'Incident Response', 'Terraform',
    'AWS Security', 'LPIC Certified', 'Cloud Security', 'Network Security', 'Security Monitoring'
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">{t('aboutTitle')}</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="md:col-span-2 space-y-6">
            <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
              {t('aboutP1')}
            </p>

            <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
              {t('aboutP2')}
            </p>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white mb-4">{t('aboutExpertise')}</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200
                             hover:bg-yellow-100 dark:hover:bg-yellow-900 hover:border-yellow-300 dark:hover:border-yellow-600 transition-colors shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mt-8 md:mt-0">
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
