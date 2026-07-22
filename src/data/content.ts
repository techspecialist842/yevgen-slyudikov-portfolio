export const profile = {
  name: 'Yevgen Slyudikov',
  title: 'Senior Web Developer',
  location: 'Ukraine',
  tagline:
    'Web developer with 7+ years building websites, e-commerce stores, and web applications for clients in Ukraine and abroad.',
  about: [
    'I work with HTML, CSS, JavaScript, React, Vue.js, WordPress, and PHP. Comfortable working remotely, communicating with clients in English, and delivering projects on time.',
    'Looking for freelance projects — especially for startups, agencies, and small businesses that need a reliable web developer.',
  ],
}

export const coreSkills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'Vue.js',
  'PHP',
  'Laravel',
  'WordPress',
  'WooCommerce',
  'REST APIs',
  'MySQL',
  'Git',
  'Figma',
  'Responsive Design',
  'Docker',
]

export const skillCloud = [
  'React.js',
  'WordPress',
  'Next.js',
  'PHP',
  'Shopify',
  'React Native',
  'JavaScript',
  'Android',
  'SaaS',
  'CRM',
  'CSS3',
  'Docker',
  'Chatbot',
  'Laravel',
  'TypeScript',
  'PrestaShop',
  'Flutter',
  'QA Automation',
  'Git',
  'Odoo',
  'Node.js',
  'Database',
  'iOS',
  'MySQL',
  'Python',
]

export type ExperienceItem = {
  role: string
  company: string
  period: string
  location?: string
  highlights: string[]
  technologies?: string[]
  current?: boolean
}

export const experience: ExperienceItem[] = [
  {
    role: 'Senior Web Developer',
    company: 'Horizon Web Studio',
    period: 'January 2022 — Present',
    location: 'Kyiv, Ukraine (Remote)',
    current: true,
    technologies: ['React', 'WooCommerce', 'WordPress', 'APIs'],
    highlights: [
      'Develop and maintain websites and web applications for agency clients.',
      'Built an e-commerce site with WooCommerce and React — improved page load time and increased mobile sales.',
      'Created reusable React components used across multiple projects.',
      'Integrated payment, CRM, and shipping APIs into client websites.',
      'Helped junior developers with code reviews and best practices.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'Healthcare Clinic Website',
    period: 'July 2026 — Present',
    current: true,
    technologies: ['WordPress', 'PHP', 'JavaScript'],
    highlights: [
      'Created a website for a clinic with multiple locations, online contact forms, and a mobile-friendly design.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'B2B SaaS Company',
    period: 'July 2026 — Present',
    current: true,
    technologies: ['React', 'SaaS', 'Dashboards'],
    highlights: [
      'Built a client portal where users can view reports, notifications, and account settings in one place.',
    ],
  },
  {
    role: 'Front-End Developer',
    company: 'E-Commerce Website Rebuild',
    period: 'July 2026 — Present',
    current: true,
    technologies: ['React', 'WooCommerce', 'Stripe'],
    highlights: [
      'Rebuilt an online store with a modern front-end.',
      'Improved checkout flow and page speed — client saw better conversion rates after launch.',
    ],
  },
  {
    role: 'Full-Stack Web Developer',
    company: 'BluePixel Digital',
    period: 'January 2019 — January 2022',
    location: 'Lviv, Ukraine',
    technologies: ['WordPress', 'Laravel', 'Vue.js', 'Docker'],
    highlights: [
      'Developed WordPress and Laravel websites for business clients.',
      'Built a multi-language company website with a custom CMS workflow.',
      'Created admin dashboards with Vue.js for client reporting.',
      'Worked with designers in Figma to implement layouts accurately.',
      'Managed deployments with Git and Docker.',
    ],
  },
  {
    role: 'Junior Web Developer',
    company: 'CodeBridge Solutions',
    period: 'January 2017 — January 2019',
    location: 'Remote',
    technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
    highlights: [
      'Built responsive landing pages with HTML, CSS, and JavaScript.',
      'Customized WordPress themes and plugins for small business clients.',
      'Fixed bugs and supported QA during development sprints.',
      'Wrote documentation for common development tasks.',
    ],
  },
]

export const languages = [
  { name: 'Russian', level: 'Native or bilingual', percent: 100 },
  { name: 'English', level: 'Native or bilingual', percent: 100 },
  { name: 'German', level: 'High Intermediate', percent: 72 },
  { name: 'Spanish', level: 'Basic', percent: 35 },
]

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#languages', label: 'Languages' },
]
