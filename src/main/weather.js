import React, { useState } from 'react';
import "../main/weather.css"
const api = {
  key: "f621742c67e9f1c2440126216a490708",
  base: "https://api.openweathermap.org/data/2.5/"
}

function Gapp() {
  const [query, setQuery] = useState();
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  

  

  return (
    <div>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Искать..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress = {search}
          />
       
        </div>
        
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className='temp_dflex'>

                <div className='temp_dflexx'>
                  <div className='temp_feel'>Чувствуются как: {Math.round(weather.main.feels_like)}°c <br/></div>
                  <div className='temp_wind'>Скорость ветра: {Math.round(weather.wind.speed)} м в секунду</div>
                </div>
                
                <div className="temp">{Math.round(weather.main.temp)}°c</div>
                


            </div>
            
            <div className="weather">{weather.weather[0].main}</div>
           <div className='clouds'>Облачность: {weather.clouds.all}%</div>
          </div>
        </div>
        ) : ('Введите название города')}
      </main>
    </div>
  );
}


export default Gapp;