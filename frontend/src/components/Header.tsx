import {useRouter} from "next/navigation";

interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = ({className}) => {
    const router = useRouter()
    return (
        <div className={`mt-5 flex flex-col gap-5 items-start border-t-2 border-neutral-200 dark:border-neutral-200 `}>
            <div className={`relative ml-4 flex flex-col items-start gap-6`}>
                <div>
                    <h1 className={` text-3xl mt-5 text-green-500 font-bold`}>Explore local tree information or assess
                        the
                        biodiversity in your vicinity with just a
                        <span className={`bg-gradient-to-l from-green-200 to-green-500 text-transparent bg-clip-text`}>
                &nbsp;click
            </span>
                        🖱️
                    </h1>
                </div>
                <button onClick={() => router.push('/analyze')}
                        className={` border border-none text-black bg-white dark:bg-black dark:text-white p-2 rounded-2xl `}>
                <span className={`font-bold dark:text-white`}>
                    Get Started
                </span>
                </button>
                <div>
                    <h1 className={`text-2xl font-bold text-white`}>How it works?</h1>
                </div>
            </div>
        </div>
    )
}
export default Header
