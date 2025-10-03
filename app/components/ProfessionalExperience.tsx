import List from "./List";

export default function ProfessionalExperience({
  workExperience,
}: {
  workExperience: {
    jobTitle: string;
    company: string;
    location: string;
    description?: string;
    startDate: string;
    endDate: string;
    responsibilities?: string[];
    link?: string;
  }[];
}) {
  return (
    <section>
      <h2>PROFESSIONAL EXPERIENCE</h2>

      <div className="space-y-3">
        {workExperience.map((work, index) => (
          <WorkExperience
            key={index}
            jobTitle={work.jobTitle}
            company={work.company}
            description={work.description}
            location={work.location}
            startDate={work.startDate}
            endDate={work.endDate}
            responsibilities={work.responsibilities}
            link={work.link}
          />
        ))}
      </div>
    </section>
  );
}

function WorkExperience({
  link,
  jobTitle,
  company,
  description,
  location,
  startDate,
  endDate,
  responsibilities,
}: {
  jobTitle: string;
  company: string;
  location: string;
  description?: string;
  startDate: string;
  endDate: string;
  responsibilities?: string[];
  link?: string;
}) {
  return (
    <>
      <a className="flex flex-col" href={link}>
        <div className="flex justify-between items-center mb-0.5">
          <h3>{company}</h3>
          <span className="text-[13px] italic">
            {startDate}&nbsp;-&nbsp;{endDate}
          </span>
        </div>

        <div className="flex justify-between items-center mb-1 italic">
          <p>{jobTitle}</p>
          <p>{location}</p>
        </div>
        {description && (
          <div className="mb-1">
            <p>{description}</p>
          </div>
        )}
        {responsibilities && <List items={responsibilities} />}
      </a>
    </>
  );
}
