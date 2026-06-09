'use client';

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { projects } from "@/constants/constants";

export default function ProjectsSection() {
    const t = useTranslations("Projects");
    const locale = useLocale();

    const [search, setSearch] = useState('');

    const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const filteredProjects = projects.filter((project) => {
        const title = typeof project.title === 'string' ? project.title : (project.title[locale as 'es' | 'en'] || '');
        if (search) {
            return title.toLowerCase().includes(search.toLowerCase());
        }
        return true;
    });

    const featuredVideo = locale === 'es' ? 'https://www.youtube.com/embed/s_jKDBA2KWc?si=pkFwqkL-leiS7BsU' : 'https://www.youtube.com/embed/w0hJ_errbwI?si=pkFwqkL-leiS7BsU';

    return (
        <section id="projects" className="px-[5%] py-[92px] flex flex-col gap-[20px]">
            <div className="w-max-[580px] mx-auto text-center flex flex-col gap-[20px] mb-[128px]">
                <iframe height="315" src={featuredVideo} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <h2 className="text-[48px] font-normal leading-[120%]">{t("title")}</h2>
                <p className="text-[18px] leading-[120%]">{t("subtitle")}</p>
            </div>
            <input type="text" placeholder={t("searchPlaceholder")} className="text-sm border border-[#e4e6f1] px-[24px] py-[16px] font-light rounded-full outline-0" value={search} onChange={changeSearch} />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {filteredProjects.map((project) => {
                    const title = typeof project.title === 'string' ? project.title : (project.title[locale as 'es' | 'en'] || '');
                    const description = typeof project.description === 'string' ? project.description : (project.description[locale as 'es' | 'en'] || '');
                    return (
                        <div key={project.id} className="w-full lg:w-auto border border-[#e4e6f1] p-[20px] rounded-2xl flex flex-col gap-4">
                            <div className="bg-gray-700 lg:block relative w-full h-32">
                                <Image src={project.thumbnail} alt={title} fill className="object-cover" />
                            </div>
                            <div className="flex-1 flex flex-col gap-2">
                                <div className="flex-1 flex flex-col">
                                    <h3>{title}</h3>
                                    <p className="line-clamp-2 font-light text-[#b6b6b6] text-sm">{description}</p>
                                </div>
                                <Link href={project.url}>{t("viewDetails")}</Link>
                            </div>
                        </div>
                    );
                })}
                {search && filteredProjects.length === 0 && (
                    <div className="w-full flex justify-center items-center">
                        <p className="text-sm text-gray-500">{t("empty")}</p>
                    </div>
                )}
            </div>
        </section>
    );
}