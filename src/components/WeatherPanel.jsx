import React, { useState } from "react";
import Form from "./Form.jsx";
import Card from "./Card.jsx";

const WeatherPanel = () => {
    const {REACT_APP_API_KEY}= process.env;

    let urlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=${REACT_APP_API_KEY}&lang=es`;
    let urlCity = "&q=";

    let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?appid=${REACT_APP_API_KEY}&lang=es`;

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");

    const getLocation = async (loc) => {
        setLoading(true);
        setLocation(loc);

        //llamada a la api Weather usando fetch

        urlWeather = urlWeather + urlCity + loc;

        await fetch(urlWeather).then((res) => {
            if (!res.ok)  throw { res };
            return res.json();
        }).then((data) => {
            console.log(data);
            setWeather(data);
        }).catch((err) => {
            console.log()
            setLoading(false);
            setShow(false);
        })

        //llamada a la api Forecast usando fetch

        urlForecast = urlForecast + urlCity + loc;

        await fetch(urlForecast).then((res) => {
            if (!res.ok) throw { res };
            return res.json();
        }).then((data) => {
            console.log(data);
            setForecast(data);

            setLoading(false);
            setShow(true);

        }).catch((err) => {
            console.log(err)
            setLoading(false);
            setShow(false);
        })

    }
    return (
        <React.Fragment>
            <Form
                newLocation={getLocation}
            />
            <Card
                infoShow={show}
                infoLoading={loading}
                infoWeather={weather}
                infoForecast={forecast}
            />
        </React.Fragment>
    )
}


export default WeatherPanel;