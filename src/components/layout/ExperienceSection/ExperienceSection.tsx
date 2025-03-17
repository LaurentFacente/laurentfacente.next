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
		title: "React Frontend Developer",
		company: "Squad (For CMA-CGM)",
		period: "Mar 2023 - Jun 2025",
		responsibilities: [
			"Develop, and enhance user experiences through Front-End development using React and TypeScript.",
			"Collaborate closely with designers to transform concepts into interactive interfaces, utilizing technologies such as Material UI for a modern and intuitive aesthetic.",
			"Implement best practices in cybersecurity to ensure secure interfaces, protecting against potential threats.",
			"Apply DevOps practices to enable smooth deployments and streamlined management through CI/CD pipelines, ensuring continuous delivery.",
		],
	},
	{
		title: "Frontend Developer",
		company: "Axome",
		period: "Jun 2022 - Oct 2022",
		responsibilities: [
			"Design and development of e-commerce user interfaces.",
			"Using Prestashop and Shopify technologies to implement online sales solutions.",
			"Working closely with designers and back-end developers.",
			"Implementing the user interface and integrating content.",
			"Conducting user testing and ensuring the maintenance of developed websites and applications.",
		],
	},
];

export default ExperienceSection;
