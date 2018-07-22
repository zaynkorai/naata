import { StyleSheet } from 'react-native';

import * as theme from '../../../../styles/theme';
const { padding, windowWidth } = theme;


const styles = StyleSheet.create({
    text: { fontWeight: '600' },
    subtitle: {
        opacity: 0.8,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5
    },
    padding: {
        padding,
    },
    avatar: {
        aspectRatio: 1,
        backgroundColor: '#D8D8D8',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#979797',
        resizeMode: 'cover',
        marginRight: padding,
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
    }

});

export default styles;