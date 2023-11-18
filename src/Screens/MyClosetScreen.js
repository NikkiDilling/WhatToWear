import CategoryButton from '../Components/Button';
import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SafeAreaView, ScrollView } from 'react-native';


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
    const [data, setData] = useState();
    useEffect(() => {

        axios.get('http://127.0.0.1:8000/wardrobe/')
            .then(response => {
                console.log(response);
                setData(response.data)
            })
            .catch(e => console.log(e));

    }, [])


    const handleCategoryPress = (category) => {
        navigation.navigate('MyClosetScreen', { MyClosetCategory: category });
    };
    return (
        <SafeAreaView >
            <ScrollView>

                <Text>My Closet</Text>
                {MyClosetCategories.map((MyClosetCategory) => (
                    <CategoryButton
                        key={MyClosetCategory}
                        text={MyClosetCategory}
                        onPress={() => handleCategoryPress(MyClosetCategory)}
                    />

                ))}
                <View>
                    {data && (
                        data.map(item => {
                            return <Text>{item.description}</Text>
                        })
                    )}

                </View>
            </ScrollView>
        </SafeAreaView>



    );
}
export default MyClosetScreen;

