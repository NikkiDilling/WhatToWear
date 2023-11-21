import { SafeAreaView, ScrollView, Text } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
function WardrobeItemScreen({ route }) {
    const { category } = route.params;
    const [items, setItems] = useState([]);

    useEffect(() => {
      // Fetch wardrobe items for the selected category
      axios.get(`http://127.0.0.1:8000/wardrobe/?category=${category}`)
        .then(response => {
          console.log(response);
          setItems(response.data)
        })
        .catch(e => console.log(e));
    }, [category]);

    return (
        <SafeAreaView>
            <ScrollView>
                <Text>My Wardrobe Items for {category}</Text>
                {items.map(item => (
                    <Text key={item.id}>{item.description}</Text>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}
export default WardrobeItemScreen;