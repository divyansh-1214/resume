import List from './List';

export default function Education({
	education,
}: {
	education: {
		degree: string;
		institution: string;
		startDate: string;
		endDate: string;
		major?: string;
		minor?: string;
		location?: string;
		details?: string[];
	}[];
}) {
	return (
		<section className='mb-3'>
			<h2>EDUCATION</h2>

			<div className='space-y-1'>
				{education.map((edu, index) => (
					<div key={index}>
						{/* Institution and Date */}
						<div className='flex justify-between items-center'>
							<h3>{edu.institution}</h3>
							<span className='text-[13px] italic'>
								{edu.startDate}&nbsp;-&nbsp;{edu.endDate}
							</span>
						</div>

						{/* Major and Location */}
						<div className='flex justify-between items-center italic'>
							<p>
								{edu.degree}&nbsp;{edu.major && <>in {edu.major}</>}&nbsp;
								{edu.minor && <>with {edu.minor}</>}
							</p>
							<p>{edu.location}</p>
						</div>

						{/* Details */}
						{edu.details && (
							<div className='mt-1'>
								<List items={edu.details} />
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	);
}
