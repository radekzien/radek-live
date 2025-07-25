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
                    className="p-1 font-bold text-lg italic"
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
                        Hey, I'm Radek. I'm an aspiring developer hailing from the West Midlands.<br />
                        Currently I am in my Final year of BSc Computer Science in the University of Liverpool. <br/> 
                        <br />
                        Have a look through my page to learn more about me and my work.<br />
                    </p>
                </div>
            </FadeInSection>
        </div>
    )
}