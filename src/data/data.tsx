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
import porfolioImage1 from '../images/portfolio/video_site.png';
import porfolioImage3 from '../images/portfolio/port8.png';
import porfolioImage5 from '../images/portfolio/idleology.png';
import porfolioImage2 from '../images/portfolio/portfolio2.png';
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
    {label: 'Age', text: '31', Icon: CalendarIcon},
    {label: 'Nationality', text: 'USA / Canada', Icon: FlagIcon},
    {label: 'Interests', text: 'Golf, Cooking, Modern Family', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Waterloo', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'MicroStrategy', Icon: BuildingOffice2Icon},
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
        name: 'Java',
        level: 6,
      },
      {
        name: 'AI',
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
    date: 'Dec 2020 - Present',
    location: 'MicroStrategy',
    title: 'Senior Curriculum Developer',
    content: (
      <p>
		  At MicroStrategy, I have excelled as a Senior Curriculum Developer, 
		  where I have pioneered the automation of certification grading by integrating APIs 
		  with Python and developing user-friendly GUI tools, 
		  significantly improving grading efficiency and accuracy. 
		  My efforts resulted in the rapid grading of hundreds of certifications within the first month, 
		  with an impressive 95% accuracy rate, while also enabling the automatic collection of data to refine 
		  future certification processes. Additionally, I have crafted comprehensive SDK course materials, 
		  designed cutting-edge AI training programs, and produced a series 
		  of professional training videos using advanced editing tools such as Sony Vegas and Adobe Premiere. 
		  My role also involves creating and leading internal training on MicroStrategy AI products, 
		  including LLMs and cloud transition strategies, as well as transforming complex textbook content 
		  into dynamic e-learning modules with Articulate Storyline, 
		  enhancing the overall student experience. 
		  I authored extensive course materials for various MicroStrategy SDKs and seamlessly integrated them into Adobe LMS, 
		  further contributing to the robust educational offerings of the company.
	  </p>
    ),
  },
  {
    date: 'Jul 2016 - Dec 2020',
    location: 'Remote',
    title: 'Software Developer',
    content: (
      <p>
		I have developed and deployed customized scripting solutions using Python and AutoHotkey (AHK) to optimize client operations, 
		focusing on SQL database management, data sorting, and analysis to promote business insights and efficiency. 
		My expertise in streamlining client workflows is demonstrated through the creation of sophisticated GUI automation 
		scripts with PyAutoGUI and AHK, which have significantly saved time and minimized human error by automating repetitive tasks. 
		Additionally, I have engineered robust Docker containerized applications to ensure consistent execution across various operating systems, 
		effectively addressing compatibility issues. Complementing my technical skills, I provide exceptional client support in 
		English, Mandarin Chinese, and French, offering real-time troubleshooting and 
		updates to ensure client satisfaction and operational continuity.
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
      'Spearheaded the development of a Python-based API system that automates the grading of certification assessments. This implementation eliminated manual bottlenecks and recovered over 1,000+ hours of staff time annually.',
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
      'Developed a state-of-the-art feedback engine utilizing GPT-4o to generate hyper-personalized performance reports for learners, bridging the gap between automated assessment and qualitative mentorship.',
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
