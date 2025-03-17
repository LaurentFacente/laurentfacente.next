export const SkillsCard = () => {
	const skills = [
		"NextJS",
		"React",
		"TypeScript",
		"TailwindCSS",
		"JavaScript",
		"HTML/CSS",
		"Git",
		"UI/UX",
	];

	return (
		<div className='space-y-4'>
			<h3 className='text-xl font-semibold'>Skills</h3>
			<div className='flex flex-wrap gap-2'>
				{skills.map((skill, index) => (
					<span
						key={index}
						className='bg-primary/10 text-primary px-3 py-1 rounded-full text-sm'
					>
						{skill}
					</span>
				))}
			</div>
		</div>
	);
};
