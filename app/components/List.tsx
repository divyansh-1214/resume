function List({ items }: { items: string[] }) {
	return (
		<ul className='list-disc text-[12px] leading-[12px] pl-3 space-y-1 list-inside'>
			{items.map((item, index) => (
				<li key={index}>
					<p className='inline'>{item}</p>
				</li>
			))}
		</ul>
	);
}
export default List;
