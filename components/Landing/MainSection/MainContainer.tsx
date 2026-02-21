import MainCarousel from "./MainCarousel";
import MainHero from "./MainHero";

export default function MainContainer() {
    return (
        <div className="relative bg-[#01111F] flex flex-col lg:flex-row px-[7%] py-[5%] border border-white/20 rounded-2xl overflow-hidden justify-between">


            <svg viewBox="0 0 735 289" fill="none" className="absolute top-0 left-0 h-full" >
                <path id="wave01" d="M0 0H367.5H735C735 43.0897 678.343 45.0697 666.5 86.5C657.967 116.351 675.542 136.299 666.5 166C656.478 198.92 640.285 214.158 615 237.5C584.118 266.009 520.5 289 520.5 289H260.25H0V0Z" fill="#011627" />
            </svg>

            <svg viewBox="0 0 331 289" fill="none" className="absolute bottom-0 right-0 h-full" >
                <path id="wave02" d="M115.5 0H223.25H331V289H165.5H0C0 289 44.0737 252.589 48 220C51.6858 189.406 16.6681 175.85 22 145.5C27.4679 114.376 56.4712 109.794 74 83.5C81.7147 71.9276 77.2119 52.0141 84.0001 38C94.9846 15.3225 115.5 0 115.5 0Z" fill="#000E19" />
            </svg>

            <svg height="108" width="108" viewBox="0 0 108 108" fill="none" className="absolute bottom-0 right-0" >
                <path id="circle" d="M0.5 107.5C0.500002 79.1218 11.7732 51.906 31.8396 31.8396C51.906 11.7732 79.1218 0.5 107.5 0.5" stroke="white" strokeOpacity="0.18" />
            </svg>



            <div className="relative z-10 w-full flex flex-col lg:flex-row justify-between">
                <MainHero />
                <MainCarousel />
            </div>
        </div>
    )
}