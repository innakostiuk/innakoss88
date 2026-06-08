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
    <div className="relative flex min-h-[95vh] flex-col justify-end pb-14">
      <div
        className="absolute inset-0 z-0 after:absolute after:inset-0 after:z-10
          after:bg-[linear-gradient(to_bottom,rgba(13,13,13,0.05)_0%,rgba(13,13,13,0.05)_30%,rgba(13,13,13,0.45)_70%,rgba(13,13,13,0.92)_100%)]
          after:content-['']"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          src="https://udt6dp7duepdgpfb.public.blob.vercel-storage.com/hero.mp4"
          className="size-full object-cover object-center opacity-75"
        />
      </div>
      <div className="mx-auto w-full max-w-160 px-6">
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
          target="_blank"
          className="inline-flex animate-fade-up items-center gap-2 rounded-xs
            bg-accent px-6 py-3.25 text-[13px] font-medium tracking-[0.06em]
            text-black [animation-delay:0.38s]
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
