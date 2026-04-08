import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage5 from '../images/portfolio/idleology.png';
import porfolioImage3 from '../images/portfolio/port8.png';
import porfolioImage2 from '../images/portfolio/portfolio2.png';
import porfolioImage1 from '../images/portfolio/video_site.png';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  Hero,
  HomepageMeta,
  Milestone,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Yuan Gao (David)',
  description: "Hi, I'm David!",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'home',
  About: 'about',
  Portfolio: 'projects',
  Resume: 'experience',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
  Contact: 'contact',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Yuan Gao (David)`,
  description: (
    <>
      <p className="text-primary-fixed-dim text-lg md:text-xl max-w-xl leading-relaxed">
        Crafting high-end digital learning ecosystems where data intelligence meets pedagogical excellence.
      </p>
    </>
  ),
  actions: [
    {
      href: `/#${SectionId.Portfolio}`,
      text: 'Explore Projects',
      primary: true,
    },
    {
      href: `/#${SectionId.Resume}`,
      text: 'View Experience',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `As a MicroStrategist and data enthusiast, I'm interested in all things data and automation. Outside of work, I'm a big fan of cooking shows, YouTube DIY series,
  and just about anything to do with cute critters.`,
  aboutItems: [
    {label: 'Location', text: 'Fairfax, VA', Icon: MapIcon},
    {label: 'Age', text: '32', Icon: CalendarIcon},
    {label: 'Nationality', text: 'USA / Canada', Icon: FlagIcon},
    {label: 'Interests', text: 'Golf, Cooking, Modern Family', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Waterloo', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Strategy', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 6,
      },
      {
        name: 'Chinese Mandarin',
        level: 7,
      },
    ],
  },
  {
    name: 'Curriculum development',
    skills: [
      {
        name: 'Adobe LMS',
        level: 10,
      },
      {
        name: 'Articulate Storyline',
        level: 7,
      },
      {
        name: 'Adobe Framemaker',
        level: 9,
      },
    ],
  },
  {
    name: 'Video Editing',
    skills: [
      {
        name: 'Vegas Pro',
        level: 10,
      },
      {
        name: 'Adobe Premiere',
        level: 7,
      },
      {
        name: 'DaVinci Resolve',
        level: 6,
      },
    ],
  },
  {
    name: 'Technical Skills',
    skills: [
      {
        name: 'Python',
        level: 10,
      },
      {
        name: 'SQL',
        level: 8,
      },
      {
        name: 'AWS / Docker / Kubernetes',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Strategy AI for Business Users',
    description: 'Free introductory Strategy AI Course',
    url: 'https://www.microstrategy.com/education/ai-for-business-users-getting-started',
    image: porfolioImage1,
  },
  {
    title: 'Strategy Tutorials',
    description: 'Strategy Video Tutorials for various aspects of the product',
    url: 'https://community.microstrategy.com/s/tutorials?language=en_US',
    image: porfolioImage2,
  },
  {
    title: 'EDU Cloud Manager',
    description: 'Full in-house solution for Strategy Environments and Automated Certification Grading',
    url: 'https://github.com/davidgao93/',
    image: porfolioImage3,
  },
  {
    title: 'Idleology',
    description: 'A digital Discord bot that acts as a dungeon-master for an idle RPG game I designed and created called Idleology.',
    url: 'https://github.com/davidgao93/Idleology',
    image: porfolioImage5,
  },
];

export const education: TimelineItem[] = [
  {
    date: 'Oct 2016',
    location: 'University of Waterloo',
    title: 'Bachelors in Economics',
    content: <p>3.8/4.0 GPA</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Feb 2023 - Present',
    location: 'Strategy',
    title: 'Senior Curriculum Developer',
    content: (
      <p>
        Spearheaded automation of Strategy certification grading through Python- and API-driven workflows, achieving 99% accuracy
        vs. manual grading and saving 1,000+ instructor hours. Built internal education tools including a cloud instance and
        certification management system and a synthetic data generation platform (Python/Flask, SQLite/PostgreSQL, Bootstrap 5,
        Streamlit). Leveraged GPT-4o to auto-generate personalized feedback reports for hundreds of test takers, doubling
        subsequent certification pass rates. Designed 20+ internal AI training modules covering Strategy Auto, LLMs, OpenAI,
        prompt engineering, Mosaic, Bitcoin, and cloud transition strategies. Developed Articulate Storyline and Rise courses
        on AWS, EKS, and containerization. Authored SDK course materials for REST API, Embed SDK (JavaScript), and Python SDK.
        Produced 30+ training videos using Sony Vegas, Adobe Premiere, CapCut, OBS Studio, Nvidia Broadcast, Adobe Podcast,
        and Loom, with voice-over synthesis via Google Cloud.
      </p>
    ),
  },
  {
    date: 'Dec 2020 - Feb 2023',
    location: 'Strategy',
    title: 'Curriculum Developer',
    content: (
      <p>
        Authored comprehensive course materials for Strategy SDKs, covering REST API, Embed SDK (JavaScript), and Python SDK.
      </p>
    ),
  },
  {
    date: 'Jul 2016 - Dec 2020',
    location: 'Remote',
    title: 'Freelance Software Developer',
    content: (
      <p>
        Developed and deployed tailored scripting solutions in Python and AutoHotkey (AHK) to enhance client operations,
        specializing in SQL database management, data sorting, and analysis to drive business insights and efficiency.
      </p>
    ),
  },
  {
    date: 'Jun 2014 - Sep 2014',
    location: 'NCR Canada',
    title: 'Software Tester',
    content: (
      <p>
        Orchestrated in-depth software testing initiatives using HP Quality Center, leading the comparison between an in-house
        Java tool and a third-party solution, resulting in validation of the superior in-house tool and saving the company
        $20,000 CAD in licensing fees.
      </p>
    ),
  },
  {
    date: 'Jun 2013 - Dec 2013',
    location: 'Rogers Inc.',
    title: 'Support Analyst',
    content: (
      <p>
        Enhanced system operations by rewriting critical documentation for provisioning, standardizing best practices, resolving
        common database errors, automating RESTful API interactions with SoapUI for network provisioning, and developing Bash
        scripts that transitioned from manual execution to scheduled daily crontabs, leading to a transition from help desk to
        the provisioning team.
      </p>
    ),
  },
];

/**
 * Professional milestones
 */
export const milestones: Milestone[] = [
  {
    number: '01',
    category: 'Automation Excellence',
    title: 'Certification Grading Automation',
    description:
      'Spearheaded the development of a Python- and API-driven workflow that automates certification grading with 99% accuracy vs. manual grading. This implementation eliminated manual bottlenecks and recovered 1,000+ instructor hours annually.',
    tags: ['Python', 'REST API'],
  },
  {
    number: '02',
    category: 'Infrastructure',
    title: 'Internal Education Tooling',
    description:
      'Coded and deployed comprehensive internal tools including a Cloud Instance Management platform for lab environments and a proprietary synthetic data platform for large-scale training simulations.',
    tags: ['AWS', 'EKS', 'Docker'],
  },
  {
    number: '03',
    category: 'AI Integration',
    title: 'AI-Driven Feedback Reporting',
    description:
      'Built a custom workflow leveraging GPT-4o to automatically collect results data and generate personalized feedback reports for hundreds of test takers, improving study strategies and doubling subsequent certification pass rates.',
    tags: ['GPT-4o', 'LLM Ops'],
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Lauren O\'Connor',
      text: 'As a former member of the writing team, I can confirm our writers are often more comfortable behind the scenes, orchestrating the play while our instructors take center stage. So, imagine my delight when David Gao, our esteemed SDK writer, eagerly stepped up to lead hands-on exercises in our Departmental Analyst classes. ',
      image: 'https://www.microstrategy.com/_next/image?url=https%3A%2F%2Fimages.contentstack.io%2Fv3%2Fassets%2Fbltb564490bc5201f31%2Fblt3eeb4304997f689e%2F66579c551cd217686159a747%2Foption1.png&w=384&q=75',
    },
    {
      name: 'Joseph Timchenko',
      text: 'Working with David has been an absolute game-changer for our institution - their innovative approach and dedication to creating engaging learning experiences have significantly enhanced our students MicroStrategy knowledge.',
      //image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Hugh Owens',
      text: 'This is a result of your hard work, commitment to excellence, and your handling of increased responsibilities in your role.',
      //image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
    {
      name: 'Ziyao Zhang',
      text: 'Very patient and detail oriented when teaching others how to use and modify his programs.',
      //image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: '',
  description: '',
  items: [
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/davidgao93/'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/26708120/dervd'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/david-gao1993/'},
];
