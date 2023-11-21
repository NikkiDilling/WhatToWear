import { useContext, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Styles } from '../Styles/Stylesheet';
import { NativeBaseProvider, Select, FormControl, WarningOutlineIcon, Button } from "native-base";
import Weather from '../Components/Weather';
import WeatherIcon from '../Components/WeatherIcon';
import PredictionDialog from '../Components/PredictionDialog';
import axios from 'axios';
import AppContext from '../AppContext';


export function Example({ selection, label, setSelection }) {
    return (
        <FormControl w="3/4" maxW="300" isRequired isInvalid>
            <FormControl.Label >
                <Text style={Styles.formStyles.labelText}>{label}</Text>
            </FormControl.Label>
            <Select minWidth="200"
                accessibilityLabel="Choose option"
                onValueChange={(e) => {
                    const parsedValue = typeof e === 'string' ? e : e.toString();
                    setSelection(parsedValue);
                }}
                mt="1">
                {selection && (
                    selection.map(option => {
                        return <Select.Item key={option} label={option.toString()} value={option.toString()} />
                    })
                )}
            </Select>
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" style={Styles.formStyles.text} />} >
                <Text style={Styles.formStyles.text}> Please make a selection!</Text>
            </FormControl.ErrorMessage>
        </FormControl>
    );
};

function HomeScreen({ navigation }) {
    const ctx = useContext(AppContext);
    const [mood, setMood] = useState(1);
    const [activity, setActivity] = useState('');
    const [data, setData] = useState()
    const [showModal, setShowModal] = useState(false);
    const moodSelection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const activitySelection = ['Work', 'Relax', 'Outside', 'University', 'Friends'];

    const handleSubmitData = () => {

        const postData = {
            mood: mood,
            activity: activity,
            temp_max: ctx.weatherApi.main.temp_max,
            temp_min: ctx.weatherApi.main.temp_min,
            precipitation: ctx.weatherApi.main.humidity

        }
        ctx.setUserInput(postData);
        //get prediction here
        axios.post('http://127.0.0.1:8000/getPrediction/', postData)
            .then(response => {
                console.log(response);
                setData(response.data);
            })
            .catch(e => console.log(e))

        console.log(data);
        //Show data
        setShowModal(true);
    }

    return (
        <View style={Styles.weatherStyles}>
            <NativeBaseProvider>
                <Text>Welcome to What2Wear Outfit Planner app!</Text>
                <Weather />
                <WeatherIcon />
                <View style={Styles.formStyles.container}>
                    <Example selection={moodSelection} label="Choose your mood" setSelection={setMood} />
                    <Example selection={activitySelection} label="Choose activity" setSelection={setActivity} />
                    <Button colorScheme="secondary" onPress={() => handleSubmitData()} style={{ margin: '1rem' }}>Submit</Button>
                </View>
                <PredictionDialog prediction={data} showModal={showModal} setShowModal={setShowModal} />

            </NativeBaseProvider>
        </View>
    );
}
export default HomeScreen;