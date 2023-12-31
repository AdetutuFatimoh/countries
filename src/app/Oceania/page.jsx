import Image from "next/image"
import GetCountries from "../libs/GetCountries"

export default async function Home(){

  const data = await GetCountries()

  const Oceania = data.filter(country => country.region === "Oceania")

  const countries = Oceania.map(country => (
    <article className="border-4 rounded-lg py-6 flex flex-col items-center justify-center border-red-500 hover:shadow-2xl">

    <Image src={country.coatOfArms.svg} alt={country.name.common} width={250} height={250}/>
    <h2>{country.name.common}</h2>
    </article>
  ))

  

  return(
    <div>
      <h1 className="flex flex-col items-center h-[50px] justify-center m-4 bg-slate-600 text-white">Oceania Countries</h1>
       <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
        {countries}
       </div>
      <footer className="flex flex-col items-center h-[50px] justify-center m-4 bg-slate-600 text-white">
        <p>{`We have ${countries.length} countries in Oceania`} </p>
      </footer>
    </div>
  )
}

