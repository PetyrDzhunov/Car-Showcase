const baseUrl = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars'
const url = `${baseUrl}/?model=corolla`;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2e2a595cc8msh5f01ec93107bbddp10efecjsn2092ba199665',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
};


export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '2e2a595cc8msh5f01ec93107bbddp10efecjsn2092ba199665',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch(url, { headers: headers });

    const result = await response.json();

    return result;

}

