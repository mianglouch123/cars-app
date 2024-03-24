"use client"

import {useEffect} from "react"
import { ApiResponseCar } from "types/api.response"
import { v4 as uuidv4 } from 'uuid';
import Image from "next/image"


interface CarModalProps {
    cars: ApiResponseCar
    isOpen: boolean
    openModal: () => void;
    closeModal: () => void;
  }
  
  type ItemsType  = {
    title : string,
    text : string | number
  }
  
function CarModal({cars , isOpen , openModal , closeModal } : CarModalProps) {



  const ITEMS : ItemsType[]  = [
    {
      title : 'City Mpg',
      text :  cars.city_mpg

    },
    {
      title : 'Class',
      text :  cars.class

    },{
      title : 'Combination Mpg',
      text :  cars.combination_mpg

    },{
      title : 'Cylinders',
      text :  cars.cylinders

    },{
      title : 'Displacement',
      text :  cars.displacement

    },{
      title : 'Drive',
      text :  cars.drive

    },
    {
      title : 'Fuel Type',
      text :  cars.fuel_type

    },{
      title : 'Highway Mpg',
      text :  cars.highway_mpg

    },{
      title : 'Make',
      text :  cars.make

    },{
      title : 'Model',
      text :  cars.model

    },
    {
      title : 'Trasmision',
      text :  cars.transmission

    },
    {
      title : 'Year',
      text :  cars.year

    },
    
  ]


  useEffect(() => {
    if(isOpen) {
      window.scrollTo(0, 0)
    }
  }, [isOpen])

    return (
      <>
      {isOpen && (
            <div className="flex pl-4 items-start rounded-[17px] justify-center gap-4 flex-col z-50   bg-white absolute m-auto center rounded-[7px] h-[780px] mt-24 w-[500px] inset-0 flex  bg-white">
       
            <div className="flex h-[100px] w-[100%] relative justify-center items-center bg-[url('/pattern.png')]">
            <Image src={`https://cars-showcase-ftmk.vercel.app/_next/image?url=https%3A%2F%2Fcdn.imagin.studio%2Fgetimage%3Fcustomer%3Dhrjavascript-mastery%26make%3Dhonda%26modelFamily%3Dodyssey%26zoomType%3Dfullscreen%26modelYear%3D2022%26angle%3Dundefined&w=640&q=75`} className="object-cover" height={250} width={250} alt={cars.make + 'car'} />

            </div>
             <div onClick={closeModal} className="absolute top-0 right-0 cursor-pointer">
            <Image src={`/close.svg`} alt="close icon" height={30} width={30}/>
             </div>
            
            
            <section className="flex itesms-center justify-center gap-4">
            <div className="bg-[#f5f8ff]">
        
              <Image src={`https://cars-showcase-ftmk.vercel.app/_next/image?url=https%3A%2F%2Fcdn.imagin.studio%2Fgetimage%3Fcustomer%3Dhrjavascript-mastery%26make%3Dkia%26modelFamily%3Dstinger%26zoomType%3Dfullscreen%26modelYear%3D2022%26angle%3D29&w=1200&q=75`} className="object-cover" height={150} width={150} alt={cars.make + 'car left'} />
        
            </div>
             <div className="bg-[#f5f8ff]"> 
        
            <Image src={`https://cars-showcase-ftmk.vercel.app/_next/image?url=https%3A%2F%2Fcdn.imagin.studio%2Fgetimage%3Fcustomer%3Dhrjavascript-mastery%26make%3Dkia%26modelFamily%3Dstinger%26zoomType%3Dfullscreen%26modelYear%3D2022%26angle%3D33&w=1200&q=75`} className="object-cover" height={150} width={150} alt={cars.make + 'car center'} />
           </div>
           <div className="bg-[#f5f8ff]">
        
           <Image src={`https://cars-showcase-ftmk.vercel.app/_next/image?url=https%3A%2F%2Fcdn.imagin.studio%2Fgetimage%3Fcustomer%3Dhrjavascript-mastery%26make%3Dkia%26modelFamily%3Dstinger%26zoomType%3Dfullscreen%26modelYear%3D2022%26angle%3D13&w=1200&q=75`} className="object-cover" height={150} width={150} alt={cars.make + 'car right'} />
           </div>

            </section>

            <h2 className="font-bold text-2xl">{cars.make}</h2>

            {
              ITEMS.map((item : ItemsType , idx : number) => (
                <div key={uuidv4()} className="flex pl-4 text-center items-center flex-col justify-center text-center gap-4">
                 <div className="flex items-center justify-center text-center gap-12" >
                <p className="text-[17px] text-center">{item.title} :</p>
                 <p className="text-[17px] text-center font-bold">{item.text}</p>
                 </div>
                 
                 </div>  
              ))
            }               

          </div>
      )}
      </>
    )
}



export default CarModal