import { StyleSheet } from 'react-native';
import { theme } from "../../index"
const { padding, color, fontSize, fontFamily, windowWidth, normalize } = theme;

const resizeMode = 'contain';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    topContainer: {
        height: 300, 
        paddingHorizontal: 15,
        paddingBottom: padding * 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#02726b",

    },

    image: {
        height: 100,
        width: 100,
        backgroundColor: color.grey,
        marginBottom: padding,
        resizeMode
    },

    title: {
        fontSize: fontSize.large + 15,
        lineHeight: fontSize.large + 20,
        fontFamily: fontFamily.bold,
        color: color.white,
        letterSpacing: 1
    },

    tagLine: {
        color: color.white,
        fontSize: fontSize.large -10,
        lineHeight: fontSize.large-2,
        justifyContent: "center" 
    },

    subText: {
        color: "#414141",
        fontSize: fontSize.large,
        lineHeight: fontSize.large + 10,
        marginVertical: padding * 2
    },

    //===============================

    bottomContainer: {
        backgroundColor: "white",
        paddingVertical: padding * 3,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    },

    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    },

    containerView: {
        width: windowWidth - 100
    },

    socialButton: {
        height: normalize(55),
        borderRadius: 20,
        marginTop: 0,
        marginBottom: 0
    },

    button: {
        backgroundColor: "#02726b",
        height: normalize(55)
    },

    buttonText: {
        fontSize: fontSize.regular + 2,
        fontFamily: fontFamily.medium
    },

    bottom: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: padding * 2
    },

    bottomText: {
        fontSize: fontSize.regular,
        fontFamily: fontFamily.medium,
        marginRight: 5,
        color: "#414141"
    },

    signUpText: {
        fontSize: fontSize.regular + 4,
        color: "#02726b",
        fontFamily: fontFamily.medium
    },

    orContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        width: windowWidth
    },

    divider: {
        backgroundColor: '#D0D5DA',
        position: "absolute",
        top: 19,
        left: 20,
        right: 20
    },

    orText: {
        backgroundColor: 'white',
        fontSize: fontSize.regular,
        fontFamily: fontFamily.medium,
        color: "#414141",
        paddingHorizontal: padding
    }
});

export default styles;