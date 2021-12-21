
import { useState } from 'react';
import BasicCard from "./components/BasicCard/BasicCard";
//import Search from './components/Search/Search';

//import './App.css';


const api = {
  key: "your-key",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() { 
  const[query, setQuery] = useState('');
  const[apiData, setApiData] = useState([{}])

  const searchCity = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      
        .then((response) => response.json())
        .then((data) =>  {
          setApiData(data);
          setQuery('');
          console.log(data);
        })
    }
  }
  // console.log(apiData);
  // console.log(apiData.name)
  // //console.log(apiData.main.temp)
  // console.log(apiData.weather[0].main)
  // console.log(apiData.sys.country)

  const info = {
    city: apiData.name,
    country: apiData.sys.country,
    tem: apiData.main.temp,
    weather: apiData.weather[0].main
  }
  // console.log(info);
  // console.log(info.weather)


  return (
    <div className={(info.tem > 25) ? "cold hot" : "cold"}>
        <input 
          type="text"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={searchCity}
        />

              <BasicCard 
                city={info.city} 
                country={info.country} 
                temp={info.tem}
                weather={info.weather}
              />
      
    </div>
  );
}

export default App;
