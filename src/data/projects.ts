import { Project } from "@/types/Project";
import { githubMarkWhite } from '@/data/ImageLinks';

export const projects : Project[] = [
    {
    title: 'TCP-IP Java Model',
    description: 'A simple Java model showing how TCP and other basic protocls work with features such as error detection and retransmission',
    thumbnail: githubMarkWhite,
    tags: ['Java', 'Swing'],
    github: 'https://github.com/radekzien/TCP-IP-Java-Model'
}
]