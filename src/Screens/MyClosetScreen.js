import CategoryButton from '../Components/Button';
import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SafeAreaView, ScrollView } from 'react-native';


const MyClosetCategories = [
    'Outerwear',
    'Tops',
    'Bottoms',
    'Shoes',
];

function MyClosetScreen({ navigation }) {
    const [data, setData] = useState();
    const [shoes, setShoes] = useState([]);
    const [outware, setOutware] = useState()
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
       console.log(category)
       console.log(shoes)
 
       setShow(true)

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

                {show && (
                    shoes.map(item => {
                        return <Text key={item.id}>{item.description}</Text>
                    })
                )}
            </ScrollView>
        </SafeAreaView>



    );
}
export default MyClosetScreen;

