import React from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';

import styles from './styles'
import OfflineNotice from '../OfflineNotice'


export default class extends React.Component {
    render() {
        return (
            <View style={styles.container}>
<OfflineNotice/>
                <View style={styles.wrapper}>
                    <Image style={styles.image} source={{uri: ""}}/>
                    <Text style={styles.title}>naata</Text>
                </View>
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            </View>
        );
    }
}