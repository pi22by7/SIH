import Image from "next/image";

const TechStack = () => {
    return (
        <div className={`overflow-hidden flex flex-col gap-5 max-w-contentContainer `}>
            <h1 className={`text-6xl text-white font-bold`}>Tech Stack?</h1>
            <div className={`flex gap-5`}>
                <Image className={`invert dark:invert-0`} src={'/next.svg'} width={140} height={100} alt={''}/>
                <Image src={'/react.svg'} width={40} height={40} alt={''}/>
                <Image src={'/nodejs.svg'} width={40} height={40} alt={''}/>
                <Image src={'/python.svg'} width={40} height={40} alt={''}/>
                <Image className={`invert dark:invert-0`} src={'/aws.svg'} width={40} height={40} alt={''}/>
            </div>
        </div>
    )
}
export default TechStack
