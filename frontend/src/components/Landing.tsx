import {useRouter} from "next/navigation";
import React from "react";
import HowItWorks from "@/components/HowItWorks";
import Bounce from "../../Motion/Bounce";
import TechStack from "@/components/TechStack";

interface LandingProps {
    className?: string;
}

const Landing: React.FC<LandingProps> = ({className}) => {
    const router = useRouter()
    return (
        <div className={`flex flex-col gap-10 items-start  border-neutral-200 dark:border-neutral-200 `}>
            <div className={`relative ml-4 flex flex-col items-start gap-6`}>
                <div>
                    <h1 className={` text-3xl mt-5 text-green-500 font-bold`}>Explore local tree information or assess
                        the
                        biodiversity in your vicinity with just a
                        <span className={`bg-gradient-to-l from-green-200 to-green-500 text-transparent bg-clip-text`}>
                &nbsp;click</span>🖱️
                    </h1>
                </div>
                <Bounce>
                    <button onClick={() => router.push('/analyze')}
                            className={`mt-4 mb-4 border border-none text-black bg-white dark:bg-black dark:text-white p-2 rounded-2xl `}>
                <span className={`font-bold dark:text-white`}>
                    Get Started
                </span>
                    </button>
                </Bounce>
                <HowItWorks/>
                <TechStack/>
            </div>
        </div>
    )
}
export default Landing
