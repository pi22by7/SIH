import React, { useState } from "react";

interface HowItWorksItemProps {
    className?: string;
    label?: string;
    description?: string;
}

const HowItWorksItem: React.FC<HowItWorksItemProps> = ({
                                                           className,
                                                           label,
                                                           description,
                                                       }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={`xs:h-20 xs:w-32 md:h-32 md:w-56 bg-neutral-900 p-4 rounded-3xl flex items-center justify-center ${className} relative`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >

      <span
          className={`p-4 font-bold text-white xs:text-sm md:text-3xl absolute  ${
              isHovered ? "opacity-0" : "opacity-100"
          } transition-opacity duration-300`}
      >
        {label}
      </span>
            <span
                className={`p-4  font-bold text-white xs:text-[8px] md:text-lg absolute  ${
                    isHovered ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300`}
            >
        {description}
      </span>
        </div>
    );
};

export default HowItWorksItem;
