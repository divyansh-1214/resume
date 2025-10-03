import List from "./List";

export default function Projects({
  projects,
}: {
  projects: {
    title: string;
    description?: string;
    techStack: string;
    points: string[];
    ongoing: boolean;
    links?: {
      url: string;
      label: string;
    }[];
  }[];
}) {
  return (
    <section>
      <h2>PROJECTS</h2>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            techStack={project.techStack}
            description={project.description}
            points={project.points}
            ongoing={project.ongoing}
            links={project.links}
          />
        ))}
      </div>
    </section>
  );
}

function Project({
  title,
  techStack,
  description,
  points,
  links,
  ongoing,
}: {
  title: string;
  description?: string;
  techStack: string;
  points: string[];
  ongoing: boolean;
  links?: {
    url: string;
    label: string;
  }[];
}) {
  return (
    <>
      <div>
        <div className="mb-0.5 flex justify-between items-center">
          <h3 className="font-medium">
            <span>{title}</span>
            {ongoing && <span className="italic">&nbsp;(On Going)</span>}
          </h3>
          {links && (
            <>
              <span className="text-[13px]">
                {links.map((l, index, arr) => (
                  <span key={index}>
                    <a
                      href={l.url}
                      className="text-blue-950 dark:text-blue-500"
                      target="_blank"
                    >
                      {l.label}
                    </a>
                    {index < arr.length - 1 && <span>&nbsp;|&nbsp;</span>}
                  </span>
                ))}
              </span>
            </>
          )}
        </div>

        {techStack && (
          <div className="mb-1">
            <p>
              <span>Tech Stack: </span>
              <span className="font-times italic">{techStack}</span>
            </p>
          </div>
        )}

        {description && (
          <div className="mb-1">
            <p>
              <span className="font-times">{description}</span>
            </p>
          </div>
        )}

        <List items={points} />
      </div>
    </>
  );
}
