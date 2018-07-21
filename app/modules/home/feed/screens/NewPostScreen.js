import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';

import Fire from '../Fire';

const validation = {
    length: {
      minimum: 500,
      message: '^Please Write atleast 50 Character long'
    }
  }


export default class NewPostScreen extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      text: "",
    }
  }

  onPost = () => {

    const { text } = this.state;

    if (text) {
      Fire.shared.post({ text: text.trim() });
    } else {
      alert('Need valid description');
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <TextInput
          style={styles.input}
          placeholder="Add a neat description, What help you need"
          onChangeText={text => {
            this.setState({ text });
          }}
          multiline={true}
          numberOfLines={5}
        />

        <Button       
          title="Post"
          titleStyle={{ fontWeight: "200" }}
          buttonStyle={{
            width: 100,
            height: 45,
            margin: 5,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5,
            alignSelf: 'flex-end'
          }}
          containerStyle={{ marginTop: 20 }}

          onPress={this.onPost}

        />
      </View>
    );
  }
}

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
});
