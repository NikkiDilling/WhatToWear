import CategoryButton from '../Components/Button';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';

const MyWardrobeCategories = [
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
function MyWardrobeScreen({ navigation }) {
    const [data, setData] = useState();
    const [shoes, setShoes] = useState([]);
    const [outerwear, setOuterwear] = useState()
    const [show, setShow] = useState()
    const coat = [];
    useEffect(() => {

        axios.get('http://127.0.0.1:8000/wardrobe/')
            .then(response => {
                console.log(response);
                setData(response.data)
                const outware = response.data.filter(ob => ob.type === "Coat" || "Outerwear")
                response.data.filter(ob => ob.type === "Top")
                response.data.filter(ob => ob.type === "Bottoms")
                setShoes(response.data.filter(ob => ob.type === "Shoes"));
            })
            .catch(e => console.log(e));

    }, [])
    const handleCategoryPress = (category) => {
        navigation.navigate('MyWardrobeScreen', { MyWardrobeCategory: category });
    };
    return (
        <SafeAreaView >
            <ScrollView>
            <Text>My Wardrobe</Text>
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

