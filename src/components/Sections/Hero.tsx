import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';

const Hero: FC = memo(() => {
  const {description, actions} = heroData;

  return (
    <section className="hero-gradient relative flex min-h-screen items-center overflow-hidden pt-20" id={SectionId.Hero}>
      <div className="absolute right-0 top-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-tertiary-fixed/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-96 w-96 rounded-full bg-secondary-fixed/5 blur-3xl" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-8 py-24">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <span className="mb-6 inline-block rounded-full bg-tertiary-fixed px-4 py-1 font-label text-[10px] font-bold uppercase tracking-widest text-on-tertiary-fixed">
              Education Developer &amp; Architect
            </span>
            <h1 className="mb-8 font-headline text-5xl font-extrabold leading-tight tracking-tighter text-white md:text-7xl">
              Bridging Education <br />
              &amp; <span className="text-tertiary-fixed-dim">Automation.</span>
            </h1>
            {description}
            <div className="mt-10 flex flex-wrap gap-4">
              {actions.map(({href, text, primary}) => (
                <a
                  className={
                    primary
                      ? 'rounded-lg bg-tertiary-fixed px-8 py-4 font-headline text-sm font-bold text-on-tertiary-fixed transition-transform hover:scale-[0.98]'
                      : 'rounded-lg border border-outline-variant/30 px-8 py-4 font-headline text-sm font-bold text-white transition-colors hover:bg-white/10'
                  }
                  href={href}
                  key={text}>
                  {text}
                </a>
              ))}
            </div>
          </div>
          <div className="relative hidden md:col-span-5 md:block">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-surface-container-highest/10">
              <div className="absolute inset-8 rounded-2xl border-[20px] border-tertiary-fixed/20" />
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 font-headline text-8xl font-extrabold text-tertiary-fixed/30">DG</div>
                  <div className="font-label text-xs font-bold uppercase tracking-widest text-primary-fixed-dim/50">
                    Senior Education Developer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
