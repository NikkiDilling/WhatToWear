import { SafeAreaView, ScrollView, Text } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
function OutfitScreen({ route }) {
    const { MyOutfitsCategory } = route.params;
    const [items, setItems] = useState([]);

    useEffect(() => {
       // Fetch outfits for the selected category
       axios.get(`http://127.0.0.1:8000/outfits/?category=${MyOutfitsCategory}`)
         .then(response => {
            console.log(response);
            setItems(response.data)
         })
            .catch(e => console.log(e));
    }, [MyOutfitsCategory]);

    return (
        <SafeAreaView>
            <ScrollView>
                <Text>My Outfit items for {MyOutfitsCategory}</Text>
                {items.map(item => (
                    <Text key={item.id}>{item.description}</Text>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}
export default OutfitScreen;