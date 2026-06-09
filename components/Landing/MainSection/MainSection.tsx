import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function MainSection() {
    const t = await getTranslations("Hero");

    return (
        <main id="inicio" className="px-[5%] py-[92px] min-h-screen"
            style={{
                backgroundImage: 'url("/images/banner.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
            <div
                className="mx-auto grid grid-cols-1 md:grid-cols-2 align-top gap-[20px]"
            >
                <Image
                    width={100}
                    height={100}
                    src="/images/profile_2.png"
                    alt="profile"
                    className="mx-auto rounded-full border border-[#e4e6f1] md:hidden"
                />
                {/* Content */}
                <div className="col-span-1 flex flex-col gap-[20px] text-center md:text-start">
                    <p className="text-[14px] uppercase tracking-[2px] font-bold text-white">{t("brand")}</p>
                    <h4 className="text-[48px] md:text-[64px] leading-[120%] font-[600] text-[#2ec4b6]"> <span className="text-[#33ff60]">{t("rolePrefix")}</span>{t("roleSuffix")}</h4>
                    <p className="text-[18px] text-white">{t("description")}</p>

                    {/* TechStack */}
                    <div className="flex mx-auto md:mx-0">

                        <div className="rounded-full w-[64px] h-[64px] bg-gray-600 mr-[-8px]" style={{ backgroundImage: 'url(/images/react.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', }} />
                        <div className="rounded-full w-[64px] h-[64px] bg-gray-500 mr-[-8px]" style={{ backgroundImage: 'url(/images/nodejs.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', }} />
                        <div className="rounded-full w-[64px] h-[64px] bg-gray-400 mr-[-8px]" style={{ backgroundImage: 'url(/images/typescript.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', }} />
                        <div className="rounded-full w-[64px] h-[64px] bg-gray-300 mr-[-8px]" style={{ backgroundImage: 'url(/images/nextjs.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', }} />
                    </div>

                    <div>
                        <a href="#about" className="inline-block px-[32px] py-[12px] rounded-full border border-white text-white hover:border-[#33ff60] hover:bg-[#33ff60] hover:text-[#011627] transition-all duration-300">
                            {t("learnMore")}
                        </a>
                    </div>


                </div>

                {/* image */}
                <div className="col-span-1 w-full hidden md:block">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 792 779" fill="none">
                        <path d="M1 206.414C1 189.613 16.1812 176.891 32.7236 179.83L241.224 216.88C254.111 219.17 263.5 230.374 263.5 243.463V472.691C263.5 487.147 252.115 499.037 237.673 499.665L29.1729 508.73C13.8154 509.398 1 497.128 1 481.756V206.414Z" stroke="white" strokeWidth="2" />
                        <path d="M20 266.2C20 259.156 26.0395 253.626 33.0566 254.246L97.5566 259.948C103.75 260.496 108.5 265.684 108.5 271.901V347C108.5 353.627 103.127 359 96.5 359H32C25.3726 359 20 353.627 20 347V266.2Z" stroke="white" strokeWidth="2" />
                        <path d="M118 277.194C118 270.152 124.036 264.623 131.052 265.24L230.052 273.952C236.248 274.497 241 279.687 241 285.906V347C241 353.627 235.627 359 229 359H130C123.373 359 118 353.627 118 347V277.194Z" stroke="white" strokeWidth="2" />
                        <path d="M32 374H82.6963C89.4319 374 94.8485 379.543 94.6934 386.276L93.7871 425.526C93.6388 431.952 88.455 437.12 82.0293 437.248L32.2383 438.236C25.519 438.37 20.0001 432.96 20 426.239V386C20 379.373 25.3726 374 32 374Z" stroke="white" strokeWidth="2" />
                        <path d="M117.5 374H159C165.627 374 171 379.373 171 386V421.473C171 427.927 165.894 433.225 159.444 433.464L117.944 435.001C111.147 435.253 105.5 429.811 105.5 423.01V386C105.5 379.373 110.873 374 117.5 374Z" stroke="white" strokeWidth="2" />
                        <path d="M192 374H227.5C234.127 374 239.5 379.373 239.5 386V419.5C239.5 426.127 234.127 431.5 227.5 431.5H192C185.373 431.5 180 426.127 180 419.5V386C180 379.373 185.373 374 192 374Z" stroke="white" strokeWidth="2" />
                        <path d="M29.5 341L54.5 316L66 330.25M77.5 344.5L66 330.25M66 330.25L78.5 320L93 342.5" stroke="white" strokeWidth="2" />
                        <path d="M130 281L182.5 283.5V289.5L130 287.5V281Z" fill="white" />
                        <path d="M130 310L179.5 312.5V318.5L130 316.5V310Z" fill="white" />
                        <path d="M130 297.5L220 302.5V307L130 304V297.5Z" fill="white" />
                        <path d="M33 392H75.5L75 397H33V392Z" fill="white" />
                        <path d="M640.557 8.35449C654.878 4.73111 668.853 15.3547 669.192 30.123L671.031 110.118C671.29 121.392 663.338 131.19 652.252 133.257L531.715 155.724C517.567 158.361 504.5 147.504 504.5 133.113V60.6836C504.5 50.1541 511.651 40.9695 521.858 38.3867L640.557 8.35449Z" stroke="white" strokeWidth="2" />
                        <path d="M544.5 70.5L629 51M544.5 96L629 77.5M544.5 121L629 103" stroke="white" strokeWidth="7" />
                        <path d="M199.5 678.5L2 602L117.5 595.5L233 589L376.5 651L199.5 678.5Z" fill="#2EC4B6" />
                        <path d="M126.5 656C170 678.5 208 633.5 213 619L334.5 567.5L314.5 342.5L271.5 522L186 570C186 570 174.5 563 152 567.5C116.5 570 83 633.5 126.5 656Z" fill="#F0DCB1" />
                        <path d="M317 71.5002C344 56.0002 389 45.5002 431 82.0002C447.208 96.0852 457.085 115.085 462.703 134.257C467.411 146.088 470 158.992 470 172.5C470 177.866 469.591 183.137 468.804 188.282C468.284 196.691 467.053 203.564 465.5 208C463.857 212.696 461.238 216.86 458.222 220.493C454.02 228.508 448.798 235.903 442.729 242.508C456.81 252.198 489.352 257.778 506 259.5C502.167 274 502 314.9 486 334.5C466 359 402.17 375.34 377 346.5C353 319 377 298.5 377 276L376.692 275.502C373.339 275.83 369.939 276 366.5 276C325.794 276 290.576 252.5 273.673 218.326C264.575 202.417 262.113 186.45 263.003 171.968C263.078 157.156 266.263 143.081 271.94 130.361C281.648 101.001 296.212 83.4345 317 71.5002Z" fill="#F0DCB1" />
                        <path d="M286.5 577L237.5 537.5L263.5 512C268 494.167 277.8 452.4 281 428C285 397.5 296 349 309.5 336.5C320.3 326.5 356.833 301.5 372.5 295.5C363 314 398 368 447 349C486.2 333.8 501.333 281.667 504 257.5C536.167 261.833 596.5 267.022 635 300.5C662.6 324.5 679.833 390.167 685 420L692 678L398 665.5L357.5 543L327.5 585C317.5 573.8 296 575 286.5 577Z" fill="#33FF60" />
                        <path d="M504 592C517.2 599.6 536.667 640.167 542.5 659.5L337.5 650C321.5 665.5 276.5 674 256 659.5C242.569 650 224 601.7 256 582.5C286 564.5 318.5 571 337.5 592H504Z" fill="#F0DCB1" />
                        <path d="M446.6 186.706C446.6 204.161 444.031 230.175 444.031 241C468.173 227.299 474.234 215.121 479.987 186.706C487.178 151.186 472.795 107.04 472.795 91.817C472.795 76.5943 459.441 63.401 450.195 57.3119C442.799 52.4406 432.731 52.9143 428.622 53.7601L415.267 36V53.7601C390.099 38.5373 360.307 36.0002 323.838 47.671C294.663 57.0076 281.206 72.8731 278.124 79.6388C271.138 79.6388 264.94 72.5349 262.714 68.9829C238.573 83.1908 267.337 91.817 257.578 91.817C249.771 91.817 236.861 80.6537 231.382 75.072V113.636H217C225.903 122.432 250.592 139.515 278.124 137.485C305.655 135.456 335.138 116.343 346.439 107.04C363.389 133.595 400.885 186.706 415.267 186.706C433.245 186.706 446.6 164.886 446.6 186.706Z" fill="#2F3F4C" />
                    </svg>
                </div>
            </div>
        </main>
    )
}