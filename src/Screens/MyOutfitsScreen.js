import CategoryButton from '../Components/Button';
import { View } from 'react-native';

const MyOutfitsCategories = [
    'Work',
    'Relax',
    'Outside',
    'University',
    'Friends',
];
function MyOutfitsScreen({ navigation }) {
    const handleCategoryPress = (category) => {
        navigation.navigate('My Outfit Items', { MyOutfitsCategory: category });
    };
    return (
        <View>
            {MyOutfitsCategories.map((MyOutfitsCategory) => (
                <CategoryButton
                    key={MyOutfitsCategory}
                    text={MyOutfitsCategory}
                    onPress={() => handleCategoryPress(MyOutfitsCategory)}
                />
            ))}
        </View>
    );
}
export default MyOutfitsScreen;

