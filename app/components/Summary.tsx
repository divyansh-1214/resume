export default function Summary({ summary }: { summary: string }) {
	return (
		<section>
			<h2>SUMMARY</h2>
			<p style={{ lineHeight: '13px' }}>{summary}</p>
		</section>
	);
}
