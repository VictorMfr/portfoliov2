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
        <section id="services" className=" flex flex-col gap-[40px] scroll-mt-24 px-[5%] py-[92px] text-[#011627]">
            <div className="mb-[128px]">
                <h1 className="text-[48px] font-normal text-center">{t("title")}</h1>
                <p className="text-[18px] text-center">{t("subtitle")}</p>
            </div>


            <div className="grid grid-cols-2 lg:grid-cols-5  gap-[20px]">
                {services.map((service) => (
                    <div key={service.id} className="p-[20px] rounded-lg border border-[#e4e6f1] flex flex-col gap-[20px]">
                        <div className="text-[47px]">{service.icon}</div>
                        <div>
                            <h3 className="text-[16px] font-medium">{service.title}</h3>
                            <p className="font-light text-[18px] leading-[32px]">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}