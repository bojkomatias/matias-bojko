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
]

export const WORK_EXPERIENCE: Array<WorkExperience> = [
  {
    company: 'Coverwallet an Aon Company',
    title: 'Senior Software Engineer',
    start: '2024',
    end: 'Present',
    link: '#',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'Software Engineer',
    start: '2021',
    end: 'Present',
    link: '#',
    id: 'work2',
  },
  {
    company: 'Asociación Casa Editora Sudamericana',
    title: 'Front-end Developer',
    start: '2019',
    end: '2022',
    link: '#',
    id: 'work3',
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
