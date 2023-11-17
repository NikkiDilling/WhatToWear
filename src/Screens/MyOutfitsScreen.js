import CategoryButton from '../Components/Button';
import { View, Text } from 'react-native';
const MyOutfitsCategories = [
    'Casual',
    'Formal',
    'Eveningwear',
    'Date',
    'Sport',
];
function MyOutfitsScreen({ navigation }) {
    const handleCategoryPress = (category) => {
        navigation.navigate('MyOutfitsScreen', { MyOutfitsCategory: category });
    };
    return (
        <View>
            <Text>My Outfits</Text>
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

