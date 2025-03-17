import { DispoButton } from "@/components/layout/HeroSection/DispoButton";
import { Button } from "@/components/ui/button";
import { FileCode2, Mail } from "lucide-react";
import Image from "next/image";

export const HeroSection = () => {
	return (
		<section className='flex flex-col md:flex-row gap-8 items-center'>
			<div className='flex-1 space-y-8'>
				<DispoButton />
				<h1 className='text-6xl font-bold'>Laurent Facente</h1>
				<p className='text-lg text-muted-foreground'>
					Front End Web Developer, specializing in Next.js/React and TypeScript
				</p>
				<div className='flex gap-3 pt-4'>
					<Button>
						<Mail className='mr-2' size={18} />
						Contact
					</Button>
					<Button variant='outline'>
						<FileCode2 className='mr-2' size={18} />
						View Resume
					</Button>
				</div>
			</div>

			<div className='flex-shrink-0 w-64 h-64 rounded-full bg-muted flex items-center justify-center border-4 border-primary overflow-hidden'>
				<Image
					className='w-full h-full object-cover rounded-full'
					width={240}
					height={240}
					alt='Laurent'
					src='/laurent.jpg'
				/>
			</div>
		</section>
	);
};
