export interface Project {
  title: string;
  description: string;
  thumbnail: string;
  link: string;
  tags?: string[]; // Optional
  github?: string; // Optional GitHub link
}