'use client';

import { useLang } from '@/context/LangContext';
import { translations } from '@/lib/translations';
import { twMerge } from 'tailwind-merge';

export const LangToggle = () => {
  const { lang, setLang } = useLang();
  const t = translations[lang];

  return (
    <div
      className="mt-10 mb-7 flex w-fit animate-fade-up gap-0 rounded-[3px]
        bg-[#ffffff0d] p-0.75 text-[11px] tracking-widest uppercase
        [animation-delay:0.42s]"
    >
      <button
        className={twMerge(
          `cursor-pointer rounded-xs border-none px-3.5 py-1.25 transition-all
          duration-150`,
          lang === 'en' ? 'bg-accent text-black' : 'bg-transparent text-muted',
        )}
        onClick={() => setLang('en')}
      >
        {t.nav.en}
      </button>
      <button
        className={twMerge(
          `cursor-pointer rounded-xs border-none px-3.5 py-1.25 transition-all
          duration-150`,
          lang === 'id' ? 'bg-accent text-black' : 'bg-transparent text-muted',
        )}
        onClick={() => setLang('id')}
      >
        {t.nav.id}
      </button>
    </div>
  );
};
