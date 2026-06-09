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
        <section id="technologies" className="px-[5%] py-[92px] flex flex-col">
            <div className="text-center mb-[64px]">
                <h1 className="text-[48px]">{t("title")}</h1>
                <p className="text-[18px]">{t("description")}</p>
            </div>
            <div className="grid grid-cols-5 gap-[]">
                {technologies.map((technology) => (
                    <div key={technology.id} className="flex flex-col items-center p-[24px]">
                        <div className="text-6xl">{technology.icon}</div>
                        <div className="text-xs md:text-sm text-center">{technology.title}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}