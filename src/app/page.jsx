"use client"
import { useState, useEffect} from "react"
import Image from "next/image"
import GetCountries from "./libs/GetCountries"
import {BiMap} from 'react-icons/bi'
import Link from "next/link"

export default function Home(){
  const[searchText, setSearchText] = useState("");
  const[countries, setCountries] = useState([]);
  

  useEffect(() => {
    const fetchData = async() => {
      const data = await GetCountries();
      setCountries(data);
    };

    fetchData();
  },[]);

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchText.toLowerCase())
    );

  const countryElements = countries.length > 0 ?
  countries.map(country => (
    <article key={country.name.common} className="border-4 rounded-lg py-6 flex flex-col items-center justify-center border-red-500 hover:shadow-2xl">
    <Image className="m-auto" src={country.coatOfArms.svg} alt={country.name.common} width={250} height={250}/>
    <h2>{country.name.common}</h2>
    <p>Country Capital: {country.capital}</p>
    <Link href={country.maps.googleMaps} target="_blank" title={`${country.name.common} on google map`}>
    <p><BiMap className="text-sky-950 text-4xl"/></p>
    </Link>
    </article>
  )): (
    <h2>No countries found</h2>
  );

  const handleSearch = () => {
    const trimmedSearchText = searchText.trim().toLowerCase();
    const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(trimmedSearchText)
    );
    setFilteredCountries(filteredCountries);
  };

  const handleSearchChange =(e) => {
    setSearchText(e.target.value);
  };

  
  return(
    <div>
      <h1 className="flex flex-col items-center h-[50px] justify-center m-4 bg-slate-600 text-white">All Countries</h1>
       <div className="grid grid-cols-3 gap-2">
       <input
          type="text"
          name="text"
          id="text"
          placeholder="Search for a country"
          className="outline-none w-[500px]  p-3 my-5 border-sky-500 border-4 rounded-lg"
          value={searchText}
          onChange={handleSearchChange}/>
        
        <button
          type="button"
          className="bg-sky-600 text-white rounded-lg my-5 ml-3 p-3 w-[100px]"
          onClick={handleSearch}>
        
          Search
        </button>
      </div>
      <div className="text-[20px] grid md:grid-cols-3">{countryElements}</div>
    </div>
  );
}