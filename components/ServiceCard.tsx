import { type Service } from '@/lib/translations';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

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
      className={twMerge(
        `transition-color relative flex min-h-70 animate-fade-up flex-col
        justify-end overflow-hidden rounded-sm duration-200 before:absolute
        before:top-0 before:bottom-0 before:left-0 before:z-2 before:w-0.75
        before:origin-bottom before:scale-y-0 before:transition-transform
        before:duration-250 before:ease-in-out hover:border-white/16
        hover:before:scale-y-100 ${delayClass[index]}`,
        index === 1 ? 'before:bg-accent2' : 'before:bg-accent',
      )}
    >
      <div className="rounded-sm bg-card-bg p-4">
        <div className="mb-2 flex items-start justify-between">
          <span
            className={twMerge(
              'tracking-wides font-family-bebas text-[12px] text-accent',
              index === 1 ? 'text-accent2' : 'text-accent',
            )}
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
          href="https://instagram.com/inna.koss88"
          target="_blank"
          className={twMerge(
            `mt-3.5 inline-flex items-center gap-1.5 text-[12px] font-medium
            tracking-[0.08em] uppercase`,
            index === 1 ? 'text-accent2' : 'text-accent',
          )}
        >
          <span>{service.cta}</span>→
        </Link>
      </div>
    </div>
  );
};
