'use client';

import useTypewriter from '@/hooks/useTypewriter';
import { useTranslations } from 'next-intl';
import { useCallback, useState } from 'react';

export default function MainHero() {
    const t = useTranslations('Hero');
    const titlePrefix = t("titlePrefix");
    const titleHighlight = t("titleHighlight");
    const titleText = `${titlePrefix} ${titleHighlight}`;
    const subtitleText = t("subtitle");
    
    const [titleComplete, setTitleComplete] = useState(false);
    const handleTitleComplete = useCallback(() => {
        setTitleComplete(true);
    }, []);
    
    const { displayedText: titleDisplayed, isTyping: isTitleTyping } = useTypewriter({
        text: titleText,
        speed: 80,
        delay: 300,
        onComplete: handleTitleComplete
    });

    const { displayedText: subtitleDisplayed, isTyping: isSubtitleTyping } = useTypewriter({
        text: subtitleText,
        speed: 30,
        delay: 500,
        start: titleComplete,
    });

    const prefixWithSpace = `${titlePrefix} `;
    const before = titleDisplayed.startsWith(prefixWithSpace) ? titlePrefix : titleDisplayed;
    const digitales = titleDisplayed.startsWith(prefixWithSpace)
        ? titleDisplayed.slice(prefixWithSpace.length)
        : "";

    return (
        <div className="flex flex-col gap-2 justify-center lg:w-[47%]">
            <h1 className="text-white text-xl md:text-2xl lg:text-4xl text-center lg:text-start">
                {before}
                {digitales && (
                    <>
                        {' '}
                        <span className="text-[#33FF60] font-bold">
                            {digitales}
                            {isTitleTyping && <span className="animate-pulse">|</span>}
                        </span>
                    </>
                )}
                {!digitales && isTitleTyping && <span className="animate-pulse">|</span>}
            </h1>
            {titleComplete && (
                <p className="text-white/80 text-center lg:text-start">
                    {subtitleDisplayed}
                    {isSubtitleTyping && <span className="animate-pulse">|</span>}
                </p>
            )}
        </div>
    )
}