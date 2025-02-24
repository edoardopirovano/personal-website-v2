export interface Job {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  linkType: "github" | "website";
}
