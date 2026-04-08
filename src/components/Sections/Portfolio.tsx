import {ArrowTopRightOnSquareIcon, CalendarIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import {FC, memo} from 'react';

import {portfolioItems, SectionId} from '../../data/data';

const Portfolio: FC = memo(() => {
  return (
    <section className="bg-surface-container-low py-24" id={SectionId.Portfolio}>
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-headline text-4xl font-extrabold tracking-tighter text-primary">
            Featured Initiatives
          </h2>
          <p className="mx-auto max-w-2xl text-on-surface-variant">
            Selected training programs and developer tools designed for global scale.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {portfolioItems.map(({title, description, url, image}, index) => (
            <div
              className="group overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm transition-shadow hover:shadow-md"
              key={`${title}-${index}`}>
              <div className="relative aspect-video overflow-hidden">
                <Image
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  placeholder="blur"
                  src={image}
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/80 to-transparent p-8 opacity-0 transition-opacity group-hover:opacity-100">
                  <a
                    className="rounded-lg bg-white px-6 py-2 font-headline text-sm font-bold text-primary"
                    href={url}
                    rel="noopener noreferrer"
                    target="_blank">
                    View Project
                    <ArrowTopRightOnSquareIcon className="ml-1 inline h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="p-8">
                <span className="font-label text-[10px] font-bold uppercase tracking-[0.15em] text-tertiary">
                  {index < 2 ? 'Featured Project' : 'Open Source'}
                </span>
                <h4 className="mb-4 mt-2 font-headline text-2xl font-bold text-primary">{title}</h4>
                <p className="mb-6 text-sm leading-relaxed text-on-surface-variant">{description}</p>
                <div className="flex items-center gap-4">
                  <CalendarIcon className="h-5 w-5 text-outline" />
                  <a
                    className="text-xs font-medium text-outline transition-colors hover:text-primary"
                    href={url}
                    rel="noopener noreferrer"
                    target="_blank">
                    View on GitHub / Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;
