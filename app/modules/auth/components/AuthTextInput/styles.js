import { StyleSheet } from 'react-native';

import { theme } from "../../index"
const { windowWidth, fontSize, normalize } = theme;

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },

    inputContainer: {
        width: windowWidth - 40,
        height: normalize(65),
        fontSize: fontSize.regular + 2,
        fontWeight: "600",
        height: 50,
        marginHorizontal: 20,
        paddingLeft: 25,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#02726b"
    }
});

export default styles;