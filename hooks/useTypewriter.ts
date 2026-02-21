'use client';

import { useEffect, useState, useRef } from 'react';

interface UseTypewriterOptions {
    text: string;
    speed?: number; // velocidad en ms entre cada carácter
    delay?: number; // delay antes de empezar
    onComplete?: () => void;
    start?: boolean; // control para iniciar la animación
}

export default function useTypewriter({ 
    text, 
    speed = 50, 
    delay = 0,
    onComplete,
    start = true
}: UseTypewriterOptions) {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const onCompleteRef = useRef(onComplete);

    useEffect(() => {
        onCompleteRef.current = onComplete;
    }, [onComplete]);

    useEffect(() => {
        // Limpiar cualquier intervalo o timeout anterior
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        if (!start) {
            setDisplayedText('');
            setIsTyping(false);
            return;
        }

        const startTyping = () => {
            let currentIndex = 0;
            setDisplayedText('');
            setIsTyping(true);

            intervalRef.current = setInterval(() => {
                if (currentIndex < text.length) {
                    setDisplayedText(text.slice(0, currentIndex + 1));
                    currentIndex++;
                } else {
                    setIsTyping(false);
                    if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                        intervalRef.current = null;
                    }
                    if (onCompleteRef.current) {
                        onCompleteRef.current();
                    }
                }
            }, speed);
        };

        if (delay > 0) {
            timeoutRef.current = setTimeout(() => {
                startTyping();
            }, delay);
        } else {
            startTyping();
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [text, speed, delay, start]);

    return { displayedText, isTyping };
}
