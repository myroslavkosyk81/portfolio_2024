'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
   const pathName = usePathname();
   // console.log(pathName)
   return (
      <Link className={`rounded p-1 ${pathName === link.url && 'bg-indigo-900 text-white'}`} href={link.url}>
         {link.title}
      </Link>
   );
};

export default  NavLink;