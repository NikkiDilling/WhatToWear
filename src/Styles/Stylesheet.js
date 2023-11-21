import { StyleSheet, Platform, StatusBar} from "react-native";
const colour = {
    HotPink: "#ed5c9b",
    LightPink: "#fa92d2",
    PastelPink: "#facde5",
    White: "#ffffff",
    Trans: "transparent",
    Black: "#000",
};

const Styles  = StyleSheet.create({
    padding: {
        padding: 35,
        paddingTop: Platform.OS === "iOS"? StatusBar.currentHeight : 10,
    },
    weatherStyles: {
        flex: 1,
        marginTop: 30,
        backgroundColor: colour.White,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
    },
    textStyles: {
        text: {
          color: colour.Black,
          fontSize: 20,
          fontWeight: '500',
          textAlign: 'center',
          padding: 20,
          alignItems: 'center',
          justifyContent: 'center',
        },
        heading: {
          color: colour.Black,
          fontSize: 25,
          fontWeight: '500',
          textAlign: 'center',
        },
    },
    formStyles: {
        container: {
            marginTop: 30,
            backgroundColor: colour.LightPink,
            padding: '1rem',
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 10,
        },
        labelText: {
            color: colour.White,
            fontSize: 14,
        },
        button: {
            backgroundColor: colour.LightPink,
            padding: '1rem',
            borderRadius: 25,
            margin: '1rem',
            alignItems: 'center',
        },
        buttonText: {
            color: colour.White,
            fontSize: 18,
        },
    },
    tabStyles: {
        tabIcon: {
            activeColor: colour.LightPink,
            inactiveColor: colour.HotPink,
            size: 30,
        },
        tabLabel: {
            activeColor: colour.LightPink,
            inactiveColor: colour.HotPink,
            size: 5,
        },
    },
    calendarStyles: {
        marginTop: 30,
    },
});
export {colour, Styles};
