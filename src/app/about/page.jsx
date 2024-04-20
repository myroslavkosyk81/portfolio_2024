"use client"
import { delay, motion, useInView, useScroll  } from "framer-motion";
import Image from 'next/image';
import signature from  '../../../public/signature.svg';
import { useRef } from 'react';
import Brain from "@/components/brain2";

import mongoImg from "../../../public/img/mongodb.png";
import axiosImg from "../../../public/img/Axios_(computer_library)_logo.svg.png";
import reduxImg from "../../../public/img/Redux.png";
import jsImg from "../../../public/img/Unofficial_JavaScript_logo_2.svg.png";
import expressImg from "../../../public/img/express.png";
import firebaseImg from "../../../public/img/firebase.png";
import muiImg from "../../../public/img/mui.png";
import jwtImg from "../../../public/img/jwt.png";
import reactImg from "../../../public/img/react.png";
import nodeImg from "../../../public/img/node.png";
import cssImg from "../../../public/img/css.png";
import htmlImg from "../../../public/img/html.png";
import gitImg from "../../../public/img/git.png";
import styledImg from "../../../public/img/styled_components.png";
import stripeImg from "../../../public/img/stripe.svg";
import i18 from "../../../public/img/i18.png";
import vite from "../../../public/img/vite.svg";
import tailwind from "../../../public/img/tailwind.png";
import eslint from "../../../public/img/eslint.svg";
import nextjs from "../../../public/img/nextjs.png";
import framer from "../../../public/img/framer.png";
import swiper from  '../../../public/img/swiper-logo.svg';

