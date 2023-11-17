import { View, Text, Image } from 'react-native';
import Weather from '../Components/Weather';
import WeatherIcon from '../Components/WeatherIcon';
import { useEffect, useState } from 'react';



function HomeScreen({ navigation }) {
    const [data, setData] = useState();
    useEffect(()=> {

    }, [])
    
    return (
        <View>
            <Text>Welcome to What2Wear Outfit Planner app!</Text>
            <Weather/>
            <WeatherIcon/>
            <View>
              <Text>  Form</Text>
            </View>
        </View>
    );
}
export default HomeScreen;



