import { AboutSection } from "@/components/layout/AboutSection/AboutSection";
import ContactSection from "@/components/layout/ContactSection/ContactSection";
import ExperienceSection from "@/components/layout/ExperienceSection/ExperienceSection";
import { HeroSection } from "@/components/layout/HeroSection/HeroSection";
import { ProjectsSection } from "@/components/layout/Projects/ProjectsSection/ProjectsSection";

export default function Page() {
	return (
		<div className='mx-auto max-w-5xl w-full px-4 sm:px-6 lg:px-8 py-8 space-y-16'>
			<HeroSection />
			<AboutSection />
			<ProjectsSection />
			<ExperienceSection />
			<ContactSection />
		</div>
	);
}
