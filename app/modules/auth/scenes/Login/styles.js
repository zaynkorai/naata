import { StyleSheet } from 'react-native';
import { theme } from "../../index"
const {padding, fontSize, fontFamily } = theme;

const styles = StyleSheet.create({
    forgetText:{
        textAlign:"center",
        justifyContent:"center",
        color: "#02726b",
        paddingBottom: 100,
        fontSize: fontSize.regular,
        fontFamily: fontFamily.medium,
    }
});

export default styles;