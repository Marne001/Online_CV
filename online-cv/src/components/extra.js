import React, { useState } from 'react';
import '../extra-style.css';

const api = {
    key: "b4aead45b5df07351f3ec550fdb96242",
    base: "https://api.openweathermap.org/data/2.5/"
}



function Extra() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result)
                    setQuery('')
                    console.log(result);
                });
        }
    }

    const dateBuilder = (d) => {
        let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }


    return (
        <div className="extra">
            <main>
                <div className="Row">
                    <div className="Column1">
                    <div className="banner-weather">
                            <div className="search-box">
                                <input
                                    type="text"
                                    className="search-bar"
                                    placeholder="Search Weather"
                                    onChange={e => setQuery(e.target.value)}
                                    value={query}
                                    onKeyPress={search}
                                />
                            </div>
                            {(typeof weather.main != "undefined") ? (
                                <div>
                                    <div className="location-box">
                                        <div className="location">{weather.name}, {weather.sys.country}</div>
                                        <div className="date">{dateBuilder(new Date())}</div>
                                    </div>
                                    <div className="weather-box">
                                        <div className="temp">
                                            {Math.round(weather.main.temp)}°c
                                </div>
                                        <div className="weather">
                                            {weather.weather[0].main}
                                </div>
                                    </div>
                                </div>
                            ) : ('')}
                        </div>
                    </div> 
                    <div className="Column2">
                        
                    </div>   
                </div>
            </main>
        </div>
    )
}

export default Extra;