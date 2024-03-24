import Image from "next/image"
import Link from "next/link"

function HeroBanner() {
    return (
     
     <main className="h-100vh w-100vw flex flex-col items-center justify-center">
     <div className="flex items-center justify-center gap-16">
      
      <div>
      <p className="font-bold text-[45px]"> Find , Book , <br /> rent A Car - <br /> Quick And Easy</p>

      <p>Streamline your car rentail experience with our effortless booking process</p>
      <button className="mt-4 bg-blue-500 text-white p-2 rounded-[25px]">
        <Link href={'/cars'}>Explore Cars</Link>
      </button>
     </div>

     <Image
       src={`/hero.png`}
       alt="Car Image Banner"
       height={600}
       width={600}
       className='object-cover'
       />
      </div>
       
      
     
     

     
    
    
    </main>


    )
}

export default HeroBanner