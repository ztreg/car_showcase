import { Car } from "@/types";

export async function fetchCars() {
    try {
      const headers = {
        'x-rapidapi-key': '8bbbabeeb9mshe5125d7bd665103p132c95jsn0a6912a90563',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
      const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera', { headers });
      const result = await response.json()
      return result
    }
    catch (error) {
        console.error(error);
        return error
    }
}

// Magic random number
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: Car, angle?: string) => {
  
}