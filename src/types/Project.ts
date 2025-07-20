import { Tag } from "./Tag";

export type Project = {
  title: string;
  description: string;
  thumbnail: string;
  link?: string;
  tags?: Tag[]; // Optional
  github?: string; // Optional GitHub link
}