import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import axios from 'axios';
import { useContext } from 'react';
import AppContext from '../AppContext';

const apiKey = 'a9fe46a30da5b7b0cdfc7199dfa972df';
const city = 'Copenhagen';
const Weather = () => {
    const ctx = useContext(AppContext);
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {

            try {
                axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
                )
                    .then(response => {
                        console.log(response.data);
                        setWeatherData(response.data);
                        ctx.setWeather(response.data);
                    })

            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
 

    }, []);
    return (
        <View>
            {weatherData && (
                <View>
                    <Text style={{ fontSize: 22 }}>
                        Today's Weather in {weatherData.name}
                    </Text>
                    {weatherData && weatherData.main && weatherData.weather && (
                        <View>
                            <Text>Weather: {weatherData.weather[0].description}</Text>
                            <Text>Temperature: {weatherData.main.temp} °C</Text>
                            <Text>Feels like: {weatherData.main.feels_like} °C</Text>
                            <Text>Humidity: {weatherData.main.humidity}%</Text>
                            <Text>
                                Temp min-max: {weatherData.main.temp_min} °C - {weatherData.main.temp_max} °C
                            </Text>
                        </View>

                    )}
                </View>
            )}
        </View>
    );
};
export default Weather;

