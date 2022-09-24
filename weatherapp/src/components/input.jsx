import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { DebounceInput } from "react-debounce-input";
import { useDebounce } from '../debounce.js';
import axios from 'axios';

export const Input = () => {
    const key='c75fe9c69f2998626a75414a88c26470';
    const [city,setCity]=useState('');
    const searchTerm=useDebounce(city,300);
    const [long,setLong] = useState(Number);
    const [lat,setLat] = useState(Number);
    const [weather,setWeather]=useState([]);

    var API_KEY ="bceb8ddaad70cd9238fe78ba73b4a210";
    useEffect(()=>{
        getLocation();
    },[]);

    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position)=>{
            console.log(position)
            setLong(position.coords.latitude);
            setLat(position.coords.longitude);
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then((res)=>{
                console.log(res.data.city?.name)
            setCity(res.data.city?.name)
        });
          });
        }
    }

    const fetchWeather=async()=>{
        try {
            const data= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${key}`);
            const weath=await data.json();
            console.log("weath",weath)
            setWeather(weath);
        } catch (error) {
            console.log('err',error);
        }
    }
    const onSearch=(e,city)=>{
        if(e.key==="Enter" && city){
            setCity(city);
            fetchWeather();
        }
    }
    

    useEffect(()=>{
        fetchWeather();
    },[city]);

  return (
    <div>
        <div className='inputContiner'>
            <img src="https://media.istockphoto.com/vectors/map-pin-vector-glyph-icon-vector-id1193451471?k=20&m=1193451471&s=612x612&w=0&h=ve7JRaMvw6L1HBiDOTVwfbhHALPPH-nCMCgG0Z_z5NY=" alt="location" />
           <DebounceInput className="inputtag" style={{"width":"400px" ,"height":"30px"} }  
          debounceTimeout={300}
          onKeyPress={(e)=>onSearch(e,city)} 
          onChange={(e)=>setCity(e.target.value)}
          placeholder={"Type City name..."}/>
            <img src="https://img.myloview.com/posters/search-icon-magnifying-glass-icon-vector-magnifier-or-loupe-sign-400-169304741.jpg" alt="search" />
        </div>

        <div className='searchedContainer'>
            <h2>{weather.name}</h2>
        </div>
    </div>
  )
}
