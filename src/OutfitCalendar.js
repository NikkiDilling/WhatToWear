import { Calendar } from 'react-native-calendars';

const OutfitCalendar = () => {
    // Create an object with dates and associated outfits
    const outfitsWorn = {
        '2023-11-01': { selected: true, marked: true, selectedColor: 'HotPink' },
    };

    return (
        <Calendar
            markedDates={outfitsWorn}
        />
    );
};

export default OutfitCalendar;
