import { Qualification } from "@/types/Qualification";
import { bwlogo, courseralogo, uollogo } from "./ImageLinks";

export const qualifications : Qualification[] = [
    {
        title: "A-Levels",
        school: "Bishop Walsh Catholic Sixth Form",
        status: "Complete",
        location: "Birmingham",
        started: new Date("2021-09-01"),
        finished: new Date("2023-05-30"),
        info: "A-Levels in Computer Science, Business Studies, and Music",
        thumbnail: bwlogo
    },
    {
        title: "BSC Computer Science",
        school: "University of Liverpool",
        status: "Ongoing",
        location: "Liverpool",
        started: new Date("2023-09-30"),
        thumbnail: uollogo
    },
    {
        title: "Google Cyber Security Cerftificate",
        school: "Coursera",
        status: "Complete",
        started: new Date("2025-07-21"),
        info: "You can see my certificate here: ",
        link: "/pdfs/Coursera19QMPQMLRQXW.pdf",
        thumbnail: courseralogo
    }
]