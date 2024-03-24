import CarsPage from "@/components/CarsPage"
import { Suspense } from "react"
function CarsPageDinamic() {
  return (
    <Suspense fallback={<div>loading....</div>}>
      <CarsPage />
    </Suspense>
  )
} 

function CarsHomePage() {

 
    return (
      
    <CarsPageDinamic />

    )
}

export default CarsHomePage









