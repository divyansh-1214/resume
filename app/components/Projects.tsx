import List from './List';

export default function Projects({
	projects,
}: {
	projects: {
		title: string;
		techStack: string;
		points: string[];
		ongoing: boolean;
	}[];
}) {
	return (
		<section>
			<h2>PROJECTS</h2>

			<div className='space-y-4'>
				{projects.map((project, index) => (
					<Project
						key={index}
						title={project.title}
						techStack={project.techStack}
						points={project.points}
						onGoing={project.ongoing}
					/>
				))}
			</div>
		</section>
	);
}

function Project({
	title,
	techStack,
	points,
	onGoing = false,
}: {
	title: string;
	techStack: string;
	points: string[];
	onGoing?: boolean;
}) {
	return (
		<>
			<div>
				<div className='mb-0.5'>
					<h3 className='font-medium'>
						<span>{title}</span>
						{onGoing && <span className='italic'>&nbsp;(On Going)</span>}
					</h3>
				</div>

				<div className='mb-1'>
					<p>
						<span>Tech Stack: </span>
						<span className='font-times italic'>{techStack}</span>
					</p>
				</div>

				<List items={points} />
			</div>
		</>
	);
}
