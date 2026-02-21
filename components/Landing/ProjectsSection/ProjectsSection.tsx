'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { projects } from "@/constants/constants";

export default function ProjectsSection() {
    const t = useTranslations("Projects");


    const [search, setSearch] = useState('');

    const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const filteredProjects = projects.filter((project) => {
        if (search) {
            return project.title.toLowerCase().includes(search.toLowerCase());
        }
        return true;
    });

    return (
        <section id="projects" className="bg-[#01111F] border-white/20 text-white rounded-2xl border p-6 flex flex-col gap-4 scroll-mt-24">
            <h2 className="text-2xl font-bold">{t("title")}</h2>
            <input type="text" placeholder={t("searchPlaceholder")} className="text-sm border border-white/20 px-4 py-2 font-light rounded-full outline-0" value={search} onChange={changeSearch} />
            <div className="flex-1 flex gap-4 flex-col md:flex-row flex-wrap">
                {filteredProjects.map((project) => {
                    return (
                        <div key={project.id} className="w-full lg:w-auto  border border-white/20 p-4 rounded-2xl flex flex-col gap-4">
                                <div className="h-[180px] w-[220px] bg-gray-700 hidden lg:block">
                                    <Image src={project.thumbnail} alt={project.title} width={220} height={180} />
                                </div>
                            <div className="max-w-[220px] flex-1 flex flex-col gap-2">
                                <div className="flex-1 flex flex-col">
                                    <h3>{project.title}</h3>
                                    <p className="line-clamp-2 font-light text-[#b6b6b6] text-sm">{project.description}</p>
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