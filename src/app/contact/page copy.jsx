"use client"
import { motion, useScroll  } from "framer-motion";
import Image from 'next/image';
import signature from  '../../../public/signature.svg';
import { useRef } from 'react';
import Brain from "@/components/brain2";


const Contact = () => {
   const containerRef = useRef();
   const {scrollYProgress} = useScroll({container:containerRef})

   return (
      <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
         <div className="flex h-full relative overflow-scroll overflow-x-hidden" ref={containerRef}>
            <div className="flex justify-center w-full h-full sticky top-0">
               <Brain scrollYProgress={scrollYProgress} />
            </div>
            {/* text */}
            <div className="p-4 absolute sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:pr-0 xl:1/2 z-30 ">
               {/* biography */}
               <div className="flex flex-col gap-12 justify-center">
                  <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                  <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias explicabo sit blanditiis eaque recusandae ipsam, nesciunt eius fugit et ducimus dolore. Repudiandae, reiciendis tempora? Dolore inventore officiis aut nostrum facere.</p>
                  <span className="italic">something</span>
                  <Image className="self-end w-64"
                     src={signature}
                     alt="signature" />
               </div>
               {/* skills */}
               <div className="flex flex-col gap-12 justify-center">
                  <h1 className="font-bold text-2xl">SKILLS</h1>
                  
               </div>
               {/* experience */}
               <div className="flex flex-col gap-12 justify-center">
                  {/* experience title */}
                  <h1 className="font-bold text-2xl">EXPERIENCE</h1>
                  <div className="">
                     {/* experience list */}
                     <div className="">
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
                        
                        

                     </div>

                  </div>
               </div>
            </div>
            {/* svg image */}
            
         </div>
      </motion.div>
      
   )
}

export default Contact;



// "use client"
// import { motion, useScroll  } from "framer-motion";
// import Image from 'next/image';
// import signature from  '../../../public/signature.svg';
// import { useRef } from 'react';
// import Brain from "@/components/brain";


// const Contact = () => {
//    const containerRef = useRef();
//    const {scrollYProgress} = useScroll({container:containerRef})
//    return (
//       <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
//          <div className="flex flex-col relative overflow-scroll">
//             <div className="h-full w-full bg-no-repeat fixed bg-transparent ">
//                <Brain scrollYProgress={scrollYProgress} />
               
//             </div>
//             <div className="flex flex-col gap-12 justify-center z-10">
//                   <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
//                   <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias explicabo sit blanditiis eaque recusandae ipsam, nesciunt eius fugit et ducimus dolore. Repudiandae, reiciendis tempora? Dolore inventore officiis aut nostrum facere.</p>
//                   <span className="italic">something</span>
//                   <Image className="self-end w-64"
//                      src={signature}
//                      alt="signature" />
//                </div>
//             <div className="flex flex-col gap-12 justify-center z-10">
//                   <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
//                   <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias explicabo sit blanditiis eaque recusandae ipsam, nesciunt eius fugit et ducimus dolore. Repudiandae, reiciendis tempora? Dolore inventore officiis aut nostrum facere.</p>
//                   <span className="italic">something</span>
//                   <Image className="self-end w-64"
//                      src={signature}
//                      alt="signature" />
//                </div>
//             <div className="flex flex-col gap-12 justify-center z-10">
//                   <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
//                   <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias explicabo sit blanditiis eaque recusandae ipsam, nesciunt eius fugit et ducimus dolore. Repudiandae, reiciendis tempora? Dolore inventore officiis aut nostrum facere.</p>
//                   <span className="italic">something</span>
//                   <Image className="self-end w-64"
//                      src={signature}
//                      alt="signature" />
//                </div>
//             <div className="flex flex-col gap-12 justify-center z-10">
//                   <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
//                   <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias explicabo sit blanditiis eaque recusandae ipsam, nesciunt eius fugit et ducimus dolore. Repudiandae, reiciendis tempora? Dolore inventore officiis aut nostrum facere.</p>
//                   <span className="italic">something</span>
//                   <Image className="self-end w-64"
//                      src={signature}
//                      alt="signature" />
//                </div>
//             <div className="flex flex-col gap-12 justify-center z-10">
//                   <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
//                   <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias explicabo sit blanditiis eaque recusandae ipsam, nesciunt eius fugit et ducimus dolore. Repudiandae, reiciendis tempora? Dolore inventore officiis aut nostrum facere.</p>
//                   <span className="italic">something</span>
//                   <Image className="self-end w-64"
//                      src={signature}
//                      alt="signature" />
//                </div>
//             <div className="flex flex-col gap-12 justify-center z-10">
//                   <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
//                   <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias explicabo sit blanditiis eaque recusandae ipsam, nesciunt eius fugit et ducimus dolore. Repudiandae, reiciendis tempora? Dolore inventore officiis aut nostrum facere.</p>
//                   <span className="italic">something</span>
//                   <Image className="self-end w-64"
//                      src={signature}
//                      alt="signature" />
//                </div>
//          </div>
         
//       </motion.div>
      
//    )
// }
// export default Contact;




// "use client"
// import { motion  } from "framer-motion";

// const Contact = () => {
//    return (
//       <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
//          Contact
//       </motion.div>
      
//    )
// }
// export default Contact;