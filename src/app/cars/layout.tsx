import React from "react"
import RentSection from "@/components/RentSection"
function CarsLayout( {children} : {children : React.ReactNode}) {
    return (
        <div>
            <RentSection />
            {children}
        </div>
    )
}

export default CarsLayout