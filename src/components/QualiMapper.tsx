import { qualifications } from "@/data/qualifications";
import { FadeInSection } from "./ui/FadeInSection";
import { Link } from "lucide-react";
import { QualiFadeInSection } from "./ui/QualiFadeIn";

export const QualiMapper = () => {
  //Sorting by newest
  const sortedQualis = [...qualifications].sort(
    (a, b) => {
    const dateA = a.started.getTime()
    const dateB = b.started.getTime()
    return dateB - dateA; 
  });

  return (
    <>
  <div className="relative max-w-5xl mx-auto px-4 py-10 overflow-x: visible;">

  <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-600 transform -translate-x-1/2" />
      {sortedQualis.map((qualification, index) => {
        const isLeft = index % 2 === 0;
        const startYear = qualification.started.toLocaleDateString('en-GB', {
            year: 'numeric',
            month: 'short',
            });

        let dateText: string;
        if (qualification.status === 'Complete') {
          if (qualification.finished) {
            const finishYear = qualification.finished.toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'short',
                });
            dateText = `${startYear} - ${finishYear}`;
          } else {
            dateText = `${startYear}`;
          }
        } else {
          dateText = `${startYear}` + ' - Present';
        }

 return (
    <QualiFadeInSection key={qualification.title} fromLeft={isLeft} delay={index * 0.1}>
      <div className="relative h-auto mb-8  hover:scale-110 transition duration-300" style={{ minHeight: '120px' }}>
        
        {/* Dot */}
    <div
      className="absolute top-1/2 left-1/2 w-10 h-10 rounded-full bg-[#383535] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
    >
      <img src={qualification.thumbnail} alt="Qualification" className="w-6 h-6 object-contain" />
    </div>

        {/* Card */}
        <div
          className={`absolute w-96 max-w-[30rem] p-6 rounded-lg shadow bg-[#383535] flex flex-col
            ${isLeft ? 'left-0 ml-8' : 'right-0 mr-8'}`}
        >
          <h3 className="text-lg font-bold">{qualification.title}</h3>
          <h2 className="text-md italic">{qualification.school}</h2>
          <h1 className="text-sm italic">{qualification.location}</h1>
          <p className="text-sm">{dateText}</p>
          <p className="text-sm font-bold">{qualification.status}</p>
          <p className="pt-2">{qualification.info}</p>
          {qualification.link && (
            <a
              href={qualification.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-300"
            >
              View Certificate
            </a>
          )}
        </div>
      </div>
    </QualiFadeInSection>
          );
        })}
      </div>
    </>
  );
};