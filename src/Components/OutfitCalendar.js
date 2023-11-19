import React from 'react';
import { View } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { AntDesign } from 'react-native-vector-icons';
import { colour } from '../Styles/Stylesheet';
import { Styles } from '../Styles/Stylesheet';

LocaleConfig.locales['en'] = {
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dayNames: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    dayNamesShort: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
};
LocaleConfig.defaultLocale = 'en';
const OutfitCalendar = ({outfitData}) => {
    return (
        <View style={Styles.calendarStyles}>
        <Calendar
            markedDates={getMarkedDates(outfitData)}
            theme={{
                selectedDayBackgroundColor: colour.LightPink,
                selectedDayTextColor: colour.White,
            }}
            renderArrow={(direction) => (
                <AntDesign
                    name={`arrow${direction === 'left' ? 'left' : 'right'}`}
                    size={20}
                    color={colour.HotPink}
                />
            )}
        />
        </View>
    );
};

const getMarkedDates = (outfitData) => {
    const markedDates = {};
    Object.keys(outfitData).forEach((date) => {
        markedDates[date] = { selected: true, marked: true };
    });
    return markedDates;
};

export default OutfitCalendar;
