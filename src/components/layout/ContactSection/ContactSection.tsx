import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

interface ContactSectionProps {
	email?: string;
	github?: string;
	linkedin?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
	email = "email@example.com",
	github = "github.com/username",
	linkedin = "linkedin.com/in/username",
}) => {
	return (
		<section className='space-y-6'>
			<h2 className='text-3xl font-bold border-b pb-2'>Contact Me</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				<div className='space-y-4'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
						egestas justo at augue fringilla, vel tincidunt eros scelerisque.
						Interested in working together? Feel free to reach out!
					</p>
					<div className='space-y-3'>
						<div className='flex items-center gap-3'>
							<Mail className='text-primary' size={20} />
							<span>{email}</span>
						</div>
						<div className='flex items-center gap-3'>
							<Github className='text-primary' size={20} />
							<span>{github}</span>
						</div>
						<div className='flex items-center gap-3'>
							<Linkedin className='text-primary' size={20} />
							<span>{linkedin}</span>
						</div>
					</div>
				</div>
				<Card>
					<CardHeader>
						<CardTitle>Send a Message</CardTitle>
						<CardDescription>
							Fill out the form below and Ill get back to you soon.
						</CardDescription>
					</CardHeader>
					<CardContent className='space-y-4'>
						<div className='grid grid-cols-2 gap-4'>
							<div className='space-y-2'>
								<label htmlFor='name' className='text-sm font-medium'>
									Name
								</label>
								<input
									id='name'
									className='border-input flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
								/>
							</div>
							<div className='space-y-2'>
								<label htmlFor='email' className='text-sm font-medium'>
									Email
								</label>
								<input
									id='email'
									type='email'
									className='border-input flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
								/>
							</div>
						</div>
						<div className='space-y-2'>
							<label htmlFor='subject' className='text-sm font-medium'>
								Subject
							</label>
							<input
								id='subject'
								className='border-input flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
							/>
						</div>
						<div className='space-y-2'>
							<label htmlFor='message' className='text-sm font-medium'>
								Message
							</label>
							<textarea
								id='message'
								rows={4}
								className='border-input min-h-24 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
							></textarea>
						</div>
					</CardContent>
					<CardFooter>
						<Button className='w-full'>Send Message</Button>
					</CardFooter>
				</Card>
			</div>
		</section>
	);
};

export default ContactSection;
