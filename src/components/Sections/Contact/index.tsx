import {DocumentTextIcon, EnvelopeIcon} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';

import {SectionId} from '../../../data/data';

const Contact: FC = memo(() => {
  return (
    <section className="relative overflow-hidden bg-primary py-24" id={SectionId.Contact}>
      <div className="absolute -mr-20 -mt-20 right-0 top-0 h-96 w-96 rounded-full bg-tertiary-fixed/10 blur-3xl" />
      <div className="absolute -mb-20 -ml-20 bottom-0 left-0 h-96 w-96 rounded-full bg-secondary-fixed/5 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-7xl px-8 text-center">
        <h2 className="mb-8 font-headline text-4xl font-extrabold tracking-tighter text-white md:text-5xl">
          Ready to automate your <br className="hidden md:block" /> learning ecosystem?
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-lg text-primary-fixed-dim">
          Available for strategic consultancy on educational technology, AI integration, and development projects.
        </p>
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
          <a
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-tertiary-fixed px-10 py-5 font-headline text-sm font-extrabold text-on-tertiary-fixed transition-transform hover:scale-105"
            href="mailto:davidgao93@gmail.com">
            <EnvelopeIcon className="h-5 w-5" />
            Start a Conversation
          </a>
          <div className="flex gap-4">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-5 font-headline text-sm font-extrabold text-white transition-colors hover:bg-white/5"
              download
              href="/DG_Resume_2026.pdf">
              <DocumentTextIcon className="h-5 w-5" />
              PDF Resume
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-5 font-headline text-sm font-extrabold text-white transition-colors hover:bg-white/5"
              download
              href="/DG_Resume_2026.docx">
              <DocumentTextIcon className="h-5 w-5" />
              DOCX Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
