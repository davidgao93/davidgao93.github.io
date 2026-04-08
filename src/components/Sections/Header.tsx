import {Dialog, Transition} from '@headlessui/react';
import {Bars3BottomRightIcon, XMarkIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import {FC, Fragment, memo, useCallback, useRef, useState} from 'react';

import {SectionId} from '../../data/data';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import {useNavObserver} from '../../hooks/useNavObserver';

export const headerID = 'headerNav';

const navItems: {label: string; section: SectionId}[] = [
  {label: 'Home', section: SectionId.Hero},
  {label: 'Experience', section: SectionId.Resume},
  {label: 'Projects', section: SectionId.Portfolio},
  {label: 'Skills', section: SectionId.Skills},
  {label: 'Contact', section: SectionId.Contact},
];

const resumeLinks = [
  {label: 'Download PDF', href: '/DG_Resume_2026.pdf'},
  {label: 'Download DOCX', href: '/DG_Resume_2026.docx'},
];

const Header: FC = memo(() => {
  const [currentSection, setCurrentSection] = useState<SectionId | null>(null);
  const navSections = navItems.map(item => item.section);

  const intersectionHandler = useCallback((section: SectionId | null) => {
    section && setCurrentSection(section);
  }, []);

  useNavObserver(navSections.map(section => `#${section}`).join(','), intersectionHandler);

  return (
    <>
      <MobileNav currentSection={currentSection} />
      <DesktopNav currentSection={currentSection} />
    </>
  );
});

const DesktopNav: FC<{currentSection: SectionId | null}> = memo(({currentSection}) => {
  const [cvOpen, setCvOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useDetectOutsideClick(dropdownRef, () => setCvOpen(false));

  return (
    <header className="glass-nav fixed top-0 z-50 hidden w-full shadow-sm sm:block" id={headerID}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <Link className="font-headline text-xl font-extrabold tracking-tighter text-primary" href={`/#${SectionId.Hero}`}>
          YUAN GAO
        </Link>
        <nav className="flex items-center gap-8 font-headline text-sm font-medium tracking-wide">
          {navItems.map(({label, section}) => {
            const isActive = section === currentSection;
            return (
              <Link
                className={classNames(
                  'transition-colors hover:text-primary',
                  isActive ? 'border-b-2 border-tertiary font-bold text-tertiary' : 'text-on-surface-variant',
                )}
                href={`/#${section}`}
                key={section}>
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="relative" ref={dropdownRef}>
          <button
            className="rounded-lg bg-primary px-6 py-2 font-headline text-sm font-bold text-on-primary transition-opacity hover:opacity-90"
            onClick={() => setCvOpen(prev => !prev)}>
            Download CV
          </button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            show={cvOpen}>
            <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-lg bg-surface-container-lowest shadow-lg ring-1 ring-outline-variant/20">
              {resumeLinks.map(({label, href}) => (
                <a
                  className="block px-4 py-3 font-body text-sm text-on-surface-variant transition-colors hover:bg-surface-container-low hover:text-primary"
                  download
                  href={href}
                  key={href}
                  onClick={() => setCvOpen(false)}>
                  {label}
                </a>
              ))}
            </div>
          </Transition>
        </div>
      </div>
    </header>
  );
});

const MobileNav: FC<{currentSection: SectionId | null}> = memo(({currentSection}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => setIsOpen(prev => !prev), []);

  return (
    <>
      <button
        aria-label="Menu Button"
        className="fixed right-4 top-4 z-50 rounded-lg bg-primary p-2 sm:hidden"
        onClick={toggleOpen}>
        <Bars3BottomRightIcon className="h-6 w-6 text-on-primary" />
      </button>
      <Transition.Root as={Fragment} show={isOpen}>
        <Dialog as="div" className="fixed inset-0 z-40 flex sm:hidden" onClose={toggleOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Dialog.Overlay className="fixed inset-0 bg-primary/60 backdrop-blur-sm" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full">
            <div className="relative ml-auto w-4/5 bg-surface-container-lowest px-6 py-8 shadow-xl">
              <button
                className="absolute right-4 top-4 rounded-lg p-1 text-on-surface-variant hover:text-primary"
                onClick={toggleOpen}>
                <XMarkIcon className="h-6 w-6" />
              </button>
              <div className="mb-8 font-headline text-xl font-extrabold tracking-tighter text-primary">YUAN GAO</div>
              <nav className="flex flex-col gap-y-4">
                {navItems.map(({label, section}) => (
                  <Link
                    className={classNames(
                      'rounded-lg p-3 font-headline text-base font-medium transition-colors',
                      section === currentSection
                        ? 'bg-primary text-on-primary font-bold'
                        : 'text-on-surface-variant hover:bg-surface-container-low',
                    )}
                    href={`/#${section}`}
                    key={section}
                    onClick={toggleOpen}>
                    {label}
                  </Link>
                ))}
              </nav>
              <div className="mt-8 flex flex-col gap-y-3 border-t border-outline-variant/30 pt-8">
                {resumeLinks.map(({label, href}) => (
                  <a
                    className="rounded-lg border border-outline-variant/50 px-4 py-3 font-headline text-sm font-bold text-primary transition-colors hover:bg-surface-container-low"
                    download
                    href={href}
                    key={href}
                    onClick={toggleOpen}>
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
});

Header.displayName = 'Header';
DesktopNav.displayName = 'DesktopNav';
MobileNav.displayName = 'MobileNav';
export default Header;
