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
    const [shoes, setShoes] = useState([]);
    const [show, setShow] = useState()
    const coat = [];
    useEffect(() => {

        axios.get('http://127.0.0.1:8000/wardrobe/')
            .then(response => {
                console.log(response);
                setData(response.data)
                response.data.filter(ob => ob.type === "Outerwear")
                response.data.filter(ob => ob.type === "Dresses")
                response.data.filter(ob => ob.type === "Tops")
                response.data.filter(ob => ob.type === "Bottoms")
                response.data.filter(ob => ob.type === "Nightwear & Intimate")
                response.data.filter(ob => ob.type === "Socks & Tights")
                response.data.filter(ob => ob.type === "Bags")
                response.data.filter(ob => ob.type === "Accessories")
                response.data.filter(ob => ob.type === "Sport")
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

