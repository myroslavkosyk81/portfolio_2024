"use client"
import Image from "next/image";
import { motion  } from "framer-motion";

export default function Home() {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        {/* img */}
        <Image src='/photo.png' alt="" fill className="object-contain" />
      </div>
      {/* text */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold">Creating web apps</h1>
        <p className="md:text-xl">
          Welcome to my your digital world of  code! I am a software developer specializing in building websites and applications using JavaScript, React, Node JS
        </p>
        {/* duttons */}
        <div className=" flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View my works</button>
          <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
        </div>
      </div>
    </div>
    </motion.div>
  
    
  );
}
