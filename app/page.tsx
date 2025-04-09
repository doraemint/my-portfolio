// import Image from "next/image";

import { Button } from "@/components/ui/button";
import PhotoProfile from "@/components/ui/custom/photoProfile";
import Socials from "@/components/ui/custom/socials";
import Stats from "@/components/ui/custom/stats";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Frontend Developer</span>
            <h1 className="mb-6">
              Hello I&apos;m <br />
              <span className="text-accent-light dark:text-accent-dark">
                Anthika Jirattnanon
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-gray-400">
              Transforming ideas into engaging digital experiences through a mix
              of creativity, and a passion for programming and technologies.
            </p>
            {/* Button  */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link
                href="/assets/files/resume-anthika.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
              {/* Socials */}
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent-light dark:border-accent-dark rounded-full flex justify-center items-center text-accent-light 
                  dark:text-accent-dark text-base hover:bg-accent-light dark:hover:bg-accent-dark hover:text-white dark:hover:text-primary
                  hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <PhotoProfile />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
