import { View, Text, Image } from 'react-native';
import Weather from '../Components/Weather';
import WeatherIcon from '../Components/WeatherIcon';
import {useEffect} from 'react';
import axios from 'axios';

function HomeScreen({ navigation }) {

    const data = {
        mood: 2,
        activity: "date",
        weather: 15
    }

    useEffect(()=>{
        axios.post('http://127.0.0.1:8000/getPrediction/', data)
        .then(response => {
            console.log(response);
        })
        .catch(e => console.log(e))
        
    },[])
    
    return (
        <View>
            <Text>Welcome to What2Wear Outfit Planner app!</Text>
            <Weather/>
            <WeatherIcon/>
        </View>
    );
}
export default HomeScreen;



