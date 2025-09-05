export default function Header({
	name,
	title,
	mail,
	phone,
	links,
	location,
}: {
	name: string;
	title: string;
	mail: string;
	phone: string;
	links: { url: string; label: string }[];
	location: { url: string; label: string };
}) {
	return (
		<header>
			{/* Name */}
			<div className='text-center'>
				<h1 className='font-times text-[32px] font-normal leading-[32px] text-black mb-1'>
					{name}
				</h1>
			</div>

			{/* Title */}
			<div className='text-center mb-1'>
				<p className='font-times text-[14px] font-normal leading-[14px] text-black'>
					{title}
				</p>
			</div>

			{/* Contact Info - Line 1 */}
			<div className='text-center mb-1'>
				<p className='font-times text-[12px] font-normal leading-[12px]'>
					<a
						href={`mailto:${mail}`}
						className='text-[#002060]'
						target='_blank'
					>
						{mail}
					</a>
					<span className='text-black'> | </span>
					<a
						href={`https://wa.me/+91${phone}`}
						className='text-[#002060]'
						target='_blank'
					>
						+91-{phone}
					</a>
					<span className='text-black'> | </span>
					<a
						href={location.url}
						className='text-black'
						target='_blank'
					>
						{location.label}
					</a>
				</p>
			</div>

			{/* Contact Info - Line 2 */}
			<div className='text-center'>
				<p>
					{links.map((link, index, arr) => (
						<span key={index}>
							{index > 0 && index < arr.length && (
								<span className='text-black'> | </span>
							)}
							<a
								href={link.url}
								className='text-[#002060]'
								target='_blank'
							>
								{link.label}
							</a>
						</span>
					))}
				</p>
			</div>
		</header>
	);
}
