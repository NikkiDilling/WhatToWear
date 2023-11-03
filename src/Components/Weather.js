
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const apiKey = 'a9fe46a30da5b7b0cdfc7199dfa972df';
const city = 'Copenhagen';
const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
                );
                setWeatherData(response.data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, []);

    return (
        <View>
            {weatherData && (
                <View>
                    <Text style={{ fontSize: 24 }}>
                        Today's Weather in {city}
                    </Text>
                    <Text>Temperature: {weatherData.main.temp} °C</Text>
                    <Text>Humidity: {weatherData.main.humidity}%</Text>
                    <Text>Weather: {weatherData.weather[0].description}</Text>
                </View>
            )}
        </View>
    );
};
export default Weather;
