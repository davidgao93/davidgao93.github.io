import {FC, memo} from 'react';

import {SectionId, socialLinks} from '../../data/data';

const Footer: FC = memo(() => (
  <footer className="w-full border-t border-outline-variant/30 bg-surface-container-low">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-8 py-12 md:flex-row">
      <a
        className="font-headline text-lg font-bold tracking-tighter text-primary"
        href={`/#${SectionId.Hero}`}>
        YUAN GAO (DAVID)
      </a>
      <div className="flex gap-8">
        {socialLinks.map(({label, href}) => (
          <a
            className="font-label text-xs uppercase tracking-widest text-outline transition-colors hover:text-tertiary"
            href={href}
            key={label}
            rel="noopener noreferrer"
            target="_blank">
            {label}
          </a>
        ))}
        <a
          className="font-label text-xs uppercase tracking-widest text-outline transition-colors hover:text-tertiary"
          href="mailto:davidgao93@gmail.com">
          Email
        </a>
      </div>
      <div className="font-label text-xs uppercase tracking-widest text-outline">
        &copy; {new Date().getFullYear()} Yuan Gao (David). All rights reserved.
      </div>
    </div>
  </footer>
));

Footer.displayName = 'Footer';
export default Footer;
