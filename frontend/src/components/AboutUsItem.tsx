import React from "react";
import Image from "next/image";
interface AboutUsItemProps {
    className?: string;
    label?: string;
    description?: string;
    image?: string;
}

const AboutUsItem: React.FC<AboutUsItemProps> = ({
                                                     className,
                                                     label,
                                                     description,
                                                     image
                                                 }) => {
    return (
        <div>
            <div className={`flex flex-col  rounded-3xl gap-2 items-center justify-center`}>
            <Image
                width={256}
                height={256}
                alt="Picture of the author"
                className="rounded-full object-cover h-64 w-64"
                 src={image as string}  />
            <span className={`text-3xl font-bold`} >{label}</span>
            </div>
        </div>
    )
}
export default AboutUsItem;
