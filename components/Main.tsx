'use client';

import { useLang } from '@/context/LangContext';
import { translations } from '@/lib/translations';
import { LangToggle } from './LangToggle';

export const Main = () => {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <div className="mx-auto max-w-160 px-5 pb-15">
      <LangToggle />
      <p className="mb-4 text-[10px] tracking-[0.2em] text-muted uppercase">
        {t.section.services}
      </p>
    </div>
  );
};
