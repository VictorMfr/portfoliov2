import { projects } from "@/constants/constants";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; project: string }>;
}) {
  const { locale, project: projectSlug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Projects");
  const projectData = projects.find((project) => project.url === projectSlug);

  return (
    <section className="flex flex-col gap-4 max-w-[720px] mx-auto text-white">
      <Image src={projectData?.image || ""} alt={projectData?.title || ""} width={720} height={500} />
      <div className="flex gap-2">
        <a className="w-fit" href="https://github.com/victor-garcia-dev" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-8 h-8" />
        </a>
        <a className="w-fit" href="https://github.com/victor-garcia-dev" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-8 h-8" />
        </a>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{projectData?.title}</h1>
        <p className="font-extralight text-white/50">{projectData?.date}</p>
      </div>
      <p className="leading-8">{projectData?.description}</p>
      <div className="flex gap-2">
        <h3 className="text-lg font-bold">{t("technologies")}</h3>
        {projectData?.technologies.map((technology) => (
          <div key={technology} className="border border-white/20 px-2 py-1 rounded-full">
            <p className="text-sm font-light">{technology}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

