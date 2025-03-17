import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { SkillsCard } from "../SkillsCard/SkillsCard";

export const AboutSection = () => {
	return (
		<section className='space-y-6'>
			<h2 className='text-3xl font-bold border-b pb-2'>About Me</h2>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
				<div className='md:col-span-2 space-y-4'>
					<p>
						Web developer based in Marseille, specialized in React, TypeScript,
						and Next.js.
					</p>
					<p>
						Passionate about front-end development, I am dedicated to designing
						intuitive, accessible, and optimized interfaces. I enjoy tackling
						technical challenges, exploring best practices, and contributing to
						innovative projects.
					</p>
					<p>Need a React/Next.js expert for your project? Lets talk!</p>

					<div className='flex gap-3 pt-2'>
						<Button variant='ghost' size='icon'>
							<Github size={20} />
						</Button>
						<Button variant='ghost' size='icon'>
							<Linkedin size={20} />
						</Button>
						<Button variant='ghost' size='icon'>
							<Mail size={20} />
						</Button>
					</div>
				</div>
				<SkillsCard />
			</div>
		</section>
	);
};
