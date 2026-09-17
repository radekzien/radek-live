import { Project } from "@/types/Project";
import { tcpIp, weblogo, trebleclef, friendlylogo } from '@/data/ImageLinks';

export const projects : Project[] = [
    {
        title: 'TCP-IP Java Model',
        description: 'A simple Java model showing how TCP and other basic protocols work with features such as error detection and retransmission.',
        thumbnail: tcpIp,
        tags: ['java', 'swing'],
        github: 'https://github.com/radekzien/TCP-IP-Java-Model'
    },
    {
        title: "This Portfolio Website",
        description: "Here is the github link to the repository for this website.",
        thumbnail: weblogo,
        tags:['typescript', 'react', 'frontend', 'backend'],
        github: 'https://github.com/radekzien/radek-live'
    },
    {
        title: "Musical Key Detector",
        description: "This is program detects the key of an audio file using a self-implemented version of the Fast Fourier Transform." ,
        thumbnail: trebleclef,
        tags: ['python'],
        github: 'https://github.com/radekzien/key-analyser'
    },
    {
        title: "Friendly Transport Ltd.",
        description: "The main website for Friendly Transport Ltd. Developed using typescript and react.",
        thumbnail: friendlylogo,
        tags: ['typescript', 'react', 'frontend'],
        link: 'https://www.friendly-transport.co.uk/'

    }

]