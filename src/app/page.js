"use client"
import Image from "next/image";
import Link from "next/link";
import { motion  } from "framer-motion";

export default function Home() {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <motion.div initial={{ x: "-40px", opacity: 0}} animate={{x: "0", opacity: 1}} transition={{delay: 1,  duration: 1.7 }} className="h-1/2 lg:h-full lg:w-1/2 relative">
          {/* img */}
          <Image src='/photo.png' alt="" fill className="object-contain" />
        </motion.div>
        {/* text */}
        <motion.div initial={{ x: "40px", opacity: 0}} animate={{x: "0", opacity: 1}} transition={{delay: 1.5,  duration: 1.7 }} className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold">Creating web apps</h1>
          <p className="md:text-xl">
            Hello! Welcome to my digital world of code! I am a software developer specializing in building websites and applications using JavaScript, React, Node.js, Next.js
          </p>
          {/* duttons */}
          <div className=" flex gap-4">
            <motion.div initial={{ y: "40px", opacity: 0}} animate={{y: "0", opacity: 1}} transition={{delay: 2,  duration: 1.7 }} className=" flex gap-4">
            <Link href='/portfolio' >
               <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View my works</button>         
            </Link>
          </motion.div>
          
          <motion.div initial={{ y: "40px", opacity: 0}} animate={{y: "0", opacity: 1}} transition={{delay: 2.5,  duration: 1.7 }} className=" flex gap-4">
            
            <Link href='/contact' >
            <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>         
            </Link>
          </motion.div>
          </div>
          
        </motion.div>
    </div>
    </motion.div>
  
    
  );
}
