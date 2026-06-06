'use client';
import { translations } from '@/lib/translations';
import { useLang } from '@/context/LangContext';
import Link from 'next/link';
import InstagramIcon from './InstagramIcon';

export const Hero = () => {
  const { lang } = useLang();
  const t = translations[lang];
  const bio = translations;
  return (
    <div className="flex min-h-[95vh] flex-col justify-end pb-14">
      <div className="mx-auto max-w-160 px-6">
        <span
          className="mb-3 block animate-fade-up text-[11px] font-medium
            tracking-[0.18em] text-accent uppercase [animation-delay:0.1s]"
        >
          {t.hero.tag}
        </span>
        <h1
          className="mb-2 animate-fade-up font-family-bebas
            text-[clamp(80px,20vw,120px)] leading-[0.88] tracking-[-1px]
            text-white [animation-delay:0.2s]"
        >
          {t.hero.name}
          <span className="text-accent">.</span>
          <br />
          {t.hero.surname}
        </h1>
        <span
          className="mb-5 block animate-fade-up text-[12px] tracking-[0.14em]
            text-[#f5f2ee80] uppercase [animation-delay:0.25s]"
        >
          {t.hero.location}
        </span>
        <div className="max-w-100 animate-fade-up [animation-delay:0.3s]">
          <p className="mb-1.5 text-[15px] leading-[1.7] text-[#f5f2eebf]">
            {bio.en.hero.bio}
          </p>
          <p className="mb-7 text-[13px] leading-[1.65] text-[#f5f2ee59] italic">
            {bio.id.hero.bio}
          </p>
        </div>
        <Link
          href="https://instagram.com/inna.koss88"
          className="inline-flex animate-fade-up items-center gap-2 rounded-xs
            bg-accent px-6 py-3.25 text-[13px] font-medium tracking-[0.06em]
            text-[#0d0d0d] [animation-delay:0.38s]
            [transition:background_0.2s,transform_0.15s] hover:-translate-y-px
            hover:bg-[#c98500]"
        >
          <InstagramIcon size={15} className="shrink-0" />
          {t.hero.cta}
        </Link>
      </div>
    </div>
  );
};
