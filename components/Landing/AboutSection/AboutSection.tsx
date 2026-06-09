import Image from "next/image";
import { getTranslations } from "next-intl/server";
import Accordion, { AccordionItem } from "./Accordion";
import { getLocale } from "next-intl/server";

export default async function AboutSection() {
    const t = await getTranslations("About");
    const ts = await getTranslations("Services");
    const locale = await getLocale();

    const accordionItems: AccordionItem[] = [
        {
            id: "about",
            title: t("title1"),
            content: t("paragraph1"),
        },
        {
            id: "experience",
            title: t("title2"),
            content: t("paragraph2"),
        },
        {
            id: "mobile",
            title: t("title3"),
            content: t("paragraph3"),
        },
        {
            id: "uiux",
            title: t("title4"),
            content: t("paragraph4"),
        },
        {
            id: "systems",
            title: t("title5"),
            content: t("paragraph5"),
        },
        {
            id: "planning",
            title: t("title6"),
            content: t("paragraph6")
        },
        {
            id: "ai",
            title: t("title7"),
            content: t("paragraph7")
        },
        {
            id: "collaboration",
            title: t("title8"),
            content: t("paragraph8")
        },
        {
            id: "testimonials",
            title: t("title9"),
            content: t("paragraph9")
        },
    ];

    const cvPath = locale === 'es' ? '/cv_es.pdf' : '/cv_en.pdf';

    return (
        <section className="px-[5%] py-[92px]" id="about">
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-[40px] items-start">
                <div className="col-span-1 hidden md:block">
                    <Image
                        src="/images/profile.jpeg"
                        alt="Profile"
                        width={450}
                        height={620}
                        className="object-cover rounded-[21px]"
                    />
                </div>
                {/* Acordeon */}
                <div className="col-span-1 flex items-center">
                    <div className="w-full flex flex-col gap-[20px]">
                        <h3 className="text-[44px]">{t("title")}</h3>
                        <Accordion items={accordionItems} />

                        <div className="flex gap-[10px]">
                            <a href="https://github.com/VictorMfr" className="flex gap-[6px] px-[8px] py-[8px] rounded-full text-[#011627] bg-[#33ff60] w-fit cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                    <g clipPath="url(#clip0_4069_161)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10 0C15.523 0 20 4.58993 20 10.2529C20 14.7819 17.138 18.624 13.167 19.981C12.66 20.082 12.48 19.7618 12.48 19.4888C12.48 19.1508 12.492 18.0468 12.492 16.6748C12.492 15.7188 12.172 15.0949 11.813 14.7769C14.04 14.5229 16.38 13.6558 16.38 9.71777C16.38 8.59777 15.992 7.68382 15.35 6.96582C15.454 6.70682 15.797 5.66395 15.252 4.25195C15.252 4.25195 14.414 3.97722 12.505 5.30322C11.706 5.07622 10.85 4.96201 10 4.95801C9.15 4.96201 8.295 5.07622 7.497 5.30322C5.586 3.97722 4.746 4.25195 4.746 4.25195C4.203 5.66395 4.546 6.70682 4.649 6.96582C4.01 7.68382 3.619 8.59777 3.619 9.71777C3.619 13.6458 5.954 14.5262 8.175 14.7852C7.889 15.0412 7.63 15.4928 7.54 16.1558C6.97 16.4178 5.522 16.8712 4.63 15.3042C4.63 15.3042 4.101 14.3191 3.097 14.2471C3.097 14.2471 2.122 14.2341 3.029 14.8701C3.029 14.8701 3.684 15.1851 4.139 16.3701C4.139 16.3701 4.726 18.2001 7.508 17.5801C7.513 18.4371 7.522 19.2448 7.522 19.4888C7.522 19.7598 7.338 20.0769 6.839 19.9819C2.865 18.6269 0 14.7829 0 10.2529C0 4.58993 4.478 0 10 0Z" fill="black" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_4069_161">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            {/* utilizar un fondo azul tipico de linkedin */}
                            <a href="https://www.linkedin.com/in/victor-martinez-0851a6318" className="flex gap-[6px] px-[8px] py-[8px] rounded-full text-[#011627] bg-[#0077b5] w-fit cursor-pointer">
                                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z" fill="white"></path>
                                    </g>
                                </svg>
                            </a>

                            {/* Lo mismo pero el logo de youtube con el fondo rojo de youtbe y el fill blanco*/}
                            <a href="https://www.youtube.com/@FVictorMartinez" className="flex gap-[6px] px-[8px] py-[8px] rounded-full bg-[#ff0000] w-fit cursor-pointer">
                                <svg width={20} height={20} viewBox="0 -3 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>youtube [#168]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7442.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289" id="youtube-[#168]" fill="white"> </path> </g> </g> </g> </g></svg>
                            </a>

                            {/* Crear un boton tambien pero de curriculum, donde el icono es solo un texto "CV"*/}
                            <a href={cvPath} className="flex gap-[6px] px-[9px] py-[6px] rounded-full bg-[#2ec4b6] w-fit cursor-pointer items-center">
                                <span className="text-[14px] mb-0 font-semibold">CV</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}