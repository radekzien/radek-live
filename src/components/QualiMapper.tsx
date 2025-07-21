import { qualifications } from "@/data/qualifications";
import { FadeInSection } from "./ui/FadeInSection";

export const QualiMapper = () => {
  const sortedQualis = [...qualifications].sort(
    (a, b) => {
    const dateA = a.started.getTime()
    const dateB = b.started.getTime()
    return dateB - dateA; 
  });

  return (
    <>
      {sortedQualis.map((qualification) => {
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
          <FadeInSection key={qualification.title}>
            <div className="p-4 border rounded shadow mb-4">
                <h3 className="text-lg font-bold">{qualification.title}</h3>
                <h2 className="text-md italic">{qualification.school}</h2>
                <h1 className="text-sm italic">{qualification.location}</h1>
                <p className="text-sm">{dateText}</p>
                <p className="pt-2">{qualification.info}</p>
            </div>
          </FadeInSection>
        );
      })}
    </>
  );
};