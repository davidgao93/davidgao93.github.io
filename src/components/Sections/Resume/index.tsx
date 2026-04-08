import {
  AcademicCapIcon,
  CloudIcon,
  CodeBracketIcon,
  FilmIcon,
} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';

import {milestones, SectionId} from '../../../data/data';

const Resume: FC = memo(() => {
  return (
    <>
      {/* Professional Milestones */}
      <section className="bg-surface-container-low py-24" id={SectionId.Resume}>
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16 flex flex-col items-end justify-between gap-4 md:flex-row">
            <div>
              <h2 className="font-headline text-4xl font-extrabold tracking-tighter text-primary">
                Professional Milestones
              </h2>
              <div className="mt-4 h-1.5 w-24 bg-tertiary-fixed" />
            </div>
            <span className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              Current: Senior Education Developer
            </span>
          </div>
          <div className="space-y-12">
            {milestones.map(({number, category, title, description, tags}) => (
              <div className="group grid grid-cols-1 items-start gap-8 md:grid-cols-12" key={number}>
                <div className="md:col-span-3">
                  <span className="font-headline text-5xl font-extrabold text-surface-container-highest transition-colors group-hover:text-tertiary-fixed">
                    {number}
                  </span>
                  <p className="mt-2 font-label text-xs font-bold uppercase tracking-widest text-outline">
                    {category}
                  </p>
                </div>
                <div className="rounded-xl bg-surface-container-lowest p-10 shadow-sm md:col-span-9">
                  <h4 className="mb-4 font-headline text-2xl font-bold text-primary">{title}</h4>
                  <p className="mb-6 leading-relaxed text-on-surface-variant">{description}</p>
                  <div className="flex flex-wrap gap-3">
                    {tags.map(tag => (
                      <span
                        className="rounded-full bg-secondary-container px-3 py-1 font-label text-[10px] font-bold uppercase tracking-wider text-on-secondary-container"
                        key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="bg-surface py-24" id={SectionId.Skills}>
        <div className="mx-auto max-w-7xl px-8">
          <h2 className="mb-16 text-center font-headline text-4xl font-extrabold tracking-tighter text-primary">
            Technical Stack
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Architecture & Code — tall card */}
            <div className="flex flex-col justify-between rounded-xl bg-surface-container p-8 md:row-span-2">
              <div>
                <CodeBracketIcon className="mb-6 h-10 w-10 text-on-tertiary-fixed-variant" />
                <h3 className="mb-4 font-headline text-xl font-bold text-primary">Architecture &amp; Code</h3>
                <ul className="space-y-3">
                  {['Python (Flask/FastAPI)', 'SQLite & PostgreSQL', 'SQLAlchemy ORM', 'Streamlit Dashboards'].map(
                    item => (
                      <li className="flex items-center gap-3 font-medium text-on-surface-variant" key={item}>
                        <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-tertiary-fixed" />
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div className="mt-8 border-t border-outline-variant/30 pt-8">
                <p className="font-label text-xs font-bold uppercase tracking-widest text-outline">Efficiency Focus</p>
              </div>
            </div>

            {/* Learning Systems */}
            <div className="rounded-xl bg-surface-container-high p-8">
              <AcademicCapIcon className="mb-6 h-10 w-10 text-on-tertiary-fixed-variant" />
              <h3 className="mb-4 font-headline text-xl font-bold text-primary">Learning Systems</h3>
              <div className="flex flex-wrap gap-2">
                {['Articulate Storyline', 'Articulate Rise', 'LMS Integration', 'Adobe Framemaker'].map(tool => (
                  <span
                    className="rounded-full bg-white/50 px-3 py-1 font-label text-xs font-bold text-on-surface"
                    key={tool}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="rounded-xl bg-primary p-8 text-white">
              <CloudIcon className="mb-6 h-10 w-10 text-tertiary-fixed-dim" />
              <h3 className="mb-4 font-headline text-xl font-bold">Cloud &amp; DevOps</h3>
              <div className="space-y-4">
                {[
                  {name: 'AWS Infrastructure', level: 'Expert'},
                  {name: 'Docker / EKS', level: 'Advanced'},
                  {name: 'CI/CD Pipelines', level: 'Proficient'},
                ].map(({name, level}) => (
                  <div className="flex items-center justify-between" key={name}>
                    <span className="text-sm font-medium">{name}</span>
                    <span className="rounded bg-white/20 px-2 py-0.5 font-label text-[10px]">{level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Post-Production — wide card */}
            <div className="grid grid-cols-1 gap-8 rounded-xl bg-surface-container-low p-8 md:col-span-2 md:grid-cols-2">
              <div>
                <FilmIcon className="mb-6 h-10 w-10 text-on-tertiary-fixed-variant" />
                <h3 className="mb-4 font-headline text-xl font-bold text-primary">Post-Production</h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  Professional media production workflow utilizing industry-standard tools for high-fidelity educational
                  content.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-4">
                {[
                  {abbr: 'SV', name: 'Sony Vegas Pro'},
                  {abbr: 'AP', name: 'Adobe Premiere'},
                  {abbr: 'OB', name: 'OBS Studio'},
                ].map(({abbr, name}) => (
                  <div className="flex items-center gap-4" key={name}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-lowest shadow-sm">
                      <span className="font-headline text-xs font-bold text-primary">{abbr}</span>
                    </div>
                    <span className="text-sm font-bold text-on-surface">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

Resume.displayName = 'Resume';
export default Resume;
