import { type Service } from '@/lib/translations';
import Link from 'next/link';

export const ServiceCard = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => {
  const delayClass = [
    '[animation-delay:0.46s]',
    '[animation-delay:0.52s]',
    '[animation-delay:0.58s]',
  ];

  return (
    <div
      className={`transition-color relative flex min-h-70 animate-fade-up
        flex-col justify-end overflow-hidden rounded-sm border-[0.5px]
        border-[#ffffff14] duration-200 before:absolute before:top-0
        before:bottom-0 before:left-0 before:z-2 before:w-0.75
        before:origin-bottom before:scale-y-0 before:bg-accent
        before:transition-transform before:duration-250 before:ease-in-out
        hover:border-white/16 hover:before:scale-y-100 ${delayClass[index]}`}
    >
      <div className="rounded-sm bg-card-bg p-4">
        <div className="mb-2 flex items-start justify-between">
          <span
            className="font-family-bebas text-[12px] tracking-widest
              text-accent"
          >
            {service.num}
          </span>
          <span
            className="rounded-xs bg-[#ffffff12] px-2 py-0.75 text-[10px]
              tracking-[0.12em] text-muted uppercase"
          >
            {service.tag}
          </span>
        </div>
        <h2
          className="mb-2.5 font-family-bebas text-[38px] leading-none
            tracking-[1px] text-white"
        >
          {service.title}
        </h2>
        <p className="mb-0.5 text-[13px] leading-[1.65] text-[#f5f2eeb3]">
          {service.desc}
        </p>
        <Link
          href=""
          className="mt-3.5 inline-flex items-center gap-1.5 text-[12px]
            font-medium tracking-[0.08em] text-accent uppercase"
        >
          <span>{service.cta}</span>→
        </Link>
      </div>
    </div>
  );
};
