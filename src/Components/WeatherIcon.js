import {Image, Text, View} from "react-native";
import Weather from '../Components/Weather';
const WeatherIcon = ({ weatherData, isDaytime }) => {
        const getWeatherIcon = (weatherCondition) => {
        let iconFile = '';
        switch (weatherCondition) {
            case 'clear sky':
                iconFile = '01';
                break;
            case 'few clouds':
                iconFile = '02';
                break;
            case 'scattered clouds':
                iconFile = '03';
                break;
            case 'broken clouds':
                iconFile = '04';
                break;
            case 'shower rain':
                iconFile = '09';
                break;
            case 'rain':
                iconFile = '10';
                break;
            case 'thunderstorm':
                iconFile = '11';
                break;
            case 'snow':
                iconFile = '13';
                break;
            case 'mist':
                iconFile = '50';
                break;
            default:
                iconFile = 'icon';
                break;
        }
        // Append the time suffix and file extension
        const timeSuffix = isDaytime ? 'd' : 'n';
        return `../assets/WeatherIcons/${iconFile}${timeSuffix}@2x.png`;
    };
    return (
        <View>
            {weatherData && weatherData.main && weatherData.weather && (
                <View>
                    <Image
                        source={{ uri: getWeatherIcon(weatherData.weather[0].main) }}
                        style={{ width: 50, height: 50 }}
                    />
                </View>
            )}
        </View>
    );
};
export default WeatherIcon;