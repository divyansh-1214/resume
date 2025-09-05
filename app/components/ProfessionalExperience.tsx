import List from './List';

export default function ProfessionalExperience({
	workExperience,
}: {
	workExperience: {
		jobTitle: string;
		company: string;
		location: string;
		startDate: string;
		endDate: string;
		responsibilities: string[];
	}[];
}) {
	return (
		<section>
			<h2>PROFESSIONAL EXPERIENCE</h2>

			<div className='space-y-3'>
				{workExperience.map((work, index) => (
					<WorkExperience
						key={index}
						jobTitle={work.jobTitle}
						company={work.company}
						location={work.location}
						startDate={work.startDate}
						endDate={work.endDate}
						responsibilities={work.responsibilities}
					/>
				))}
			</div>
		</section>
	);
}

function WorkExperience({
	jobTitle,
	company,
	location,
	startDate,
	endDate,
	responsibilities,
}: {
	jobTitle: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	responsibilities: string[];
}) {
	return (
		<>
			<div>
				<div className='flex justify-between items-center mb-1'>
					<h3>{company}</h3>
					<span className='text-[13px] italic'>
						{startDate}&nbsp;-&nbsp;{endDate}
					</span>
				</div>

				<div className='flex justify-between items-center mb-1 italic'>
					<p>{jobTitle}</p>
					<p>{location}</p>
				</div>
				<List items={responsibilities} />
			</div>
		</>
	);
}
