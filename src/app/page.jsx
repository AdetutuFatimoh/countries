"use client"
import Image from "next/image"
import GetCountries from "./libs/GetCountries"
import {BiMap} from 'react-icons/bi'
import Link from "next/link"


export default async function Home(){

  const data = await GetCountries()

  // const africa = data.filter(country => country.region === "Countries")

  const Countries = data.map(country => (
    
    
    <article className="border-4 rounded-lg py-6 flex flex-col items-center justify-center border-red-500 hover:shadow-2xl">

    <Image src={country.coatOfArms.svg} alt={country.name.common} width={250} height={250}/>
    <h2>{country.name.common}</h2>
    <Link href={country.maps.googleMaps} target="_blank" title={`${country.name.common} on google map`}>
    <p><BiMap className="text-sky-950 text-4xl"/></p>
    </Link>
    </article>
  ))

  

  return(
    <div>
      <h1 className="flex flex-col items-center h-[50px] justify-center m-4 bg-slate-600 text-white">All Countries</h1>
       <div className="grid grid-cols-3 gap-2">
        {Countries}
       </div>
      <footer className="flex flex-col items-center h-[50px] justify-center m-4 bg-slate-600 text-white">
        <p>{`We have ${Countries.length} all countries`}</p>
      </footer>
    </div>
  )

  
}

