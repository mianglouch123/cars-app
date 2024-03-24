"use client"
import Image from "next/image"
import Link from "next/link"


function Navbar() {



 return (
    <div className="h-[120px] w-100% bg-white flex justify-around items-center gap-16">
     <div className="flex items-center justify-center gap-4 mr-[550px]">
     <Link href={'/'}>
      <Image
       height={110}
       width={110}
       alt="Logo Navbar car applicattion"
       src={`/logo.svg`}
       className="object-cover"
      />
     </Link>
     </div>

      <div className="flex items-center justify-around gap-6">
        <p className="text-blue-500 p-2 rounded-[25px] bg-white">Sign in</p>
        <p>Info</p>
      </div>
    </div>
 )
 

}

export default Navbar