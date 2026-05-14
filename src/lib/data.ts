type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  contract?: boolean
}

type Education = {
  institution: string
  degree: string
  start: string
  end: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Array<Project> = [
  {
    name: 'Case History',
    description:
      'Patients and cases management software, simple for every day use in the physician practices.',
    link: 'https://case-history-v2.vercel.app',
    video: '/case-history-video.mov',
    id: 'project1',
  },
  {
    name: 'Research Academy Management',
    description:
      'Platform to manage reseach studies, and full cross examination accross applied science fields.',
    link: 'https://vidonline.uap.edu.ar',
    video: '/uap-vid.mov',
    id: 'project2',
  },
  {
    name: 'Turtle',
    description:
      'DeFi liquidity distribution protocol with data aggregation pipelines across multiple blockchain networks.',
    link: 'https://app.turtle.xyz',
    video: '/turtle.mov',
    id: 'project3',
  },
  {
    name: 'Coverwallet',
    description:
      'Insurance software for selling and managing business policies, serving global enterprise clients at scale.',
    link: 'https://www.aonaffinity.com/traffic-director/',
    video: '/coverwallet.mov',
    id: 'project4',
  },
]

export const WORK_EXPERIENCE: Array<WorkExperience> = [
  {
    company: 'Coverwallet, an Aon Company',
    title: 'Senior Software Engineer — Architecture & Product',
    start: 'Mar 2023',
    end: 'Present',
    link: 'https://www.aonaffinity.com/traffic-director/',
    id: 'work1',
  },
  {
    company: 'turtle.xyz',
    title: 'Software Engineer — Architecture & Blockchain Data',
    start: 'Sep 2025',
    end: 'Feb 2026',
    link: 'https://turtle.xyz',
    id: 'work2',
    contract: true,
  },
  {
    company: 'pqlub',
    title: 'Software Architect & Co-founder',
    start: 'Jan 2021',
    end: 'Present',
    link: 'https://www.pqlub.com/',
    id: 'work3',
  },
  {
    company: 'ACES',
    title: 'Software Engineer',
    start: 'Mar 2019',
    end: 'Feb 2021',
    link: 'https://editorialaces.com/home',
    id: 'work4',
  },
]

export const EDUCATION: Array<Education> = [
  {
    institution: 'Universidad del Plata',
    degree: 'Systems Engineering in Information Technology',
    start: '2017',
    end: '2021',
    id: 'edu1',
  },
  {
    institution: 'Universidad Nacional de Córdoba',
    degree: 'Aeronautical Engineering',
    start: '2014',
    end: '2016',
    id: 'edu2',
  },
]

export const BLOG_POSTS: Array<BlogPost> = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: Array<SocialLink> = [
  {
    label: 'Github',
    link: 'https://github.com/bojkomatias',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/matias-bojko/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/matibojko',
  },
]

export const EMAIL = 'bojko.matias@gmail.com'
