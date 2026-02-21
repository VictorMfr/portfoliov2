import { FaReact } from "react-icons/fa6"
import { FaNodeJs } from "react-icons/fa6"
import { SiMui, SiTypescript } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { SiSocketdotio } from "react-icons/si"
import { DiMongodb } from "react-icons/di"
import { DiMysql } from "react-icons/di"
import { SiRedux } from "react-icons/si"
import { FaBootstrap, FaGitAlt } from "react-icons/fa"
import { FaDocker } from "react-icons/fa6"
import { SiJest } from "react-icons/si"
import { SiExpo } from "react-icons/si"
import { SiReact } from "react-icons/si"
import { getLocale, getTranslations } from "next-intl/server";


const technologies = [
    {
        id: 1,
        title: "React",
        icon: <FaReact />
    },
    {
        id: 2,
        title: "Next.js",
        icon: <FaNodeJs />
    },
    {
        id: 3,
        title: "MySQL",
        icon: <DiMysql />
    },
    {
        id: 4,
        title: "Redux",
        icon: <SiRedux />
    },
    {
        id: 5,
        title: "TypeScript",
        icon: <SiTypescript />
    },
    {
        id: 6,
        title: "Express",
        icon: <SiExpress />
    },
    {
        id: 7,
        title: "Socket.io",
        icon: <SiSocketdotio />
    },
    {
        id: 8,
        title: "MongoDB",
        icon: <DiMongodb />
    },
    {
        id: 9,
        title: "Git",
        icon: <FaGitAlt />
    },
    {
        id: 10,
        title: "Docker",
        icon: <FaDocker />
    },
    {
        id: 11,
        title: "Jest",
        icon: <SiJest />
    },
    {
        id: 12,
        title: "Bootstrap",
        icon: <FaBootstrap />
    },
    {
        id: 13,
        title: "Mui",
        icon: <SiMui />
    },
    {
        id: 14,
        title: "Expo",
        icon: <SiExpo />
    },
    {
        id: 15,
        title: "React Native",
        icon: <SiReact />
    }
]

export default async function Technologies() {
    const t = await getTranslations("Technologies");
    const locale = await getLocale();

    return (
        <section id="technologies" className="bg-[#01111F] text-white flex flex-col md:flex-row gap-6 p-4 md:p-6 rounded-2xl border border-white/20 scroll-mt-24">
            <div className="md:w-1/4 flex flex-col gap-2 md:gap-3 items-center md:items-start">
                <h1 className="text-xl md:text-2xl font-bold">{t("title")}</h1>
                <p className="w-full max-w-[400px] text-sm md:text-base text-[#b6b6b6] font-light text-center md:text-start">{t("description")}</p>
                <a href={`/${locale}#contacto`} className="w-fit text-sm md:text-base hover:underline">{t("contactMe")}</a>
            </div>
            <div className="md:w-3/4 flex flex-wrap justify-center gap-x-3 gap-y-4 md:justify-start md:gap-x-5 lg:gap-x-6">
                {technologies.map((technology) => (
                    <div key={technology.id} className="flex flex-col items-center gap-2 w-1/4 lg:w-1/6">
                        <div className="text-6xl">{technology.icon}</div>
                        <div className="text-xs md:text-sm text-center">{technology.title}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}