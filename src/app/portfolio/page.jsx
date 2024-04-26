"use client"
import { motion, useScroll, useTransform  } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Items from "../../../public/portfolio.js"

// const items = [
//    {
//      id: 1,
//      color: "from-red-300 to-blue-300",
//      title: "Real Estate app",
//      desc: "BestDomivka - це платформа, яка пропонує вам найкращі пропозиції нерухомості в Україні. Ми не просто черговий онлайн-сервіс, ми пропонуємо вам справжню якість і задоволення.",
//      img: "https://firebasestorage.googleapis.com/v0/b/portfolio2-85c57.appspot.com/o/best_domivka.jpg?alt=media&token=7c5efffa-8d8b-4d70-b333-7db3125b4f44",
//      link: "https://mern-real-estate-app-ut58.onrender.com",
//    },
//    {
//      id: 2,
//      color: "from-blue-300 to-violet-300",
//      title: "YummyCakes online store (e-commerce project)",
//      desc: "An eCommerce project developed using MERN technologies. It is a vast project involving front and back-end technologies and database knowledge for efficient execution and implementation. Also developed an application for administration of eCommerce app, which allows working with products, users, administration of sales statistics, etc.",
//      img: "https://firebasestorage.googleapis.com/v0/b/portfolio2-85c57.appspot.com/o/yummycakesuser.jpg?alt=media&token=a532d1d0-7494-425f-accd-36affabeb99e",
//      link: "https://yummycakesuser.vercel.app/",
//    },
//    {
//      id: 3,
//      color: "from-violet-300 to-purple-300",
//      title: "Admin dashboard for YummyCakes online store",
//      desc: "An eCommerce project developed using MERN technologies. It is a vast project involving front and back-end technologies and database knowledge for efficient execution and implementation. Also developed an application for administration of eCommerce app, which allows working with products, users, administration of sales statistics, etc.",
//      img: "https://firebasestorage.googleapis.com/v0/b/portfolio2-85c57.appspot.com/o/yummycakesAdmin.jpg?alt=media&token=05d6cfac-f123-403e-a95e-45f0c39e8d9a",
//      link: "https://yummycakes-admin.vercel.app/products",
//    },
//    {
//      id: 4,
//      color: "from-purple-300 to-red-300",
//      title: "Portfolio React App",
//      desc: "My first portfolio site.",
//      img: "https://firebasestorage.googleapis.com/v0/b/portfolio2-85c57.appspot.com/o/portfolio.jpg?alt=media&token=50b4706c-99ac-46d5-b6b4-5bd19d1b3a56",
//      link: "https://portfolio-mk-2023.vercel.app/",
//    },
//    {
//      id: 5,
//      color: "from-purple-300 to-red-300",
//      title: "LearnAndGrow studying platform",
//      desc: "A learning platform developed for schoolchildren. Allows schoolchildren to write down and use all the necessary knowledge previously entered. It is a vast project involving front and back-end technologies and database knowledge for efficient execution and implementation.",
//      img: "https://firebasestorage.googleapis.com/v0/b/portfolio2-85c57.appspot.com/o/learnandgrow.jpg?alt=media&token=15fd3be4-e945-4a93-98a9-a78ee2882f87",
//      link: "https://learnandgrow.vercel.app/",
//    },
//  ];
 
const Portfolio = () => {
   const ref = useRef();
   const { scrollYProgress } = useScroll({ target: ref})
      
   const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

   return (
      <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
         <div className="h-[600vh] relative">
            <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">My Works</div>

            <div className=" sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
               <motion.div style={{ x:x}} className=" flex">
                  <div className=" h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-200 to-red-200"/>
                  {Items.map((item) => (
                     <div className={` h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} key={item.id}>
                        
                        <div className=" flex flex-col gap-8 text-white">
                           <h1 className=" text-xl font-bold md:text-4xl lg:text-4xl xl:text-6xl">{item.title}</h1>
                           <div className=" relative w-80 h-56 md:w-96 md:h-64 lg:w-[450px] lg:h-[300px] xl:w-[500px] xl:h-[320px]">
                              <Image fill={true} src={item.img} alt=""></Image>
                           </div>
                           <p className=" w-80 md:w-96 lg:w-[500px] lg:text-lg xl:-[600px]">{item.desc}</p>
                           <Link href={item.link} className="flex justify-end">
                              <button className="p-2 text-sm md:p-4 md:text-md lg:text-lg bg-white text-gray-600 font-semiboldm-4 rounded-md">See Demo</button>
                           </Link>
                        </div>
                        
                     </div>
                  ))}
                  <div className=" h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-200 to-red-200"/>
                  <div className=" h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-200 to-red-200"/>
               </motion.div>
               
               
            </div>
         </div>

         <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
            <h1 className=" text-8xl">Do you have a project</h1>
            <div className="relative">
               <motion.svg animate={{rotate:360}} transition={{duration:8, ease:"linear", repeat:Infinity}} viewBox="0 0 300 300" className="w-64 h-64 md:w-[500px] md:h-[500px]">
                  <defs>
                     <path 
                     id="circlePath"
                     d="M 150, 150 m -60, 0 a 60,60 0 0, 1 120, 0 a 60,60 0 0, 1 -120,0" />
                  </defs>
                  <text fill="#000">
                     <textPath xlinkHref="#circlePath" className="text-xl">
                       Back-end and Front-end Developer
                     </textPath>
                  </text>
               </motion.svg>
               <Link href='/contact' className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center">
               
                  Hire Me
               </Link>
               
            </div>
         </div>
      </motion.div>
      
   )
}
export default Portfolio;