const About = () => {
   const containerRef = useRef();
   const {scrollYProgress} = useScroll({container:containerRef});

   const skillRef = useRef();
   // const isSkillRefInView = useInView(skillRef, {once:true}, {margin: "-300px"});
   const isSkillRefInView = useInView(skillRef, {margin: "-300px"});
   const experienceRef = useRef();
   const isExperienceRefInView = useInView(experienceRef, {margin: "-400px"});
   const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          delayChildren: 0.5
        }
      }
    }
    
    const item = {
      hidden: { opacity: 0 },
      show: { opacity: 1 }
    }

   return (
      <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
         <div className="flex h-full relative overflow-scroll overflow-x-hidden" ref={containerRef}>

            {/* svg image */}
            <div className="flex justify-center w-full h-full sticky top-0">
               <Brain scrollYProgress={scrollYProgress} />
            </div>
            
            {/* text */}
            <div className="p-4 absolute top-20 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:pr-0 xl:1/2 z-30">
               {/* biography */}
               <div className="flex flex-col gap-12 justify-center">
                  <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                  <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias explicabo sit blanditiis eaque recusandae ipsam, nesciunt eius fugit et ducimus dolore. Repudiandae, reiciendis tempora? Dolore inventore officiis aut nostrum facere.
                  </p>
                  <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias explicabo sit blanditiis eaque recusandae ipsam, nesciunt eius fugit et ducimus dolore. Repudiandae, reiciendis tempora? Dolore inventore officiis aut nostrum facere.
                  </p>
                  <span className="italic">something</span>
                  <Image className="self-end w-64"
                     src={signature}
                     alt="signature" />
               </div>
               {/* skills */}
               <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
                  <motion.h1 variants={container} initial={{ x: "-300px"}} animate={isSkillRefInView ? { x: 0} : {}} transition={{delay: 0.2,  duration: 0.7 }} className="font-bold text-2xl">SKILLS</motion.h1>
                  {/* skill list */}
                  {/* <div>
                     <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
                  </div> */}
                  <motion.div initial={{ x: "-2000px"}} animate={isSkillRefInView ? { x: 0} : {}} transition={{delay: 0.2,  duration: 0.7 }} className="flex flex-wrap gap-2 items-center justify-center">
                    <Image src={jsImg} alt="jsImg" className="h-12 w-auto" />
                    <Image src={htmlImg} alt="" className="h-12 w-auto" /> 
                    <Image src={cssImg} alt="" className="h-12 w-auto" />   
                    <Image src={mongoImg} alt="" className="h-12 w-auto" />
                    <Image src={expressImg} alt="" className="h-12 w-auto" />
                    <Image src={reactImg} alt="" className="h-12 w-auto" />
                    <Image src={nodeImg} alt="" className="h-12 w-auto" />
                    <Image src={nextjs} alt="" className="h-12 w-auto" />
                    <Image src={vite} alt="" className="h-12 w-auto" />
                    <Image src={jwtImg} alt="" className="h-12 w-auto" />
                    <Image src={axiosImg} alt="" className="h-4 w-auto flex items-center" />
                    <Image src={reduxImg} alt="" className="h-12 w-auto" />
                    <Image src={firebaseImg} alt="" className="h-12 w-auto" />
                    <Image src={stripeImg} alt="" className="h-12 w-auto" />
                    <Image src={tailwind} alt="" className="h-10 w-auto" />
                    <Image src={muiImg} alt="" className="h-12 w-auto" />
                    <Image src={styledImg} alt="" className="h-12 w-auto" />
                    <Image src={swiper} alt="-" className="h-12 w-auto" />
                    <Image src={framer} alt="" className="h-12 w-auto" />
                    <Image src={i18} alt="" className="h-12 w-auto" />
                    <Image src={eslint} alt="" className="h-12 w-auto" />
                    <Image src={gitImg} alt="" className="h-12 w-auto" />
                    
                
                </motion.div>
                  {/* slill svg */}
                  {/* <Image className="self-end w-64"
                     src={signature}
                     alt="Follow us on Twitter" /> */}
               </div>
               {/* experience */}
               <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
                  {/* experience title */}
                  <motion.h1 initial={{x:"-2000px"}} animate={isExperienceRefInView ? {x:"0"} : {}} transition={{delay: 0.2,  duration: 0.7 }} className="font-bold text-2xl">EXPERIENCE</motion.h1>
                     
                     {/* experience list */}
                     <motion.div initial={{x:"2000px"}} animate={isExperienceRefInView ? {x:"0"} : {}} transition={{delay: 0.2,  duration: 0.7 }} className="">
                     
                     
                        {/* list item   1  */}
                        <div className="flex justify-between h-48">
                           
                           {/* left */}
                           <div className="w-1/3 bg">
                              <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Frelance</div>
                              <div className="p-3 text-sm italic">NEXT.JS</div>
                              <div className="p-3 text-red-400 text-sm font-semibold">2024</div>
                              <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Apple</div>
                           </div>
                           
                           {/* center */}
                           <div className="w-1/6 flex justify-center">
                              {/* line */}
                              <div className="w-1 h-full bg-gray-600 rounded relative">
                                 {/* circle */}
                                 <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                              </div>
                           </div>
                           
                           {/* right */}
                           <div className="w-1/3"></div>
                        </div>
                        
                        {/* list item   2  */}
                        <div className="flex justify-between h-48">
                           
                           {/* left */}
                           <div className="w-1/3 bg">
                              
                           </div>
                           
                           {/* center */}
                           <div className="w-1/6  flex justify-center">
                              {/* line */}
                              <div className="w-1 h-full bg-gray-600 rounded relative">
                                 {/* circle */}
                                 <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                              </div>
                           </div>
                           
                           {/* right */}
                           <div className="w-1/3">
                              <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Frelance</div>
                              <div className="p-3 text-sm italic">NEXT.JS</div>
                              <div className="p-3 text-red-400 text-sm font-semibold">2024</div>
                              <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Apple</div>
                           </div>
                        </div>
                        
                        {/* list item   3  */}
                        <div className="flex justify-between h-48">
                           
                           {/* left */}
                           <div className="w-1/3 bg">
                              <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Frelance</div>
                              <div className="p-3 text-sm italic">NEXT.JS</div>
                              <div className="p-3 text-red-400 text-sm font-semibold">2024</div>
                              <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Apple</div>
                           </div>
                           
                           {/* center */}
                           <div className="w-1/6 flex justify-center">
                              {/* line */}
                              <div className="w-1 h-full bg-gray-600 rounded relative">
                                 {/* circle */}
                                 <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                              </div>
                           </div>
                           
                           {/* right */}
                           <div className="w-1/3"></div>
                        </div>
                        
                  </motion.div>
               </div>
            </div>
            
         </div>
      </motion.div>
      
   )
}
// ORIGINAL VERSION
//    return (
//       <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
//          <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
//             {/* text */}
//             <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
//                {/* biography */}
//                <div className="flex flex-col gap-12 justify-center">
//                   <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
//                   <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias explicabo sit blanditiis eaque recusandae ipsam, nesciunt eius fugit et ducimus dolore. Repudiandae, reiciendis tempora? Dolore inventore officiis aut nostrum facere.</p>
//                   <span className="italic">something</span>
//                   <Image className="self-end w-64"
//                      src={signature}
//                      alt="signature" />
//                </div>
//                {/* skills */}
//                <div className="flex flex-col gap-12 justify-center">
//                   <h1 className="font-bold text-2xl">SKILLS</h1>
//                   {/* skill list */}
//                   {/* <div>
//                      <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
//                   </div> */}
//                   <div className="flex flex-wrap gap-2 items-center justify-center">
//                     <Image src={jsImg} alt="jsImg" className="h-12 w-auto" />
//                     <Image src={htmlImg} alt="" className="h-12 w-auto" /> 
//                     <Image src={cssImg} alt="" className="h-12 w-auto" />   
//                     <Image src={mongoImg} alt="" className="h-12 w-auto" />
//                     <Image src={expressImg} alt="" className="h-12 w-auto" />
//                     <Image src={reactImg} alt="" className="h-12 w-auto" />
//                     <Image src={nodeImg} alt="" className="h-12 w-auto" />
//                     <Image src={nextjs} alt="" className="h-12 w-auto" />
//                     <Image src={vite} alt="" className="h-12 w-auto" />
//                     <Image src={jwtImg} alt="" className="h-12 w-auto" />
//                     <Image src={axiosImg} alt="" className="h-4 w-auto flex items-center" />
//                     <Image src={reduxImg} alt="" className="h-12 w-auto" />
//                     <Image src={firebaseImg} alt="" className="h-12 w-auto" />
//                     <Image src={stripeImg} alt="" className="h-12 w-auto" />
//                     <Image src={tailwind} alt="" className="h-10 w-auto" />
//                     <Image src={muiImg} alt="" className="h-12 w-auto" />
//                     <Image src={styledImg} alt="" className="h-12 w-auto" />
//                     <Image src={swiper} alt="-" className="h-12 w-auto" />
//                     <Image src={framer} alt="" className="h-12 w-auto" />
//                     <Image src={i18} alt="" className="h-12 w-auto" />
//                     <Image src={eslint} alt="" className="h-12 w-auto" />
//                     <Image src={gitImg} alt="" className="h-12 w-auto" />
                    
                
//                 </div>
//                   {/* slill svg */}
//                   {/* <Image className="self-end w-64"
//                      src={signature}
//                      alt="Follow us on Twitter" /> */}
//                </div>
//                {/* experience */}
//                <div className="flex flex-col gap-12 justify-center">
//                   {/* experience title */}
//                   <h1 className="font-bold text-2xl">EXPERIENCE</h1>
//                   <div className="">
//                      {/* experience list */}
//                      <div className="">
//                         {/* list item   1  */}
//                         <div className="flex justify-between h-48">
                           
