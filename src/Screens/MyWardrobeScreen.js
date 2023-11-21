import CategoryButton from '../Components/Button';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AppContext from '../AppContext';

const MyWardrobeCategories = [
    'Outerwear',
    'Tops',
    'Bottoms',
    'Shoes',
];
function MyWardrobeScreen({ navigation }) {
    const ctx = useContext(AppContext);
    const [data, setData] = useState();
    const [shoes, setShoes] = useState([]);
    const [outerwear, setOuterwear] = useState()
    const [show, setShow] = useState()
    const coat = [];
    const handleCategoryPress = (category) => {
        navigation.navigate('MyWardrobeScreen', { MyWardrobeCategory: category });
    };
    return (
        <SafeAreaView >
            <ScrollView>
            {MyWardrobeCategories.map((MyWardrobeCategory) => (
                <CategoryButton
                    key={MyWardrobeCategory}
                    text={MyWardrobeCategory}
                    onPress={() => handleCategoryPress(MyWardrobeCategory)}
                />
            ))}
            {show && (
                shoes.map(item => {
                    return <Text key={item.id}>{item.description}</Text>
                })
            )}
            </ScrollView>
        </SafeAreaView>
    );
}
export default MyWardrobeScreen;

