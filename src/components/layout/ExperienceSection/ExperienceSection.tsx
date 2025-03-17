import React from "react";

interface ExperienceSectionProps {
	experiences?: Experience[];
}

interface Experience {
	title: string;
	company: string;
	period: string;
	responsibilities: string[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
	experiences = defaultExperiences,
}) => {
	return (
		<section className='space-y-6'>
			<h2 className='text-3xl font-bold border-b pb-2'>Experience</h2>
			<div className='space-y-8'>
				{experiences.map((exp, index) => (
					<div key={index} className='flex flex-col md:flex-row gap-4'>
						<div className='md:w-1/3'>
							<h3 className='text-xl font-bold'>{exp.title}</h3>
							<p className='text-primary font-medium'>{exp.company}</p>
							<p className='text-sm text-muted-foreground'>{exp.period}</p>
						</div>
						<div className='md:w-2/3'>
							<ul className='list-disc pl-5 space-y-2'>
								{exp.responsibilities.map((item, idx) => (
									<li key={idx}>{item}</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

const defaultExperiences: Experience[] = [
	{
		title: "Senior Frontend Developer",
		company: "Tech Company Inc.",
		period: "Jan 2022 - Present",
		responsibilities: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			"Nullam egestas justo at augue fringilla, vel tincidunt eros scelerisque.",
			"Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
			"Praesent sodales, libero eget ultricies tincidunt, justo ligula convallis justo.",
		],
	},
	{
		title: "Frontend Developer",
		company: "Digital Agency XYZ",
		period: "Mar 2019 - Dec 2021",
		responsibilities: [
			"Maecenas gravida fringilla nunc. Cras at magna eget nibh finibus faucibus.",
			"Nullam ut blandit orci. Fusce eget nisi at erat fermentum interdum.",
			"Donec sagittis velit sed magna ultricies, non bibendum neque venenatis.",
			"Etiam convallis, nisi eget elementum aliquam, est est vestibulum arcu.",
		],
	},
];

export default ExperienceSection;
