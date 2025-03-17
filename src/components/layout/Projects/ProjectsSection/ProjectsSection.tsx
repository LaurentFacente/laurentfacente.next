import { ProjectCard } from "../ProjectCard/ProjectCard";

export const ProjectsSection = () => {
	const projects = [
		{
			title: "E-Commerce Dashboard",
			tech: "NextJS, TypeScript, TailwindCSS",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas justo at augue fringilla, vel tincidunt eros scelerisque.",
		},
		{
			title: "Social Media App",
			tech: "React, Firebase, TailwindCSS",
			description:
				"Praesent sodales, libero eget ultricies tincidunt, justo ligula convallis justo, eget sollicitudin nisl tellus at ligula.",
		},
		{
			title: "Weather Application",
			tech: "NextJS, TypeScript, API Integration",
			description:
				"Maecenas gravida fringilla nunc. Cras at magna eget nibh finibus faucibus. Nullam ut blandit orci.",
		},
		{
			title: "Portfolio Website",
			tech: "NextJS, TypeScript, TailwindCSS",
			description:
				"Fusce eget nisi at erat fermentum interdum. Donec sagittis velit sed magna ultricies, non bibendum neque venenatis.",
		},
	];

	return (
		<section className='space-y-6'>
			<h2 className='text-3xl font-bold border-b pb-2'>Projects</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				{projects.map((project, index) => (
					<ProjectCard
						key={index}
						title={project.title}
						tech={project.tech}
						description={project.description}
					/>
				))}
			</div>
		</section>
	);
};
