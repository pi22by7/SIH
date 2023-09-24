'use client';
import AboutUsItem from "@/components/AboutUsItem";

const Page=()=>{
    return (
        <div className={`flex flex-col items-center  justify-center mt-5 text-white`}>
            <h1 className={`mt-5 text-4xl font-bold dark:text-black`} >OUR TEAM</h1>
            <div className={`mt-14 gap-5 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3  `}>
                <AboutUsItem label={'Parishkar Singh'} image={'/images/Parishkar.jpg'}/>
                <AboutUsItem label={'Piyush Airani'} image={'/images/π.jpg'}/>
                <AboutUsItem label={'Saumitra T'} image={'/images/SBT.png'}/>
                <AboutUsItem label={'Kartik Gadad'} image={'/images/kartik.jpg'}/>
                <AboutUsItem label={'Shivani Banke'} image={'/images/shivani.jpg'}/>
                {/*<AboutUsItem label={''} image={'/images/siddharth.jpg'}/>*/}
            </div>
        </div>
    )
}
export default Page
