"use client"

import { useState} from "react"
import { Dialog } from "@headlessui/react"
import Image from "next/image"
import { ApiResponseCar } from "types/api.response"
import CarModal from "./CarModal"


interface CarResultsInterface {
  cars: ApiResponseCar
}

function CarResults({ cars }: CarResultsInterface) {
  const [isOpen , setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }
  

  

  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <div className=" z-10 flex items-center cursor-pointer justify-center bg-[#f5f8ff] transition duration-150 ease-in hover:bg-white h-[352px] w-[375px] gap-4 rounded-[25px] flex-col" onClick={openModal}>
        <div className="flex justify-center items-center flex-col flex">
          <p className="font-bold text-[25px]">{cars?.make}</p>
          <div className="flex font-semibold text-[21px] flex items-center justify-center gap-2">
            $ {Math.floor(Math.random() * 75)}
            <p>/ Day</p>
          </div>
        </div>

        <div className="items-center justify-center flex-col">
          <Image src={`https://cars-showcase-ftmk.vercel.app/_next/image?url=https%3A%2F%2Fcdn.imagin.studio%2Fgetimage%3Fcustomer%3Dhrjavascript-mastery%26make%3Dhonda%26modelFamily%3Dodyssey%26zoomType%3Dfullscreen%26modelYear%3D2022%26angle%3Dundefined&w=640&q=75`} className="object-cover" height={350} width={250} alt={cars.make + 'car'} />

          <div className="flex items-center justify-center gap-12 pr-6">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-2 flex-col">
                <Image src={`/steering-wheel.svg`} height={15} width={15} alt={`steering wheel img`} />
                <p className="text-[13px]">Automatic</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-2 flex-col">
                <Image src={`/tire.svg`} height={15} width={15} alt={`tire img`} />
                <p className="text-[13px]">{cars?.fuel_type}</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-2 flex-col">
                <Image src={`/gas.svg`} height={15} width={15} alt={`gas img`} />
                <p className="text-[13px]">{cars?.highway_mpg}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
      <div className="transition duration-300 ease-linear">
        <CarModal cars={cars} isOpen={isOpen} openModal={openModal} closeModal={closeModal} />

      </div>        
        
      )}
    </div>
  )
}

export default CarResults


