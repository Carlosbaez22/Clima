import React from "react";
import Spinner from "./Spinner";


const Card = ({ infoShow, infoLoading, infoWeather, infoForecast }) => {

    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    let date = `${day} / ${month} / ${year}`

    let url = "";
    let iconUrl = "";

    let iconUrl3 = "";
    let iconUrl6 = "";
    let iconUrl9 = "";

    let forecastDate3 = "";
    let forecastDate6 = "";
    let forecastDate9 = "";

    if (infoLoading) return <Spinner />;

    if (infoShow) {
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + infoWeather.weather[0].icon + ".png";

        iconUrl3 = url + infoForecast.list[0].weather[0].icon + ".png";
        iconUrl6 = url + infoForecast.list[1].weather[0].icon + ".png";
        iconUrl9 = url + infoForecast.list[2].weather[0].icon + ".png";

        forecastDate3 = infoForecast.list[0].dt_txt.substring(8, 10) + '/' + infoForecast.list[0].dt_txt.substring(5, 7) + '/' + infoForecast.list[0].dt_txt.substring(0, 4) + ' ' + infoForecast.list[0].dt_txt.substring(11, 13);
        forecastDate6 = infoForecast.list[1].dt_txt.substring(8, 10) + '/' + infoForecast.list[1].dt_txt.substring(5, 7) + '/' + infoForecast.list[1].dt_txt.substring(0, 4) + ' ' + infoForecast.list[1].dt_txt.substring(11, 13);
        forecastDate9 = infoForecast.list[2].dt_txt.substring(8, 10) + '/' + infoForecast.list[2].dt_txt.substring(5, 7) + '/' + infoForecast.list[2].dt_txt.substring(0, 4) + ' ' + infoForecast.list[2].dt_txt.substring(11, 13);

        
    }

    return (
        <div className="mt-5">
            {
                infoShow === true ? (
                    <div className="container">
                        <div className="card mb-3 mx-auto bg-dark text-light">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <h3 className="card-title">{infoWeather.name}</h3>
                                    <p className="card-date">{date}</p>
                                    <h1 className="card-temp">{(infoWeather.main.temp - 273.15).toFixed(1)}°C</h1>
                                    <p className="card-desc"><img src={iconUrl} alt="icon" />{infoWeather.weather[0].description}</p>
                                    <img src="https://images.pexels.com/photos/3969491/pexels-photo-3969491.jpeg?cs=srgb&dl=pexels-zhanqun-cai-3969491.jpg&fm=jpg"
                                        className="img-fluid rounded-start"
                                        alt="City Image"
                                    />

                                </div>
                                <div className="col-md-8">
                                    <div className="card-body text-start mt-4">
                                        <h5 className="card-text">Temperatura máxima: {(infoWeather.main.temp_max - 273.15).toFixed(1)}°C</h5>
                                        <h5 className="card-text">Temperatura mínima: {(infoWeather.main.temp_min - 273.15).toFixed(1)}°C</h5>
                                        <h5 className="card-text">Sensación térmica: {(infoWeather.main.feels_like - 273.15).toFixed(1)}°C</h5>
                                        <h5 className="card-text">Humedad: {infoWeather.main.humidity}%</h5>
                                        <h5 className="card-text">Velocidad del viento: {infoWeather.wind.speed}m/s</h5>
                                    </div>
                                    <hr />
                                    <div className="row mt-4">
                                        <div className="col">
                                            <p>{forecastDate3}h</p>
                                            <p className="description"><img src={iconUrl3} alt="icon" />{infoForecast.list[1].weather[0].description}</p>
                                            <p className="temp">{(infoForecast.list[1].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>
                                        <div className="col">
                                            <p>{forecastDate6}h</p>
                                            <p className="description"><img src={iconUrl6} alt="icon" />{infoForecast.list[2].weather[0].description}</p>
                                            <p className="temp">{(infoForecast.list[2].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>
                                        <div className="col">
                                            <p>{forecastDate9}h</p>
                                            <p className="description"><img src={iconUrl9} alt="icon" />{infoForecast.list[3].weather[0].description}</p>
                                            <p className="temp">{(infoForecast.list[3].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                ) : (

                    <h2 className="text-light">No hay datos</h2>
                )
            }
        </div>
    );
}

export default Card;