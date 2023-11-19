import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
function ProfileScreen({ navigation }) {
    const [recentlyAddedWardrobeItems, setRecentlyAddedWardrobeItems] = useState([]);
    const [unusedWardrobeItems, setUnusedWardrobeItems] = useState([]);
    const [unusedOutfits, setUnusedOutfits] = useState([]);
    const [totalWardrobeItems, setTotalWardrobeItems] = useState(0);
    const [totalWardrobeValue, setTotalWardrobeValue] = useState(0);

    useEffect(() => {
        const fetchWardrobeItems = async () => {
            try {
                const wardrobeItemsResponse = await fetch('api_endpoint_WardrobeItems');
                const wardrobeItemsData = await wardrobeItemsResponse.json();

                setRecentlyAddedWardrobeItems(wardrobeItemsData.recentlyAddedItems);
                setUnusedWardrobeItems(wardrobeItemsData.unusedItems);

                const totalWardrobeItems = wardrobeItemsData.recentlyAddedItems.length + wardrobeItemsData.unusedItems.length;
                const totalWardrobeValue = wardrobeItemsData.recentlyAddedItems.reduce((total, item) => total + item.price, 0) +
                wardrobeItemsData.unusedItems.reduce((total, item) => total + item.price, 0);

                setTotalWardrobeItems(totalWardrobeItems);
                setTotalWardrobeValue(totalWardrobeValue);
            } catch (error) {
                console.error('Error fetching wardrobe items:', error);
            }
        };
        const fetchOutfits = () => {
            // method to communicate with your backend API endpoint
            // Fetch the unused outfits from the OutfitCalendar data
            // Update the state for the unused outfits
        };
        fetchWardrobeItems();
        fetchOutfits();
    }, []);

    return (
        <View>
            <Text>My Profile</Text>
            <Text>Recently Added Wardrobe Items</Text>
            {recentlyAddedWardrobeItems.map((WardrobeItem) => (
                <Text key={WardrobeItem.id}>{WardrobeItem.name}</Text>
            ))}

            <Text>Unused Wardrobe Items</Text>
            {unusedWardrobeItems.map((WardrobeItem) => (
                <Text key={WardrobeItem.id}>{WardrobeItem.name}</Text>
            ))}

            <Text>Unused Outfits</Text>
            {unusedOutfits.map((outfit) => (
                <Text key={outfit.id}>{outfit.name}</Text>
            ))}
        </View>
    );
}
export default ProfileScreen;
