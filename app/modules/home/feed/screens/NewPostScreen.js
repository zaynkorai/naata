import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Button, FormValidationMessage } from 'react-native-elements'
import {Actions} from 'react-native-router-flux';
import { isEmpty } from '../../../auth/utils/validate'

import Fire from '../Fire';
import styles from './styles';

const error = {
  text: "",
}

export default class NewPostScreen extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      error: error
  }

  this.myTextInput = React.createRef();
  }

  onPost = () => {
    const { text } = this.state;
    if (text.length < 40){
      alert('Write at least 40 Characters');
    }
    else if (text) {

      this.setState({error: error}); //clear out error messages
      Fire.shared.post({ text: text.trim() });
      Actions.Feed()
      this.myTextInput.current.clear();
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
          ref={this.myTextInput}
        />
        {
          (!isEmpty(this.props.error)) &&
          <FormValidationMessage>
            {this.props.error}
          </FormValidationMessage>
        }

        <Button
          raised
          title="Post"
          containerViewStyle={styles.buttonContainer}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          containerStyle={{ marginTop: 20 }}
          onPress={this.onPost}

        />
      </View>
    );
  }
}
