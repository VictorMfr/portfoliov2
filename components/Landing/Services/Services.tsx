import { getTranslations } from "next-intl/server";
import { FaChartLine, FaCode, FaMobile, FaPaintBrush, FaProjectDiagram, FaUserTie } from "react-icons/fa";

export default async function Services() {
    const t = await getTranslations("Services");
    const services = [
        {
            id: 1,
            title: t("items.webDevelopmentTitle"),
            description: t("items.webDevelopmentDescription"),
            icon: <FaCode />
        },
        {
            id: 2,
            title: t("items.mobileDevelopmentTitle"),
            description: t("items.mobileDevelopmentDescription"),
            icon: <FaMobile />
        },
        {
            id: 3,
            title: t("items.uiuxTitle"),
            description: t("items.uiuxDescription"),
            icon: <FaPaintBrush />
        },
        {
            id: 4,
            title: t("items.systemsAnalysisTitle"),
            description: t("items.systemsAnalysisDescription"),
            icon: <FaCode />
        },
        {
            id: 5,
            title: t("items.testingTitle"),
            description: t("items.testingDescription"),
            icon: <FaCode />
        },
        {
            id: 6,
            title: t("items.requirementsTitle"),
            description: t("items.requirementsDescription"),
            icon: <FaChartLine />
        },
        {
            id: 7,
            title: t("items.consultingTitle"),
            description: t("items.consultingDescription"),
            icon: <FaUserTie />
        },
        {
            id: 8,
            title: t("items.softwareDevelopmentTitle"),
            description: t("items.softwareDevelopmentDescription"),
            icon: <FaCode />
        },
        {
            id: 9,
            title: t("items.projectManagementTitle"),
            description: t("items.projectManagementDescription"),
            icon: <FaProjectDiagram />
        },
    ];

    return (
        <section id="services" className=" text-white flex flex-col gap-4 scroll-mt-24">
            <h1 className="text-2xl font-bold text-center">{t("title")}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => (
                    <div key={service.id} className="bg-[#01111F] p-4 rounded-lg border border-white/20 flex gap-4 items-center">
                        <div className="text-4xl">{service.icon}</div>
                        <div>
                            <h3>{service.title}</h3>
                            <p className="text-[#b6b6b6] font-light">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}