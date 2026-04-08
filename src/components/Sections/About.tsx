import {FC, memo} from 'react';

import {SectionId} from '../../data/data';

const About: FC = memo(() => {
  return (
    <section className="bg-surface py-24" id={SectionId.About}>
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="mb-4 font-label text-sm font-bold uppercase tracking-[0.2em] text-on-tertiary-fixed-variant">
              Core Philosophy
            </h2>
            <h3 className="font-headline text-3xl font-extrabold leading-tight text-primary">
              Data as the Architect of Insight.
            </h3>
          </div>
          <div className="md:col-span-8">
            <p className="mb-8 font-body text-xl leading-relaxed text-on-surface-variant">
              My work lives at the intersection of complex software architecture and instructional design. I specialize in
              converting raw educational data into actionable insights through advanced software platforms.
            </p>
            <p className="font-body text-lg leading-relaxed text-on-surface-variant/80">
              By leveraging Python-driven automation and AI integration, I transform traditional learning materials into
              dynamic, responsive tools that evolve with the learner. Currently a Senior Education Developer at{' '}
              <span className="font-medium text-primary">MicroStrategy</span>, based in Fairfax, VA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';
export default About;
