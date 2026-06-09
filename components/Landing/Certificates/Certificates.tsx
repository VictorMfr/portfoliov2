'use client';

import { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { certificates } from "@/constants/constants";

export default function Certificates() {
    const t = useTranslations("Certificates");
    const locale = useLocale();
    const [search, setSearch] = useState('');

    const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const filteredCertificates = certificates.filter((certificate) => {
        const title = typeof certificate.title === 'string' ? certificate.title : (certificate.title[locale as 'es' | 'en'] || '');
        if (search) {
            return title.toLowerCase().includes(search.toLowerCase());
        }
        return true;
    });

    return (
        <section id="certificates" className="px-[5%] py-[92px] flex flex-col gap-[20px]">
            <div className="mb-[128px] text-center">
                <h2 className="text-[44px]">{t("title")}</h2>
                <p className="text-[16px]">{t("subtitle")}</p>
            </div>

            <input type="text" placeholder={t("searchPlaceholder")} className="text-sm border border-[#e4e6f1] px-[24px] py-[16px] font-light rounded-full outline-0" value={search} onChange={changeSearch} />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-[40px] ">
                {filteredCertificates.map((certificate) => {
                    const title = typeof certificate.title === 'string' ? certificate.title : (certificate.title[locale as 'es' | 'en'] || '');
                    return (
                        <div key={certificate.id} className="w-full lg:w-auto p-4 rounded-2xl flex flex-col gap-4 border border-[#e4e6f1]">
                            <div className="h-32 w-full bg-gray-700 lg:block relative">
                                <Image src={certificate.image} alt={title} fill className="object-cover" />
                            </div>
                            <div className="flex-1 flex flex-col gap-4">
                                <div className="flex flex-col gap-0">
                                    <h3>{title}</h3>
                                    <p className="text-sm  font-extralight">{certificate.issuer} | {certificate.date}</p>
                                </div>
                                <a href={certificate.image} target="_blank" rel="noreferrer" className="text-sm  transition-colors">
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
