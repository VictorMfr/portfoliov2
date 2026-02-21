import MainSection from "@/components/Landing/MainSection/MainSection";
import AboutSection from "@/components/Landing/AboutSection/AboutSection";
import ProjectsSection from "@/components/Landing/ProjectsSection/ProjectsSection";
import Services from "@/components/Landing/Services/Services";
import Technologies from "@/components/Landing/Technologies/Technologies";
import Certificates from "@/components/Landing/Certificates/Certificates";

export default function HomePage() {
  return (
    <>
      <svg viewBox="0 0 784 1059" fill="none" className="absolute top-0 left-0 w-auto">
        <path d="M0 778.674V0H784V822.542C776.833 887.432 682.528 678.387 628.5 897.942C572.5 1125.51 474 1099.47 345 897.942C199.03 669.909 0 1180.35 0 778.674Z" fill="#01111F" />
      </svg>

      <div className="relative z-10 flex flex-col gap-32">
        <MainSection />
        <AboutSection />
        <ProjectsSection />
        <Services />
        <Technologies />
        <Certificates />
      </div>

      <svg viewBox="0 0 784 636" fill="none" className="absolute bottom-0 right-0">
        <path d="M0 168.355V636H784V142.008C776.833 103.038 682.528 228.583 628.5 96.726C572.5 -39.9451 474 -24.302 345 96.726C199.03 233.675 0 -72.8778 0 168.355Z" fill="#33FF6005" />
      </svg>
    </>
  );
}

