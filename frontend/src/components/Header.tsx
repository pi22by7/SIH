import {useRouter} from "next/navigation";

interface HeaderProps{
    className?:string;
}
const Header:React.FC<HeaderProps> =({className})=>{
    const router =useRouter()
    return (
        <div className={`mt-5 flex flex-col gap-5 items-start border-t-2 border-white' `}>
            <h1 className={`text-3xl mt-5 text-red-500 font-bold`}>Explore local tree information or assess the biodiversity in your vicinity with just a click.</h1>
            <button onClick={()=>router.push('/analyze')} className={`bg-white  border border-none p-2 rounded-2xl`}>
                <span className={`font-bold text-black`}>
                    Get Started
                </span>
            </button>
        </div>
    )
}
export default Header
