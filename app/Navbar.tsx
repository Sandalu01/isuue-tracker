"use client"
import React from 'react'
import Link from 'next/link';
import { GrBug } from "react-icons/gr";
import { usePathname } from 'next/navigation';
import classnames from 'classnames';
const Navbar = () => {
    
const currentpath = usePathname();
console.log(currentpath);

const links = [
    { label: '', href: '/dashboard' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'About', href: '/about' },
 
    { label: 'Contact', href: '/contact' },
    { label: 'Login', href: '/login' },
    { label: 'Register', href: '/register' },

    
  ]


  return (
    <div className="">
   <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center bg-blue-600 justify-end '>
      <div className='flex-none'><Link href='/dashboard'><GrBug className='text-white text-2xl' /></Link></div>
      {/* css apply for each nave bar words */}
     
    <ul className='flex space-x-6 '>
        {links.map(link=> 
        // 'text-zinc-400 hover:text-zinc-50 transition-color '
           
            <Link href= {link.href}
            key={link.href}
            className={classnames({
                'text-zinc-900 ': currentpath === link.href,
                'text-zinc-100': currentpath!== link.href,
                
                'hover: text-zinc-100 transition-colors': true
            })}>
            {link.label}
           </Link>
        )}
    
    </ul>
 
   

   </nav>
   </div>
  )
} 

export default Navbar