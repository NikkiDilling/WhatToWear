import { SafeAreaView, ScrollView, Text } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AppContext from '../AppContext';
function WardrobeItemScreen({ route }) {
    const ctx = useContext(AppContext);
    const { category } = route.params;
   
    const [items, setItems] = useState();



    useEffect(() => {
        var searchWord;
        switch(category){
            case "Tops":
                searchWord = "Top";
                debugger;
                break;
            case "Outerwear":
                searchWord = "Coat";
                break;
            case "Bottoms":
                searchWord = "Bottoms"
                break;
            case "Shoes":
                searchWord = "Shoes";
                break;
            case "Jumpers":
                searchWord = "Jumper";
                break;
            default:
                searchWord = "Top";
                break;
        }
        const test = ctx.wardrobe.filter(item => item.type == searchWord);
        setItems(test)
    
    }, []);

    return (
        <SafeAreaView>
            <ScrollView>
                <Text>My Wardrobe Items for {category}</Text>
                {items && items.map(item => {
                    return (<Text key={item.id}>{item.description}</Text>)
                })}
            </ScrollView>
        </SafeAreaView>
    );
}
export default WardrobeItemScreen;