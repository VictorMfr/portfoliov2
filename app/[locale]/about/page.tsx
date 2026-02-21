import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("AboutPage");

  return (
    <section className="text-white">
      <p className="max-w-[360px] md:max-w-none line-clamp-4 text-center md:text-start font-light ">
        {t("text")}
      </p>
    </section>
  );
}

