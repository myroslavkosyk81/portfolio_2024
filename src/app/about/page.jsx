"use client"
import { delay, motion, useInView, useScroll  } from "framer-motion";
import Image from 'next/image';
import signature from  '../../../public/signature.svg';
import arrowImg from  '../../../public/arrow.svg';
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
import emailjs from  '../../../public/img/emailjs.png';

const About = () => {
   const containerRef = useRef();
   const {scrollYProgress} = useScroll({container:containerRef});

   const skillRef = useRef();
   // const isSkillRefInView = useInView(skillRef, {once:true}, {margin: "-300px"});
   const isSkillRefInView = useInView(skillRef, {margin: "-50px"});
   const experienceRef = useRef();
   const isExperienceRefInView = useInView(experienceRef, {margin: "-50px"});

   return (
      <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
         <div className="flex h-full relative overflow-scroll overflow-x-hidden" ref={containerRef}>

            {/* svg image */}
            <div className="flex justify-center w-full h-full sticky top-0">
               <Brain scrollYProgress={scrollYProgress} />
            </div>
            
            {/* text */}
            <div className="p-4 absolute top-20 sm:p-8 md:p-12 lg:p-20 xl:p-24 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:pr-0 xl:1/2 z-30">
               {/* biography */}
               <div className="flex flex-col gap-12 justify-center">
                  <h1 className="font-bold text-2xl">ABOUT ME</h1>
                  <p className="text-lg pt-1">Myroslav Kosyk, who helps small and medium businesses particularly agencies or companies and individuals by providing top-notch, high-quality and reliable website development support.
                  </p>
                  <p className="text-lg pt-1">
                  So they can focus on what they do best, increase productivity, take on new clients and grow their business. He has partnered with businesses, marketing professionals, agencies, and consultancies from around the world since 2021, becoming his extended development department.
                  Feel free to articulate your requirements, and I will meticulously analyze and propose a tailored solution. If you find my expertise aligns with your needs, please engage further; otherwise, I appreciate your consideration.
                  </p>
                  <p className="text-lg pt-1">
                  Let's collaborate and turn your ideas into remarkable digital experiences! Here are a few technologies I have been working with recently:
                  </p>
                  {/* <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias explicabo sit blanditiis eaque recusandae ipsam, nesciunt eius fugit et ducimus dolore. Repudiandae, reiciendis tempora? Dolore inventore officiis aut nostrum facere.
                  </p> */}
                  {/* <span className="italic">something</span> */}
                  <Image className="self-end w-64"
                     src={signature}
                     alt="signature" />
                    {/* arrow */}
               <motion.div initial={{opacity: 0.2, y: 0}} animate={{opacity: 1, y: "10px"}} transition={{repeat:Infinity, duration: 2, ease: "easeInOut"}} className="w-6">
                  <Image className="h-7"
                     src={arrowImg}
                     alt="arrow" />
               </motion.div> 
               </div>
               
               
               {/* skills */}
               <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
                  <motion.h1 initial={{ x: "-40px", opacity: 0}} animate={isSkillRefInView ? { x: 0, opacity: 1} : {}} transition={{delay: 0.2,  duration: 0.5 }} className="font-bold text-2xl">SKILLS</motion.h1>
                  {/* skill list */}
                  {/* <div>
                     <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
                  </div> */}
                  <motion.div initial={{ x: "-2000px", opacity: 0}} animate={isSkillRefInView ? { x: 0, opacity: 1} : {}} transition={{delay: 0.2,  duration: 1.2 }} className="flex flex-wrap gap-2 items-center justify-center">
                     <div className="flex items-center justify-center flex-col rounded p-2 text-sm cursor-pointer hover:scale-[1.5] transition-scale duration-300">
                        <Image src={jsImg} alt="jsImg" className="h-12 w-auto " />
                        <span className=" text-sm">JavaScript</span>
                     </div>
                     <div className="flex items-center justify-center flex-col rounded p-2 text-sm cursor-pointer hover:scale-[1.5] transition-scale duration-300">
                        <Image src={htmlImg} alt="" className="h-12 w-auto" />
                        <span className=" text-sm">HTML 5</span>
                     </div>
                     <div className="flex items-center justify-center flex-col rounded p-2 text-sm cursor-pointer hover:scale-[1.5] transition-scale duration-300">
                        <Image src={cssImg} alt="" className="h-12 w-auto" />
                        <span className=" text-sm">CSS</span>
                     </div>
                     <div className="flex items-center justify-center flex-col rounded p-2 text-sm cursor-pointer hover:scale-[1.5] transition-scale duration-300">
                        <Image src={mongoImg} alt="" className="h-12 w-auto " />
                        <span className=" text-sm">MongoDB</span>
                     </div>
                     <div className="flex items-center justify-center flex-col rounded p-2 text-sm cursor-pointer hover:scale-[1.5] transition-scale duration-300">
                        <Image src={expressImg} alt="" className="h-12 w-auto " />
                        <span className=" text-sm">Express.js</span>
                     </div>
                     <div className="flex items-center justify-center flex-col rounded p-2 text-sm cursor-pointer hover:scale-[1.5] transition-scale duration-300">
                        <Image src={reactImg} alt="" className="h-12 w-auto " />
                        <span className=" text-sm">React</span>
                     </div>
                     <div className="flex items-center justify-center flex-col rounded p-2 text-sm cursor-pointer hover:scale-[1.5] transition-scale duration-300">
                        <Image src={nodeImg} alt="" className="h-12 w-auto " />
                        <span className=" text-sm">Node.js</span>
                     </div>
                     <div className="flex items-center justify-center flex-col rounded p-2 text-sm cursor-pointer hover:scale-[1.5] transition-scale duration-300">
                        <Image src={nextjs} alt="" className="h-12 w-auto " />
                        <span className=" text-sm">Next.js</span>
                     </div>
                     <div className="flex items-center justify-center flex-col rounded p-2 text-sm cursor-pointer hover:scale-[1.5] transition-scale duration-300">
                        <Image src={vite} alt="" className="h-12 w-auto " />
                        <span className=" text-sm">Vite</span>
                     </div>
                     <div className="flex items-center justify-center flex-col rounded p-2 text-sm cursor-pointer hover:scale-[1.5] transition-scale duration-300">
                        <Image src={jwtImg} alt="" className="h-12 w-auto " />
                        <span className=" text-sm">JSON Web Token</span>
                     </div>
                     <div className="flex items-center justify-center flex-col rounded p-2 text-sm cursor-pointer hover:scale-[1.5] transition-scale duration-300">
                        <div className=" flex items-center justify-center h-12 w-auto ">
                           <Image src={axiosImg} alt="" className="h-4 w-auto" />
                        </div>
                        
                        <span className=" text-sm">Axios</span>
                     </div>
                     <div className="flex items-center justify-center flex-col rounded p-2 text-sm cursor-pointer hover:scale-[1.5] transition-scale duration-300">
                        <Image src={reduxImg} alt="" className="h-12 w-auto " />
                        <span className=" text-sm">Redux</span>
                     </div>
                     <div className="flex items-center justify-center flex-col rounded p-2 text-sm cursor-pointer hover:scale-[1.5] transition-scale duration-300">
                        <Image src={firebaseImg} alt="" className="h-12 w-auto " />
                        <span className=" text-sm">Firebase</span>
                     </div>
                     <div className="flex items-center justify-center flex-col rounded p-2 text-sm cursor-pointer hover:scale-[1.5] transition-scale duration-300">
                        <Image src={stripeImg} alt="" className="h-12 w-auto " />
                        <span className=" text-sm">Stripe</span>
                     </div>
                     <div className="flex items-center justify-center flex-col rounded p-2 text-sm cursor-pointer hover:scale-[1.5] transition-scale duration-300">
                        <Image src={tailwind} alt="" className="h-12 w-auto " />
                        <span className=" text-sm">Tailwind CSS</span>
                     </div>
                     <div className="flex items-center justify-center flex-col rounded p-2 text-sm cursor-pointer hover:scale-[1.5] transition-scale duration-300">
                        <Image src={muiImg} alt="" className="h-12 w-auto " />
                        <span className=" text-sm">MUI</span>
                     </div>
                     <div className="flex items-center justify-center flex-col rounded p-2 text-sm cursor-pointer hover:scale-[1.5] transition-scale duration-300">
                        <Image src={styledImg} alt="" className="h-12 w-auto " />
                        <span className=" text-sm">Styled-components</span>
                     </div>
                     <div className="flex items-center justify-center flex-col rounded p-2 text-sm cursor-pointer hover:scale-[1.5] transition-scale duration-300">
                        <Image src={swiper} alt="-" className="h-12 w-auto " />
                        <span className=" text-sm">Swiper</span>
                     </div>
                     <div className="flex items-center justify-center flex-col rounded p-2 text-sm cursor-pointer hover:scale-[1.5] transition-scale duration-300">
                        <Image src={framer} alt="" className="h-12 w-auto " />
                        <span className=" text-sm">Framer</span>
                     </div>
                     <div className="flex items-center justify-center flex-col rounded p-2 text-sm cursor-pointer hover:scale-[1.5] transition-scale duration-300">
                        <Image src={i18} alt="" className="h-12 w-auto " />
                        <span className=" text-sm">i18next</span>
                     </div>
                     <div className="flex items-center justify-center flex-col rounded p-2 text-sm cursor-pointer hover:scale-[1.5] transition-scale duration-300">
                        <Image src={eslint} alt="" className="h-12 w-auto " />
                        <span className=" text-sm">ESLint</span>
                     </div>
                     <div className="flex items-center justify-center flex-col rounded p-2 text-sm cursor-pointer hover:scale-[1.5] transition-scale duration-300">
                        <Image src={emailjs} alt="" className="h-12 w-auto " />
                        <span className=" text-sm">EmailJS</span>
                     </div>
                     <div className="flex items-center justify-center flex-col rounded p-2 text-sm cursor-pointer hover:scale-[1.5] transition-scale duration-300">
                        <Image src={gitImg} alt="" className="h-12 w-auto " />
                        <span className=" text-sm">GitHub</span>
                     </div>
                     
                </motion.div>
                <motion.div initial={{opacity: 0.2, y: 0}} animate={{opacity: 1, y: "10px"}} transition={{repeat:Infinity, duration: 2, ease: "easeInOut"}} className="w-6">
                  <Image className="h-7"
                     src={arrowImg}
                     alt="arrow" />
               </motion.div>
                  {/* slill svg */}
                  {/* <Image className="self-end w-64"
                     src={signature}
                     alt="Follow us on Twitter" /> */}
               </div>
               {/* experience */}
               <div className="flex flex-col gap-4 md:gap-8 lg:gap-12 justify-center pb-48" ref={experienceRef}>
                  {/* experience title */}
                  <motion.h1 initial={{x:"-2000px"}} animate={isExperienceRefInView ? {x:"0"} : {}} transition={{delay: 0.2,  duration: 0.5 }} className="font-bold text-2xl">EXPERIENCE</motion.h1>
                     
                     {/* experience list */}
                     <motion.div initial={{x:"2000px", opacity: 0}} animate={isExperienceRefInView ? {x:"0", opacity: 1} : {}} transition={{delay: 0.2,  duration: 1.2 }} className="">
                     
                     
                        {/* list item   1  */}
                        <div className="flex justify-between h-48">
                           
                           {/* left */}
                           <div className="w-1/3 bg">
                              <div className="bg-white p-1 md:p-3 font-semibold rounded-b-lg rounded-s-lg">Freelance</div>
                              <div className="p-1 md:p-3 text-sm italic">Next.js, Vite,Tailwind CSS, i18next, Swiper, Framer, EmailJS</div>
                              <div className="p-1 md:p-3 text-red-400 text-sm font-semibold">2024</div>
                              {/* <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Freelance</div> */}
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
                              <div className="bg-white p-1 md:p-3 font-semibold rounded-b-lg rounded-s-lg">Freelance</div>
                              <div className="p-1 md:p-3 text-sm italic">Vite, Firebase, Mui, Styled-components, Stripe, ESLint</div>
                              <div className="p-1 md:p-3 text-red-400 text-sm font-semibold">2023</div>
                              {/* <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Freelance</div> */}
                           </div>
                        </div>
                        
                        {/* list item   3  */}
                        <div className="flex justify-between h-48">
                           
                           {/* left */}
                           <div className="w-1/3 bg">
                              <div className="bg-white p-1 md:p-3 font-semibold rounded-b-lg rounded-s-lg">Freelance</div>
                              <div className="p-1 md:p-3 text-sm italic">JS, HTML, CSS, Node.js, MongoDB, Express, React, Redux, JSON Web Token, Axios, GitHub</div>
                              <div className="p-1 md:p-3 text-red-400 text-sm font-semibold">2021-2022</div>
                              {/* <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Freelance</div> */}
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