import { Project } from "@/types/Project";
import { tcpIp, weblogo, jslogo, weatherlogo } from '@/data/ImageLinks';

export const projects : Project[] = [
    {
        title: 'TCP-IP Java Model',
        description: 'A simple Java model showing how TCP and other basic protocls work with features such as error detection and retransmission.',
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
        title: "Concurrent Call Counter",
        description: "This is a program that counts the amount of calls that occured concurrently based on data fetched from an API.",
        thumbnail: jslogo,
        tags: ['javascript', 'backend'],
        github: 'https://github.com/radekzien/Concurrent-Call-Counter'
    },
    {
        title: "Auto Weather Updates",
        description: "A script that fetches emails and locations and weather data from a database and an API to send to users.",
        thumbnail: weatherlogo,
        tags: ['python', 'backend', 'sql'],
        github: 'https://github.com/radekzien/weather-automation',
        link: '/weather-demo'
    }

]