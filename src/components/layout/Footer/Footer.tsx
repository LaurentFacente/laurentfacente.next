export function Footer() {
	const techStack = ["Next.js", "React", "TypeScript", "Tailwind CSS"];

	return (
		<footer className='border-t pt-8 pb-4 mt-16 text-center text-sm text-muted-foreground'>
			<p>© {new Date().getFullYear()} Facente Laurent. All rights reserved.</p>
			<p className='mt-1'>Built with {techStack.join(", ")}</p>
		</footer>
	);
}
