"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const PhotoProfile = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-darken dark:mix-blend-lighten absolute"
        >
          <Image
            src="/assets/imgs/me.png"
            alt="Me Photo"
            priority
            quality={100}
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Square */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.rect
            x="5"
            y="5"
            width="500"
            height="500"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="square"
            strokeLinejoin="round"
            fill="none"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-accent-light dark:text-accent-dark"
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};
export default PhotoProfile;
