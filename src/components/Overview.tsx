import { Links } from "./Links";
import { FadeInSection } from "./ui/FadeInSection";

const lines = [
  "Creative.",
  "Tech Enthusiast.",
  "Critical Thinker.",
  "Network Enthusiast.",
  "Aspiring Developer."
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
                        Hey, I&apos;m Radek. I&apos;m an aspiring developer hailing from the West Midlands.<br />
                        Currently I am in my Final year of BSc Computer Science in the University of Liverpool.<br /> 
                        I&apos;ve spent 4 years working in Hospitality for companies like Greggs and TGI Friday&apos;s<br />
                        and I&apos;ve been a tour guide in Birmingham for over a year.<br />
                        <br />
                        My interests include Full-Stack Web Development, Cyber Security, and Networks and I am actively exploring <br />
                        different ways to gain skills and experience in all of those areas.<br />
                        <br />
                        In my free time I enjoy listening to and making music, DJing and staying active.<br />
                        <br />
                        Have a look through my page to learn more about me and my work.<br />
                        If you wish to find out more, feel free to contact me by filling out the form at the bottom of this page<br />
                    </p>
                </div>
            </FadeInSection>
        </div>
    )
}