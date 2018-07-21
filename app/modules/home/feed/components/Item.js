import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const padding = 12;

export default class Item extends React.Component {
  state = {};


  render() {
    const { text, name, image } = this.props;

    return (
      <View>
        <Metadata name={name} description={text} />
        <Header image={{ uri: image }} name={name} />
      </View>
    );
  }
}

const Metadata = ({ name, description }) => (
  <View style={styles.padding}>
    <IconBar />
    <Text style={styles.text}>{name}</Text>
    <Text style={styles.subtitle}>{description}</Text>
  </View>
);

const Header = ({ name, image }) => (
  <View style={[styles.row, styles.padding]}>
    <View style={styles.row}>
      <Text style={styles.text}>{name}</Text>
    </View>
    <Icon name="ios-more" />
  </View>
);

const Icon = ({ name }) => (
  <Ionicons style={{ marginRight: 8 }} name={name} size={22} color="black" />
);

const IconBar = () => (
  <View style={styles.row}>
    <View style={styles.row}>
      <Icon name="ios-heart-outline" />
      <Icon name="ios-chatbubbles-outline" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  text: { fontWeight: '600' },
  subtitle: {
    opacity: 0.8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
});
