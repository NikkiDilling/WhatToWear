import React from 'react';
import { View } from 'react-native';
import OutfitCalendar from '../Components/OutfitCalendar';
function OutfitCalendarScreen({ navigation }) {
    // example outfitData, creates an object with dates and associated outfits
    const outfitData = {
        '2023-11-02': ['Outfit 1', 'Outfit 2'],
        '2023-11-07': ['Outfit 3'],
    };
    return (
        <View>
            <OutfitCalendar outfitData={outfitData}/>
        </View>
    );
}
export default OutfitCalendarScreen;
