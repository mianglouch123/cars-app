import Image from "next/image"
import { v4 as uuidv4 } from 'uuid';

function Footer() {

type ItemsFooterInterface  = {
        
        name : string,
        subItems : string[]
    }


const ITEMS_FOOTER : ItemsFooterInterface[] = 
[
  {
    name : 'About',
    subItems : ["How it works" , "Featured" , "Partnership" , "Bussiness Relation"]
  } ,
  {
    name: 'Company',
    subItems : ["Events" , "Blog" , "Company" , "Socials"]
  },

   {
    name : "Socials",
    subItems:["Discord" , "Instagram" , "Twitter" , "Facebook"]
   }


]

  return (
    <>
      <div className="flex items-start flex justify-around gap-12 mt-24 p-4">

<div className="flex items-center justify-center gap-4 p-2 flex-col">
  <div>
   <Image src={`/logo.svg`} height={100} width={100} alt="logo footer png"/>
  </div>

  <div>
   <p>Car App Miang 2024</p>
  </div>

  <div>
  All rights reserved ©
  </div>

</div>

{
   ITEMS_FOOTER.map((item) => (
       <div key={item.name} className="flex items-center justify-around gap-12 p-2">
         <div className="flex items-center justify-center gap-12 flex-col">
           <p className="font-semibold">{item.name}</p>
           {item.subItems.map((subItem) => (
             <>
         <p key={uuidv4()}  className="text-[#6b7484]">{subItem}</p>
             </>
))}
         </div>

       
       </div>
   ) )
}


 

 </div >
     

   <div className="flex items-center justify-center flex-col p-12">
   <div className="h-[1px] w-[100%] shadow:sm bg-[#f3f4f6]"></div>

   <div className="flex items-center justify-around gap-48 pt-4 p-3 text-[#6b7484]">
    <p>@2023 CarHub. All Rights Reserved</p>

    <div className="flex items-center justifiy-center gap-4 text-[#6b7484]">
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
    </div>


   </div>

   


  
  </div>

    
    </>


  )

}

export default Footer