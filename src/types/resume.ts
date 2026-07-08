export interface ResumeData {
  basics: Basics;
  experience: Experience[];
  projects: Project[];
  skills: SkillGroup[];
  education: Education[];
}

export interface Basics {
  name: string;
  label: string;
  email: string;
  phone?: string;
  url?: string;
  summary: string;
  avatar?: string;
  location?: {
    city: string;
    country: string;
  };
  profiles: Profile[];
}

export interface Profile {
  network: string;
  url: string;
  icon: string;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  summary: string;
  highlights: string[];
  current?: boolean;
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  detail: string;
  techStack: string[];
  image?: string;
  /** 多张展示图，可切换浏览 */
  images?: string[];
  /** 展示视频 */
  video?: string;
  url?: string;
  github?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Education {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
}
