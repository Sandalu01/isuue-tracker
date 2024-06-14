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
    { label: '', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'isuues', href: '/isuues' },
    { label: 'Contact', href: '/contact' },
    { label: 'Login', href: '/login' },
    { label: 'Register', href: '/register' },
    { label: 'Dashboard', href: '/' },
    {label: 'Issues', href: '/issues'}
  ]


  return (
   <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center '>
      <Link href='/'><GrBug /></Link>
      {/* css apply for each nave bar words */}
    <ul className='flex space-x-6'>
        {links.map(link=> 
        // 'text-zinc-400 hover:text-zinc-50 transition-color '
           
            <Link href= {link.href}
            key={link.href}
            className={classnames({
                'text-zinc-500 ': currentpath === link.href,
                'text-zinc-500': currentpath!== link.href,
                'hover: text-zinc-50 transition-colors': true
            })}>
            {link.label}
           </Link>
        )}
    
    </ul>
   

   </nav>
  )
} 

export default Navbar