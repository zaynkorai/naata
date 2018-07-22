
import { StyleSheet } from 'react-native';

import * as theme from '../../../../styles/theme';
const { padding, color, fontSize, windowWidth, fontFamily, normalize } = theme;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  input: {
    height: 200,
    padding: 10,
    margin: 10,
    marginTop: 60,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#48BBEC',
  },

  errorText: {
    color: color.red,
    width: (windowWidth - 45),
    marginTop: 20,
},

  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    backgroundColor: "#02726b",
    height: normalize(55),
    width: windowWidth,
  },

  buttonText: {
    fontSize: fontSize.regular + 2,
    fontFamily: fontFamily.medium
  }
});

export default styles;