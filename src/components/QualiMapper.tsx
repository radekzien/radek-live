import { qualifications } from "@/data/qualifications";
import { FadeInSection } from "./ui/FadeInSection";

export const QualiMapper = () => {
  return (
    <>
      {qualifications.map((qualification) => {
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
                <h3>{qualification.title}</h3>
                <h2>{qualification.school}</h2>
                <h1>{qualification.location}</h1>
                <p>{dateText}</p>
            </div>
          </FadeInSection>
        );
      })}
    </>
  );
};