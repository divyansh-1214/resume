import List from './List';

export default function TechnicalSkills({ skills }: { skills: string[] }) {
	return (
		<section>
			<h2>TECHNICAL SKILLS, INTERESTS</h2>

			<List items={skills} />
		</section>
	);
}
