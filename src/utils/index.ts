import axios from "axios";



export async function fetchCars(){
    const options = {
        method: 'GET',
        url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
        params: {model: 'corolla'},
        headers: {
          'X-RapidAPI-Key': '53317ca85cmshbcd5c13cc7a52acp144888jsne636750a417b',
          'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
      };

const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars'  

try {
	const response = await axios.request(options);
	return response.data;
} catch (error) {
	console.log(error);
}
}

export const calculateCarRent = (mileage:number,numberOfDays:number|1, year:number,baseRent:number,carType?:string )=>{
    let totalRent = baseRent * numberOfDays;

    // Adjust rent based on mileage
    if (mileage > 100000) {
        // If mileage is high, increase rent by 10%
        totalRent *= 1.1;
    } else if (mileage > 50000) {
        // If mileage is moderate, increase rent by 5%
        totalRent *= 1.05;
    }

    // Adjust rent based on car type
    if (carType === 'SUV') {
        // If car type is SUV, increase rent by 15%
        totalRent *= 1.15;
    } else if (carType === 'sedan') {
        // If car type is sedan, increase rent by 10%
        totalRent *= 1.1;
    }

    // Adjust rent based on the year of the car
    const currentYear = new Date().getFullYear();
    const ageOfCar = currentYear - year;
    if (ageOfCar <= 3) {
        // If the car is less than or equal to 3 years old, no adjustment
        // You can add more nuanced adjustments based on age if needed
    } else if (ageOfCar > 3 && ageOfCar <= 5) {
        // If the car is between 3 and 5 years old, increase rent by 5%
        totalRent *= 1.05;
    } else {
        // If the car is more than 5 years old, increase rent by 10%
        totalRent *= 1.1;
    }

    // Add profit margin (adjust as needed)
    const profitMarginPercentage = 20; // Example: 20% profit margin
    const profitAmount = (totalRent * profitMarginPercentage) / 100;
    totalRent += profitAmount;

    // Calculate and return the rent per day
    const rentPerDay = totalRent / numberOfDays;
    return rentPerDay;

}