import { Car } from "@/types";

const baseUrl = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars'
const url = `${baseUrl}/?model=q3`;

export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '2e2a595cc8msh5f01ec93107bbddp10efecjsn2092ba199665',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch(url, { headers: headers });

    const result = await response.json();

    return result;

}

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
    const url = new URL("https://cdn.imagin.studio/getimage");

    const { make, year, model } = car;

    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append("make", make);
    url.searchParams.append("modelFamily", model.split(" ")[0]);
    url.searchParams.append("zoomType", 'fullscreen');
    url.searchParams.append("modelYear", `${year}`);
    url.searchParams.append("angle", `${angle}`);

    return `${url}`

}