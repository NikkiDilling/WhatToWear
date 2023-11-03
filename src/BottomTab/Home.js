import { View, Text } from 'react-native';
import Weather from '../Components/Weather';
function HomeScreen({ navigation }) {
    return (
        <View>
            <Text>Welcome to What2Wear Outfit Planner app!</Text>
            <Weather/>
        </View>
    );
}
export default HomeScreen;
