"use client";
import Image from "next/image";
import Link from "next/link"
import { useState } from "react";
import NavLink from "./navLink";
import {motion} from "framer-motion";
const links = [
      {url: '/', title: 'Home'},
      {url: '/about', title: 'About'},
      {url: '/portfolio', title: 'Portfolio'},
      {url: '/contact', title: 'Contact'},
   ];
   
const Navbar = () => {
   const [open, setOpen] = useState(false);
   const topVariants={
      closed: {
         rotate:0,
      },
      opened:{
         rotate:45,
         backgroundColor:"rgb(255,255,255)",
      },
   };
   const centerVariants={
      closed: {
         opacity:1,
      },
      opened:{
         opacity:0,
      },
   };
   const bottomVariants={
      closed:{
         rotate:0,
      },
      opened: {
         rotate:-45,
         backgroundColor:"rgb(255,255,255)",
      },
   };
   const listVariants={
      closed: {
         x: "100vw",
      },
      opened:{
         x: 0,
         transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
         },
      },
   };
   const listItemVariants = {
      closed: {
         x: -10,
         opacity: 0,
      },
      opened: {
         x: 0,
         opacity: 1,
      },
   }

   return (
      <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
         {/* links */}
         <div className="hidden md:flex gap-4 w-1/3">
            {links.map(link => (
               <NavLink link={link} key={link.title} />
            ))}
         </div>
         {/* logo */}
         <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
            <Link href="/" className="text-sm bg-indigo-950 rounded-md p-1 font-semibold flex items-center justify-center">
               <span className="text-white mr-1">Myroslav</span>
               <span className="w-12 h-8 ronded bg-white text-indigo-950 flex items-center justify-center">Kosyk</span>
            </Link>
         </div>
         {/* social links */}
         <div className=" flex md:flex gap-4 w-1/3">
            <Link href='https://github.com/myroslavkosyk81'>
               <Image src='/github.png' alt='github' width ={24} height={24} />
            </Link>
            <Link href='https://www.facebook.com/myroslav.kosyk?locale=uk_UA'>
               <Image src='/facebook.png' alt='facebook' width ={24} height={24} />
            </Link>
            <Link href='https://www.linkedin.com/in/myroslav-kosyk-8b5155240/'>
               <Image src='/linkedin.png' alt='linkedin' width ={24} height={24} />
            </Link>
         </div>
         
         {/* menu */}
         <div className="md:hidden">
            <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={()=>setOpen((prev) => !prev)}>
               <motion.div variants={topVariants} animate={open? "opened" : "closed"} className="w-10 h-1 bg-indigo-950 rounded origin-left"></motion.div>
               <motion.div variants={centerVariants} animate={open? "opened" : "closed"} className="w-10 h-1 bg-indigo-950 rounded"></motion.div>
               <motion.div variants={bottomVariants} animate={open? "opened" : "closed"} className="w-10 h-1 bg-indigo-950 rounded origin-left"></motion.div>
            </button>
            
            {open && (
               <motion.div variants={listVariants} initial="closed" animate='opened' className="absolute top-0 left-0 w-screen h-screen bg-indigo-950 text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
               {links.map((link) => (
                  <motion.div variants={listItemVariants} className="" key={link.title}>
                     <Link href={link.url} >
                        {link.title}
                     </Link>
                  </motion.div>
                  
               ))}
               </motion.div>
               )           
            }
            
         </div>
      </div>
   )
}

export default Navbar