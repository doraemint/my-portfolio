"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+66) 63-446-8506",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "anthika.ji@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Huai Khwang, Bangkok, Thailand 10310",
  },
];
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  SelectGroup,
  SelectItem,
  Select,
  SelectContent,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const ContactPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c]">
              <h3 className="text-4xl text-accent-light dark:text-accent-dark">
                Let&apos;s work together
              </h3>
              <p className="text-primary/60 dark:text-white/60"></p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname"></Input>
                <Input type="lastname" placeholder="Lastname"></Input>
                <Input type="email" placeholder="Email Address"></Input>
                <Input type="phone" placeholder="Phone number"></Input>
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="fe">Front-End Developer</SelectItem>
                    <SelectItem value="jbe">
                      Junior Back-End Developer
                    </SelectItem>
                    <SelectItem value="jfull-stack">
                      Junior Full Stack Developer
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            info
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default ContactPage;
