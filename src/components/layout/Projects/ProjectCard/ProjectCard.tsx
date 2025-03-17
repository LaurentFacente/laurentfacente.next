import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
	title: string;
	tech: string;
	description: string;
}

export const ProjectCard = ({ title, tech, description }: ProjectCardProps) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{tech}</CardDescription>
			</CardHeader>
			<CardContent>
				<div className='aspect-video bg-muted rounded-md flex items-center justify-center mb-4'>
					<span className='text-muted-foreground'>Project Screenshot</span>
				</div>
				<p className='text-sm'>{description}</p>
			</CardContent>
			<CardFooter className='flex justify-between'>
				<Button variant='outline' size='sm'>
					<Github size={16} className='mr-2' />
					Code
				</Button>
				<Button size='sm'>
					<ExternalLink size={16} className='mr-2' />
					Demo
				</Button>
			</CardFooter>
		</Card>
	);
};
