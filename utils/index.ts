import { Car, FilterProps } from "@/types";

const baseUrl = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars'

export async function fetchCars(filters: FilterProps) {
    const { fuel, limit, manufacturer, model, year } = filters
    const headers = {
        'X-RapidAPI-Key': '2e2a595cc8msh5f01ec93107bbddp10efecjsn2092ba199665',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const filteredUrl = `${baseUrl}?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`
    const response = await fetch(filteredUrl, { headers: headers });

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

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type, value);

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

    return newPathName;
}