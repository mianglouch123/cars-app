"use client"
import React, { useEffect , useState , Fragment } from "react";
import { MAKES , YEARS , FUEL_TYPES} from '../constants/makescars'
import { v4 as uuidv4 } from 'uuid';
import { Combobox , Listbox} from '@headlessui/react'
import Image from "next/image"
import CarResults from "./CarResults"
import { ApiResponseCar } from "types/api.response"
import { useRouter , usePathname, useSearchParams } from "next/navigation"

function CarsPage() {

    const [results , setResults] = useState<ApiResponseCar[]>([])

    const [selectedCar , setSelectedCar] = useState<string>("")
    const [years , setYears] = useState<number>(2015)
    const [fuel_types , setFuelTypes] = useState<string>(FUEL_TYPES[0])
   
    const [carQuery , setCar] = useState<string>("")
    
    
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams.toString())



    
   useEffect(() => {
    async function fetchCars() : Promise<void>{

        const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?year=2023&limit=21';
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'c8dc985f04mshcf89a53b9f09cebp15a795jsn2ec571ed86b8',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
          }
        };
    
    
    const response = await fetch(url , options)
    const dataCar = await response.json()
    console.log(dataCar)
    setResults(dataCar)
    setSelectedCar(MAKES[0])
    
    
    }

    fetchCars()
   }, [])
   
   const filterCars =
    carQuery === ''
      ? MAKES
      : MAKES.filter((car) => {
        return car.toLowerCase().includes(carQuery.toLowerCase())
        })







    function handleSearchCar() : void {
      const car = selectedCar;
      const currentPath = pathname.toLowerCase()
      if(years) params.set('year', String(years))
      const newPath = `${currentPath}/${car}?${params.toString()}`
       router.push(newPath)
    }

    return (
         
         
         <div className="flex h-100vh w-100vw items-center justify-center flex-col gap-4 p-2 pl-4">
         
         
          <Combobox
          value={selectedCar}
          onChange={setSelectedCar}
          >
 
         <div className="flex items-center justify-center gap-8">
         <Combobox.Input className={`p-1 border b-slate-100 w-[375px] focus:outline-none rounded-[25px] pl-2`} onChange={(event : React.ChangeEvent<HTMLInputElement>) => setCar(event.target.value)} />
          <div className="bg-[#f5f8ff] rounded-[7px] p-2 font-semibold w-[100px] text-center">
          <Listbox value={years} onChange={setYears}>
       <Listbox.Button >{years}</Listbox.Button>
       <Listbox.Options>
        {YEARS().map((year) => (
          <Listbox.Option 
            key={uuidv4()}
            value={year}
            className="flex flex-col justify-center items-center h-[30px]"
          >
             {({ active, selected }) => (
              <p
                className={`${
                  active ? 'font-normal bg-blue-700 text-white' : 'font-normal bg-white text-black'

                }
                p-2 cursor-pointer w-[100px] text-center
                
                `}
              >
                
                {year}
              </p>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>    
          </div> 

        
         
         <Image
         onClick={handleSearchCar}
         className="cursor-pointer" src={`/magnifying-glass.svg`}  height={30} width={30} alt="search icon" />
         </div>
        
        
        
        <Combobox.Options>
        {filterCars.map((car) => (
         
         
         <Combobox.Option key={uuidv4()} value={car} as={Fragment}>
            {({ active, selected }) => (
              <li
                className={`${
                  active ? 'font-normal bg-blue-700 text-white' : 'font-normal bg-white text-black'

                }
                p-2 cursor-pointer w-[400px]
                
                `}
              >
                
                {car}
              </li>
            )}
          </Combobox.Option>
          




        ))}

      </Combobox.Options>
      </Combobox>

    
          <div className="grid grid-cols-3 gap-8 p-2 justify-center items-center mt-8">
            {
              results.map((car) => (
                <CarResults key={uuidv4()} cars={car}/>
              ) )
            }
          </div>
         </div>

    )
}

export default CarsPage