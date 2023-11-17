import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
function ProfileScreen({ navigation }) {
    const [recentlyAddedClosetItems, setRecentlyAddedClosetItems] = useState([]);
    const [unusedClosetItems, setUnusedClosetItems] = useState([]);
    const [unusedOutfits, setUnusedOutfits] = useState([]);
    const [totalClosetItems, setTotalClosetItems] = useState(0);
    const [totalClosetValue, setTotalClosetValue] = useState(0);

    useEffect(() => {
        const fetchClosetItems = async () => {
            try {
                const closetItemsResponse = await fetch('api_endpoint_ClosetItems');
                const closetItemsData = await closetItemsResponse.json();

                setRecentlyAddedClosetItems(closetItemsData.recentlyAddedItems);
                setUnusedClosetItems(closetItemsData.unusedItems);

                const totalClosetItems = closetItemsData.recentlyAddedItems.length + closetItemsData.unusedItems.length;
                const totalClosetValue = closetItemsData.recentlyAddedItems.reduce((total, item) => total + item.price, 0) +
                closetItemsData.unusedItems.reduce((total, item) => total + item.price, 0);

                setTotalClosetItems(totalClosetItems);
                setTotalClosetValue(totalClosetValue);
            } catch (error) {
                console.error('Error fetching closet items:', error);
            }
        };
        const fetchOutfits = () => {
            // method to communicate with your backend API endpoint
            // Fetch the unused outfits from the OutfitCalendar data
            // Update the state for the unused outfits
        };
        fetchClosetItems();
        fetchOutfits();
    }, []);

    return (
        <View>
            <Text>My Profile</Text>
            <Text>Recently Added Closet Items</Text>
            {recentlyAddedClosetItems.map((ClosetItem) => (
                <Text key={ClosetItem.id}>{ClosetItem.name}</Text>
            ))}

            <Text>Unused Closet Items</Text>
            {unusedClosetItems.map((ClosetItem) => (
                <Text key={ClosetItem.id}>{ClosetItem.name}</Text>
            ))}

            <Text>Unused Outfits</Text>
            {unusedOutfits.map((outfit) => (
                <Text key={outfit.id}>{outfit.name}</Text>
            ))}
        </View>
    );
}
export default ProfileScreen;
