/*import {Image, View} from "react-native";

// Defines the mapping of weather conditions to icon paths
const iconMapping = {
    'clear sky': (isDaytime) => (isDaytime ? require('assets/WeatherIcons/01d@2x.png') : require('../../assets/WeatherIcons/01n@2x.png')),
    'few clouds': (isDaytime) => (isDaytime ? require('assets/WeatherIcons/02d@2x.png') : require('../../assets/WeatherIcons/02n@2x.png')),
    'scattered clouds': (isDaytime) => (isDaytime ? require('assets/WeatherIcons/03d@2x.png') : require('../../assets/WeatherIcons/03n@2x.png')),
    'broken clouds': (isDaytime) => (isDaytime ? require('assets/WeatherIcons/04d@2x.png') : require('../../assets/WeatherIcons/04n@2x.png')),
    'shower rain': (isDaytime) => (isDaytime ? require('assets/WeatherIcons/09d@2x.png') : require('../../assets/WeatherIcons/09n@2x.png')),
    'rain': (isDaytime) => (isDaytime ? require('assets/WeatherIcons/10d@2x.png') : require('../../assets/WeatherIcons/10n@2x.png')),
    'thunderstorm': (isDaytime) => (isDaytime ? require('assets/WeatherIcons/11d@2x.png') : require('../../assets/WeatherIcons/11n@2x.png')),
    'snow': (isDaytime) => (isDaytime ? require('assets/WeatherIcons/13d@2x.png') : require('../../assets/WeatherIcons/13n@2x.png')),
    'mist': (isDaytime) => (isDaytime ? require('assets/WeatherIcons/50d@2x.png') : require('../../assets/WeatherIcons/50n@2x.png')),
};

const WeatherIcon = ({ weatherData, sunrise, sunset }) => {
   // Helper function to calculate isDaytime. Determine if it's daytime based on currentTime, sunrise and sunset
   const isDaytime = (sunrise, sunset) => {
      const currentTime = new Date().getTime();
      return currentTime > sunrise && currentTime < sunset;
   };
   const getWeatherIcon = (weatherCondition) => {
       // Gets the corresponding function from the mapping
       const iconFunction = iconMapping[weatherCondition] || iconMapping.default;

       // Returns the result of the icon function
       return iconFunction(isDaytime);
   };

    return (
     <View>
       {weatherData && weatherData.main && weatherData.weather && (
         <View>
           <Image
             source={getWeatherIcon(weatherData.weather[0].main)}
             style={{ width: 50, height: 50 }}
           />
         </View>
       )}
     </View>
   );
};
export default WeatherIcon;
*/
