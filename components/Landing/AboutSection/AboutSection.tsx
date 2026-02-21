import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function AboutSection() {
    const t = await getTranslations("About");

    return (
        <section id="about" className="overflow-hidden relative grid grid-cols-1 gap-8 rounded-2xl border border-white/20 bg-[#01111F] p-8 text-white md:grid-cols-[240px_minmax(0,1fr)] scroll-mt-24">
            <svg viewBox="0 0 1136 186" fill="none" className="absolute top-0 right-0 w-auto">
                <path id="Vector02" d="M477.18 143.269C229.107 200.577 55.6961 71.6345 0 0H1136V126.237C1068.6 160.802 922.849 216.907 879.095 164.81C824.403 99.6872 787.272 71.6345 477.18 143.269Z" fill="#2EC4B610" />
            </svg>

            <svg viewBox="0 0 911 73" fill="none" className="absolute bottom-0 left-0 w-auto">
                <path d="M282.5 31.5C112.5 28.7 67.6667 60.8332 0 72.9999L911 73V0C863.333 24.3333 752.791 62.2989 686.5 58.5C512 48.5 495 35 282.5 31.5Z" fill="#2EC4B610" />
            </svg>

            <aside className="flex w-full flex-col items-center gap-2 text-center z-10">
                <Image src="/images/profile.jpeg" alt="Foto de perfil de Victor Martinez" width={190} height={385} className="mx-auto rounded-xl" />
                <p className="font-medium">Victor Martinez</p>
                <p className="text-sm text-[#cbd5e1]">victormfr2003@gmail.com</p>
                <a
                    href="/contact.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:border-white/40"
                >
                    {t("cv")}
                </a>
            </aside>

            <div className="flex min-w-0 flex-col gap-4 text-center md:pl-2 md:text-left z-10">
                <h2 className="text-[30px] font-bold tracking-tight">{t("title")}</h2>
                <div className="mx-auto max-w-[70ch] space-y-3 font-light leading-relaxed text-[#cbd5e1] md:mx-0">
                    <p>{t("paragraph1")}</p>
                    <p>{t("paragraph2")}</p>
                    <p>{t("paragraph3")}</p>
                </div>
            </div>
        </section>
    );
}