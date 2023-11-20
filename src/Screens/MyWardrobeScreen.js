import CategoryButton from '../Components/Button';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';

const MyWardrobeCategories = [
    'Outerwear',
    'Tops',
    'Bottoms',
    'Shoes',
];
function MyWardrobeScreen({ navigation }) {
    const [data, setData] = useState([]);
    const [outerwear, setOuterwear] = useState([])
    const [tops, setTops] = useState([]);
    const [bottoms, setBottoms] = useState([]);
    const [shoes, setShoes] = useState([]);
    const [show, setShow] = useState([])
    const coat = [];

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/wardrobe/')
            .then(response => {
              console.log(response);
              setData(response.data)
              setOuterwear(response.data.filter(item => item.type === 'Outerwear' || item.type === 'Coat'));
              setTops(response.data.filter(item => item.type === 'Tops'));
              setBottoms(response.data.filter(item => item.type === 'Bottoms'));
              setShoes(response.data.filter(item => item.type === 'Shoes'));
            })
            .catch(e => console.log(e));
    }, [])

    const handleCategoryPress = (category) => {
        navigation.navigate('My Wardrobe Items', { category });
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