//                            {/* left */}
//                            <div className="w-1/3 bg">
//                               <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Frelance</div>
//                               <div className="p-3 text-sm italic">NEXT.JS</div>
//                               <div className="p-3 text-red-400 text-sm font-semibold">2024</div>
//                               <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Apple</div>
//                            </div>
                           
//                            {/* center */}
//                            <div className="w-1/6 flex justify-center">
//                               {/* line */}
//                               <div className="w-1 h-full bg-gray-600 rounded relative">
//                                  {/* circle */}
//                                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
//                               </div>
//                            </div>
                           
//                            {/* right */}
//                            <div className="w-1/3"></div>
//                         </div>
                        
//                         {/* list item   2  */}
//                         <div className="flex justify-between h-48">
                           
//                            {/* left */}
//                            <div className="w-1/3 bg">
                              
//                            </div>
                           
//                            {/* center */}
//                            <div className="w-1/6  flex justify-center">
//                               {/* line */}
//                               <div className="w-1 h-full bg-gray-600 rounded relative">
//                                  {/* circle */}
//                                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
//                               </div>
//                            </div>
                           
//                            {/* right */}
//                            <div className="w-1/3">
//                               <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Frelance</div>
//                               <div className="p-3 text-sm italic">NEXT.JS</div>
//                               <div className="p-3 text-red-400 text-sm font-semibold">2024</div>
//                               <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Apple</div>
//                            </div>
//                         </div>
                        
//                         {/* list item   3  */}
//                         <div className="flex justify-between h-48">
                           
//                            {/* left */}
//                            <div className="w-1/3 bg">
//                               <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Frelance</div>
//                               <div className="p-3 text-sm italic">NEXT.JS</div>
//                               <div className="p-3 text-red-400 text-sm font-semibold">2024</div>
//                               <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Apple</div>
//                            </div>
                           
//                            {/* center */}
//                            <div className="w-1/6 flex justify-center">
//                               {/* line */}
//                               <div className="w-1 h-full bg-gray-600 rounded relative">
//                                  {/* circle */}
//                                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
//                               </div>
//                            </div>
                           
//                            {/* right */}
//                            <div className="w-1/3"></div>
//                         </div>
                        
                        

//                      </div>

//                   </div>
//                </div>
//             </div>
//             {/* svg image */}
//             <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:1/2">
//                <Brain scrollYProgress={scrollYProgress} />
//             </div>
//          </div>
//       </motion.div>
      
//    )
// }

export default About;