import { Links } from "./Links";
import { FadeInSection } from "./ui/FadeInSection";

const lines = [
  "Graduate Tech Developer",
  "Tech Enthusiast.",
  "Critical Thinker.",
];

const delayTime = lines.length * 0.3;

export const Overview = () => {
    return(
        <div>
            <FadeInSection>
                <h1 id="myName" className="mb-4 text-4xl font-bold">
                    Radoslaw Zienkiewicz
                </h1>
                <Links />
            </FadeInSection>
            <div className="mt-4">
                {lines.map((line, i) => (
                <FadeInSection key={i} delay={i * 0.3}>
                    <p
                        className="block md:hidden p-1 font-bold italic text-lg"
                        style={{ marginLeft: `${(i * 12) + i * i * 2}px` }}
                    >
                        {line}
                    </p>

                    <p
                        className="hidden md:block p-1 font-bold italic text-3xl"
                        style={{ marginLeft: `${(i * 12) + i * i * 2}px` }}
                    >
                        {line}
                    </p>
            </FadeInSection>
                ))}
            </div>

            <FadeInSection delay={delayTime}>
                <div id = 'myDetails' className="mt-6 text-lg text-center leading-relaxed">
                    <p> 
                        My name is Radek. I'm a software developer from the West Midlands. I graduated from the University of Liverpool <br/>
                        with a First Class BSc Computer Science with Honours. <br />
                        <br />
                        Before development I spent 4 years working in hospitality for companies like Greggs and TGI Friday's and over 2 <br/>
                        years as a tour guide. <br />
                        <br />
                        I love music and everything music related. In my free time I produce, mix, compose, and play the piano. My Honours Year <br />
                        Project was a desktop application which detected the key of a piece of music, a perfect blend of my passion for music and love for <br />
                        coding.
                        <br/>
                        Have a look through my page to learn more about me and my work.<br />
                        If you wish to find out more, feel free to contact me by filling out the form at the bottom of this page.<br/>
                    </p>
                </div>
            </FadeInSection>
        </div>
    )
}