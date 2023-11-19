import { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { NativeBaseProvider, Select, Center, FormControl, CheckIcon, WarningOutlineIcon, Button } from "native-base";
import { Styles } from '../Styles/Stylesheet';
import Weather from '../Components/Weather';
import WeatherIcon from '../Components/WeatherIcon';
import PredictionDialog from '../Components/PredictionDialog';
export function Example({ selection, label, setSelection }) {
    return (
        <FormControl w="3/4" maxW="300" isRequired isInvalid>
            <FormControl.Label >
                <Text style={Styles.predictionForm.text}>{label}</Text>
            </FormControl.Label>
            <Select minWidth="200"
                    accessibilityLabel="Choose option"
                    onValueChange={(e) => setSelection(e)}
                    mt="1">
                {selection && (
                    selection.map(option => {
                        return <Select.Item key={option.toString()} label={option} value={option.toString()} />
                    })
                )}
            </Select>
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" style={Styles.predictionForm.text} />} >
                <Text style={Styles.predictionForm.text}> Please make a selection!</Text>
            </FormControl.ErrorMessage>
        </FormControl>
    );
};

function HomeScreen({ navigation }) {
    const [mood, setMood] = useState('');
    const [activity, setActivity] = useState('');
    const [comfortLevel, setComfortLevel] = useState('');
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
        <View>
            <NativeBaseProvider>
                <Center>
                    <Text>Welcome to What2Wear Outfit Planner app!</Text>
                    <Weather />
                    <WeatherIcon />
                    <View style={Styles.predictionForm.container}>
                        <Example selection={moodSelection} label="Choose your mood" setSelection={setMood} />
                        <Example selection={activitySelection} label="Choose activity" setSelection={setActivity} />
                        <Example selection={comfortSelection} label="Choose desired comfort level" setSelection={setComfortLevel} />
                        <Button colorScheme="secondary" onPress={() => handleSubmitData()} style={Styles.predictionForm.button}> Submit</Button>
                    </View>
                    <PredictionDialog prediction={data} showModal={showModal} setShowModal={setShowModal} />
                </Center>
            </NativeBaseProvider>
        </View>

    );
}
export default HomeScreen;





