import { StyleSheet, Platform, StatusBar} from "react-native";
const colour = {
    HotPink: "#c70049",
    Pink_light: "rgba(227,25,99,1)",
    White: "#ffffff",
    Trans: "transparent",
    Black: "#000",
};

const Styles  = StyleSheet.create({
    padding: {
        padding: 35,
        paddingTop: Platform.OS === "iOS"? StatusBar.currentHeight : 0,
    },
    textStyles: {
        text: {
          color: colour.Black,
          fontSize: 20,
          fontWeight: '500',
          textAlign: 'center',
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
            flex: 1,
            padding: 20,
            backgroundColor: colour.Pink_light,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 10,
        },
        button: {
            backgroundColor: colour.Pink_light,
            padding: 10,
            borderRadius: 10,
            margin: 2,
            alignItems: 'center',
        },
        buttonText: {
            color: colour.White,
            fontSize: 18,
        },
    },
    predictionForm:{
        container:{
            margin: '2rem',
            borderRadius: 25,
            padding: '1rem',
            backgroundColor: '#fa92d2',
            color: colour.White
        }, 
        text:{
            color: colour.White,
        },
        selectBg:{
            padding: '1rem',
            color: 'black',
            backgroundColor: colour.White,
        }
    },

    tabStyles: {
        tabIcon: {
            color: colour.HotPink,
            size: 30,
        },
        tabLabel: {
            color: colour.HotPink,
            fontSize: 10,
        },
    },
});
export {colour, Styles};
