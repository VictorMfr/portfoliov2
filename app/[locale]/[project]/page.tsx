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

  const title = projectData ? (typeof projectData.title === 'string' ? projectData.title : (projectData.title[locale as 'es' | 'en'] || '')) : '';
  const description = projectData ? (typeof projectData.description === 'string' ? projectData.description : (projectData.description[locale as 'es' | 'en'] || '')) : '';

  return (
    <article className="max-w-[720px] mx-auto px-4 antialiased py-[92px]">
      {/* Header del Blog */}
      <header className="mb-8 space-y-4">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {title}
        </h1>

        <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            {projectData?.date}
          </p>

          {/* Social Links (Rediseñados más sutiles) */}
          <div className="flex gap-3 text-slate-600 dark:text-slate-400">
            <a
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
              href="https://github.com/victor-garcia-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
              href="https://github.com/victor-garcia-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Imagen Destacada (Featured Image) */}
      {projectData?.image && (
        <div className="mb-8 overflow-hidden rounded-xl bg-slate-100 dark:bg-neutral-800">
          <Image
            src={projectData.image}
            alt={title || "Project image"}
            width={720}
            height={450}
            className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300"
            priority
          />
        </div>
      )}

      {/* Contenido Principal */}
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-8 whitespace-pre-line">
          {description}
        </p>
      </div>

      {/* Footer del Post: Tecnologías */}
      <footer className="mt-12 pt-6 border-t border-slate-200 dark:border-white/10">
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            {t("technologies")}
          </h3>
          <div className="flex flex-wrap gap-2">
            {projectData?.technologies.map((technology) => (
              <span
                key={technology}
                className="bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 text-xs font-medium px-3 py-1 rounded-md border border-slate-200/50 dark:border-white/10"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </article>
  );
}