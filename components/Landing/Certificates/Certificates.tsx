'use client';

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { certificates } from "@/constants/constants";

export default function Certificates() {
    const t = useTranslations("Certificates");
    const [search, setSearch] = useState('');

    const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const filteredCertificates = certificates.filter((certificate) => {
        if (search) {
            return certificate.title.toLowerCase().includes(search.toLowerCase());
        }
        return true;
    });

    return (
        <section id="certificates" className="bg-[#01111F] border-white/20 text-white rounded-2xl border p-6 flex flex-col gap-4 scroll-mt-24">
            <h2 className="text-2xl font-bold">{t("title")}</h2>
            <input type="text" placeholder={t("searchPlaceholder")} className="text-sm border border-white/20 px-4 py-2 font-light rounded-full outline-0" value={search} onChange={changeSearch} />
            <div className="flex-1 flex gap-4 flex-col md:flex-row flex-wrap">
                {filteredCertificates.map((certificate) => {
                    return (
                        <div key={certificate.id} className="w-full lg:w-auto border border-white/20 p-4 rounded-2xl flex flex-col gap-4">
                            <div className="h-[180px] w-[220px] bg-gray-700 hidden lg:block">
                                <Image src={certificate.image} alt={certificate.title} width={220} height={180} className="h-full w-full object-cover" />
                            </div>
                            <div className="max-w-[220px] flex-1 flex flex-col gap-4">
                                <div className="flex flex-col gap-0">
                                    <h3>{certificate.title}</h3>
                                    <p className="text-sm text-[#b6b6b6] font-extralight">{certificate.issuer} | {certificate.date}</p>
                                </div>
                                <a href={certificate.image} target="_blank" rel="noreferrer" className="text-sm text-white hover:text-white transition-colors">
                                    {t("viewCertificate")}
                                </a>
                            </div>
                        </div>
                    );
                })}
                {search && filteredCertificates.length === 0 && (
                    <div className="w-full flex justify-center items-center">
                        <p className="text-sm text-gray-500">{t("empty")}</p>
                    </div>
                )}
            </div>
        </section>
    );
}
