export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  link: string
  demoUrl?: string
  githubUrl?: string
}

export interface SkillCategory {
  category: string
  items: string[]
}

export interface Experience {
  role: string
  company: string
  period: string
  description: string
}

export interface Contact {
  name: string
  email: string
  subject: string
  message: string
}
