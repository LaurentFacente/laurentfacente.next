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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
						egestas justo at augue fringilla, vel tincidunt eros scelerisque.
						Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci
						luctus et ultrices posuere cubilia curae.
					</p>
					<p>
						Praesent sodales, libero eget ultricies tincidunt, justo ligula
						convallis justo, eget sollicitudin nisl tellus at ligula. Maecenas
						gravida fringilla nunc. Cras at magna eget nibh finibus faucibus.
						Nullam ut blandit orci. Fusce eget nisi at erat fermentum interdum.
					</p>
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
