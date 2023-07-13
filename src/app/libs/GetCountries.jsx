
export default async function GetCountries() {
    const response = await fetch('http://restcountries.com/v3.1/all', {
      cache: "no-cache",
    })

    if (!response.ok){
        throw new Error('Failed to fetch data data')
    }

  return response.json ()    
}
