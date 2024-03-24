"use client"

import CarResults from "@/components/CarResults";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ApiResponseCar } from "types/api.response";




 function CarPage(
    {params , searchParams} : { params : {car : string} , searchParams: {year : string} }
    
    
    ) {
 
  const [results , setResults] = useState<ApiResponseCar[]>([])


 useEffect(() => {
    async function fetchCarsByTerms() : Promise<void> {
    

    const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=Audi&year=2021';
    const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c8dc985f04mshcf89a53b9f09cebp15a795jsn2ec571ed86b8',
                'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
            }
        };
        
    
        const response = await fetch(url, options);
        const result = await response.json()
        
        setResults(result)
    
    }

      fetchCarsByTerms()
 } , [searchParams.year , params.car])


  console.log(results)
    return (
        <div className="grid grid-cols-3 justify-center items-center gap-4 mt-12">
            {results.map((car : ApiResponseCar , idx : number) => (
              <CarResults key={uuidv4()} cars={car} />
            ))}


            {!results && <div>
                <h2 className="text-3xl font-bold">Car not found</h2>
            </div>  }
        </div>
    )
}

export default CarPage