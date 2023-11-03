import { StyleSheet, Platform, StatusBar} from "react-native";
export const colours = {
    HotPink: "#c70049",
    Pink_light: "rgba(227,25,99,1)",
    White: "#ffffff",
    Trans: "transparent",
    Black: "#000",
};

export const defaultStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colours.White,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: colours.Black,
        fontSize: 20,
        fontWeight: "500",
        textAlign: "center",
    },
    padding: {
        padding: 35,
        paddingTop: Platform.OS === "iOS"? StatusBar.currentHeight : 0,
    },
});
export const inputStyling = StyleSheet.create({
    height: 50,
    backgroundColor: colours.White,
    marginVertical: 10,
    marginHorizontal: 20,
});
export const formHeading = StyleSheet.create({
    text: {
        color: colours.Black,
        fontSize: 25,
        fontWeight: "500",
        textAlign: "center",
        backgroundColor: colours.HotPink,
        padding: 5,
        borderRadius: 5,
    },
});
export const formStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colours.HotPink,
        borderRadius: 10,
        justifyContent: "center",
        elevation: 10,
    },
    button: {
        backgroundColor: colours.HotPink,
        margin: 20,
        padding: 6,
    },
});
