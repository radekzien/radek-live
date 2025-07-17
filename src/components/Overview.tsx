const lines = [
  "Creative.",
  "Tech Enthusiast.",
  "Critical Thinker.",
  "Network Enthusiast.",
  "Aspiring Developer."
];

export const Overview = () => {
    return(
        <div >
            <h1 id="myName" className="p-4 text-4xl font-bold fadeIn opacity-0"
            style={ {animationDelay: `3s`, animationFillMode: 'forwards'} }>
                Radoslaw Zienkiewicz
            </h1>
            <div>
                {lines.map((line, i) => (
                <p
                    key={i}
                    className="opacity-0 p-1 fadeIn font-bold text-lg italic"
                    style={{ animationDelay: `${i * 0.5}s`, animationFillMode: 'forwards', marginLeft: `${(i * 12) + i * i * 2}px` }}
                >
                    {line}
                </p>
                ))}
            </div>

            <div id = 'myDetails' className="mt-4">
                <p>
                    Hey, I'm Radek. I'm an aspiring developer hailing from the West Midlands.<br />
                    Currently I am in my Final year of BSc Computer Science in the University of Liverpool. <br/> 
                    <br />
                    Have a look through my page to learn more about me and my work.<br />
                </p>
            </div>
        </div>
    )
}