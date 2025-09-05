import Header from './components/Header';
import Summary from './components/Summary';
import Education from './components/Education';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import ProfessionalExperience from './components/ProfessionalExperience';
import resume from './components/resume.json';

export default function Home() {
	return (
		<div className='bg-white min-h-screen p-20'>
			{/* A4 paper-like container */}
			<div className='mx-auto shadow-[0_0_20px_#00000050] rounded-lg p-7 h-[297mm] w-[210mm] resume'>
				<div className='flex flex-col'>
					<Header {...resume.header} />

					{/* Divider line */}
					<div className='w-full h-px bg-black'></div>

					<Summary summary={resume.summary} />

					{/* Divider line */}
					<div className='w-full h-px bg-black'></div>

					<Education education={resume.education} />

					{/* Divider line */}
					<div className='w-full h-px bg-black'></div>

					<TechnicalSkills skills={resume.skills} />

					{/* Divider line */}
					<div className='w-full h-px bg-black'></div>

					<Projects projects={resume.projects.slice(0, 3)} />

					{/* Divider line */}
					<div className='w-full h-px bg-black'></div>

					<ProfessionalExperience workExperience={resume.workExperience} />
				</div>
			</div>
		</div>
	);
}
