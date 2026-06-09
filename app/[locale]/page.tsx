import MainSection from "@/components/Landing/MainSection/MainSection";
import AboutSection from "@/components/Landing/AboutSection/AboutSection";
import ProjectsSection from "@/components/Landing/ProjectsSection/ProjectsSection";
import Services from "@/components/Landing/Services/Services";
import Technologies from "@/components/Landing/Technologies/Technologies";
import Certificates from "@/components/Landing/Certificates/Certificates";

export default function HomePage() {
  return (
    <div className="relative z-10 flex flex-col">
      <MainSection />
      <AboutSection />
      <ProjectsSection />
      <Services />
      <Technologies />
      <Certificates />
    </div>
  );
}

