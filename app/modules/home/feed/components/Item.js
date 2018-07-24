import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import {Divider} from 'react-native-elements';

var moment = require('moment');

import styles from './styles';


export default class Item extends React.Component {
  state = {
  };


  render() {
    const { text, name, timestamp} = this.props;

    return (
      <View>
        <Metadata name={name} description={text} timestamp={timestamp}/>
        <View style={styles.orContainer}>
          <Divider style={styles.divider} />
        </View>
      </View>
    );
  }
}

const Metadata = ({ name, description, timestamp}) => (
  <View style={styles.padding}>
    <Text style={styles.text}>{name}</Text>
    <Text style={styles.subtitle}>{description}</Text>
    <IconBar/>
  </View>
);

const Icon = ({ name }) => (
  <Ionicons style={{ marginRight: 8 }} name={name} size={22} color="black" />
); 


const IconBar = ({timestamp,}) => (
  <View style={styles.row}>
  <Text>{moment(timestamp).format('D-MMM-YYYY')}</Text>
    <View style={styles.row}>
      <Icon name="ios-heart-outline" />
      <Icon name="ios-chatbubbles-outline" />
    </View>
  </View>
);
