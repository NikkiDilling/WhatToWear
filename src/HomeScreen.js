import { View, Text, Image } from 'react-native';
import Weather from '../Components/Weather';
import WeatherIcon from '../Components/WeatherIcon';

function HomeScreen({ navigation }) {
    return (
        <View>
            <Text>Welcome to What2Wear Outfit Planner app!</Text>
            <Weather/>
            <WeatherIcon/>
        </View>
    );
}
export default HomeScreen;



