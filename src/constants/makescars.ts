export const MAKES : string [] = 
["Acura" , "Alfa Romeo" , "Aston Martin" , "Audi" , "Cadillac" , "Ferrari" , "Fiat" , "Honda" , "Hyundai" , "Jaguar" , "Kia" , "Lamborghini" , "Land Rover" , "Maserati" , "Mazda" , "Mclaren" , "Nissan" , "Ram" , "Subaru", "Tesla" , "Toyota" , "Volkswagen"]

export const YEARS = () : number[] => {
    let stack = [];
    let date = new Date();
    for(let i = 2015 ; i < date.getFullYear() + 1 ; i++) {
        stack.push(i)
    }
    return stack as number[]
}


export const FUEL_TYPES = ["Fuel" , "Gas" , "Electricity"]

