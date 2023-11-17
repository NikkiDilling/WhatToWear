import CategoryButton from '../Components/Button';
import { View, Text } from 'react-native';
const MyClosetCategories = [
    'Outerwear',
    'Dresses',
    'Tops',
    'Bottoms',
    'Nightwear & Intimate',
    'Socks & Tights',
    'Shoes',
    'Bags',
    'Accessories',
    'Sport'
];
function MyClosetScreen({ navigation }) {
    const handleCategoryPress = (category) => {
        navigation.navigate('MyClosetScreen', { MyClosetCategory: category });
    };
    return (
        <View>
            <Text>My Closet</Text>
            {MyClosetCategories.map((MyClosetCategory) => (
                <CategoryButton
                    key={MyClosetCategory}
                    text={MyClosetCategory}
                    onPress={() => handleCategoryPress(MyClosetCategory)}
                />
            ))}
        </View>
    );
}
export default MyClosetScreen;

