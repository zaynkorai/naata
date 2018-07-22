import { StyleSheet } from 'react-native';

import { color, fontFamily, padding, fontSize } from "../../styles/theme"

const resizeMode = 'contain';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.white
    },

    wrapper:{
        paddingHorizontal:15,
        paddingBottom: padding * 2,
        justifyContent:"center",
        alignItems:"center"
    },

    image:{
        height: 50,
        width: 50,
        backgroundColor: color.white,
        marginBottom: padding,
        resizeMode
    },

    title: {
        fontSize: fontSize.large + 15,
        lineHeight: fontSize.large + 20,
        fontFamily: fontFamily.bold,
        color: "#02726b",
        letterSpacing: 1 
    },
    tagLine: {
        color: color.light_black,
        fontSize: fontSize.large -6,
        lineHeight: fontSize.large,
        marginTop: 5,
        justifyContent: "center" 
    },


    activityIndicatorContainer: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 16,
        height: 50
    },

    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    }
});


export default styles;