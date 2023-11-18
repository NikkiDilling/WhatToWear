import { View, Text, Image } from 'react-native';
import Weather from '../Components/Weather';
import WeatherIcon from '../Components/WeatherIcon';
import { useEffect } from 'react';
import { Select, Center, FormControl, CheckIcon, WarningOutlineIcon, NativeBaseProvider } from "native-base";
import { Styles } from '../Styles/Stylesheet';

export function Example({ selection, label }) {
    console.log(selection);
    return <FormControl w="3/4" maxW="300" isRequired isInvalid>
        <FormControl.Label >{label}</FormControl.Label>
        <Select minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size={5} />
        }} mt="1">
            {selection && (
                selection.map(option => {
                    return <Select.Item label={option} value={option} />
                })
            )}
        </Select>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />} >
            Please make a selection!
        </FormControl.ErrorMessage>
    </FormControl>;
};


function HomeScreen({ navigation }) {

    const data = {
        mood: 2,
        activity: "date",
        weather: 15
    }

    const moodSelection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const activitySelection = ['Date', 'Work', 'Birthday', 'Party', 'Casual'];
    const comfortSelection = [1, 2, 3, 4, 5];


    /* 
        useEffect(() => {
            axios.post('http://127.0.0.1:8000/getPrediction/', data)
                .then(response => {
                    console.log(response);
                })
                .catch(e => console.log(e))
        }, []) */

    return (

        <View>
            <NativeBaseProvider>
                <Center>
                    <Text>Welcome to What2Wear Outfit Planner app!</Text>
                    <Weather />
                    <WeatherIcon />
                    <View style={Styles.predictionForm.container}>
                        <Example selection={moodSelection} label="Choose your mood" style={{color:'white'}}/>
                        <Example selection={activitySelection} label="Choose today's activity" />
                        <Example selection={comfortSelection} label="Choose desired comfort level" />
                    </View>
                </Center>

            </NativeBaseProvider>
        </View>

    );
}
export default HomeScreen;



