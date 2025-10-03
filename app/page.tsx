import Header from "./components/Header";
import Summary from "./components/Summary";
import Education from "./components/Education";
import TechnicalSkills from "./components/TechnicalSkills";
import Projects from "./components/Projects";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Resume from "./components/Resume";
import { Divider } from "./components/Divider";

export default function Home() {
  return (
    <div className="h-max p-20">
      {/* A4 paper-like container */}
      <div className="mx-auto shadow-[0_0_30px_var(--glow)] rounded-lg p-7 h-[297mm] w-[210mm] resume">
        <div className="flex flex-col">
          <Header header={Resume.header} />

          {/* Divider line */}
          <Divider />

          <Summary summary={Resume.summary} />

          {/* Divider line */}
          <Divider />

          <Education education={Resume.education} />

          {/* Divider line */}
          <Divider />

          <TechnicalSkills skills={Resume.skills} />

          {/* Divider line */}
          <Divider />

          <Projects projects={Resume.projects.slice(0, 3)} />

          {/* Divider line */}
          <Divider />

          <ProfessionalExperience workExperience={Resume.workExperience} />
        </div>
      </div>
    </div>
  );
}
