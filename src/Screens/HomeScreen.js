import { useState } from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../Styles/Stylesheet';
import { NativeBaseProvider, Select, FormControl, WarningOutlineIcon, Button } from "native-base";
import Weather from '../Components/Weather';
import WeatherIcon from '../Components/WeatherIcon';
import PredictionDialog from '../Components/PredictionDialog';
export function Example({ selection, label, setSelection }) {
    const [selectedValue, setSelectedValue] = useState('');
    const [error, setError] = useState(true); // Initially set to true to show the error
    const handleValueChange = (e) => {
        const parsedValue = typeof e === 'string' ? e : e.toString();
        setSelection(parsedValue);
        setError(parsedValue === ''); // Set error to true if no value is selected
        setSelection(parsedValue);
    };
    return (
        <FormControl w="3/4" maxW="300" isInvalid={error}>
            <FormControl.Label >
                <Text style={Styles.formStyles.labelText}>{label}</Text>
            </FormControl.Label>
            <Select minWidth="200"
                    accessibilityLabel="Choose option"
                    onValueChange={(e) => handleValueChange(e)}
                    value={selectedValue}
                    mt="1"
            >
                {selection &&
                    selection.map(option => (
                        <Select.Item key={option} label={option.toString()} value={option.toString()} />
                    ))}
            </Select>
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" style={Styles.formStyles.text} />} >
                <Text style={Styles.formStyles.text}> Please make a selection!</Text>
            </FormControl.ErrorMessage>
        </FormControl>
    );
}

function HomeScreen({ navigation }) {
    const [mood, setMood] = useState(1);
    const [activity, setActivity] = useState('');
    const [comfortLevel, setComfortLevel] = useState(1);
    const [showModal, setShowModal] = useState(false);

    const moodSelection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const activitySelection = ['Work', 'Relax', 'Outside', 'University', 'Friends'];
    const comfortSelection = [1, 2, 3, 4, 5];
    const data = {
        mood: mood,
        activity: activity,
        weather: comfortLevel
    }
    const handleSubmitData = () => {
        //get prediction here
        /*  axios.post('http://127.0.0.1:8000/getPrediction/', data)
                 .then(response => {
                     console.log(response);
                 })
                 .catch(e => console.log(e)) */
        console.log(data);
        //Show data
        setShowModal(true);
    }

    return (
        <View style={Styles.weatherStyles}>
            <NativeBaseProvider>
               <Text>Welcome to What2Wear Outfit Planner app!</Text>
                {/* <WeatherIcon /> */}
                <Weather />
                <View style={Styles.formStyles.container}>
                   <Example selection={moodSelection} label="Choose your mood" setSelection={setMood} />
                   <Example selection={activitySelection} label="Choose activity" setSelection={setActivity} />
                   <Example selection={comfortSelection} label="Choose desired comfort level" setSelection={setComfortLevel} />
                   <Button colorScheme="secondary" onPress={() => handleSubmitData()} style={Styles.formStyles.button}> Submit</Button>
                </View>
            </NativeBaseProvider>
        </View>
    );
}
export default HomeScreen;