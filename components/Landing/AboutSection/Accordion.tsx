'use client';

import { useState } from 'react';

export interface AccordionItem {
    id: string;
    title: string;
    content: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
    const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

    const toggle = (id: string) => {
        setOpenId(prev => (prev === id ? null : id));
    };

    return (
        <div className="flex flex-col divide-y divide-white/10 border border-[#e4e6f1] rounded-2xl overflow-hidden">
            {items.map((item) => {
                const isOpen = openId === item.id;
                return (
                    <div key={item.id} className="bg-white/5 backdrop-blur-sm">
                        {/* Header */}
                        <button
                            type="button"
                            id={`accordion-btn-${item.id}`}
                            aria-expanded={isOpen}
                            aria-controls={`accordion-panel-${item.id}`}
                            onClick={() => toggle(item.id)}
                            className="w-full flex items-center justify-between px-6 py-4 text-left group transition-colors duration-200 hover:bg-white/5 cursor-pointer"
                        >
                            <span className="text-sm font-medium transition-colors duration-200 text-[#011627]">
                                {item.title}
                            </span>
                            {/* Chevron */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={`flex-shrink-0 transition-all duration-300 ${isOpen ? 'rotate-180 text-[#33ff60]' : 'text-[#011627]'
                                    }`}
                            >
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </button>

                        {/* Content panel — ¡Animado perfectamente con CSS Grid! */}
                        <div
                            id={`accordion-panel-${item.id}`}
                            role="region"
                            aria-labelledby={`accordion-btn-${item.id}`}
                            className="grid transition-all duration-300 ease-in-out"
                            style={{
                                gridTemplateRows: isOpen ? '1fr' : '0fr',
                                opacity: isOpen ? 1 : 0,
                            }}
                        >
                            <div className="overflow-hidden">
                                <div className="px-6 pb-5 pt-1 text-sm leading-relaxed text-[#011627]">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}