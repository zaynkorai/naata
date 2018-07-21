import React, {
    Component,
    PropTypes,
  } from 'react';
  import {
    StatusBar,
    Text,
    View,
    StyleSheet,
    PixelRatio,
    BackAndroid,
  } from "react-native";
  
  import { Router, Scene, Actions } from 'react-native-router-flux';
  import Icon from 'react-native-vector-icons/FontAwesome';
  
  class TabIcon extends Component {
    render() {
      const color = this.props.selected ? Globals.color : '#301c2a';
  
      return (
        <View style={{
          flex:1,
          alignItems:'center',
          alignSelf:'center',
          justifyContent: 'center',
          marginBottom: -5,
          }}>
          <Icon style={{color: color}} name={this.props.iconName || "circle"} size={16}/>
          <Text style={{color: color, fontSize: 12}}>{this.props.title}</Text>
        </View>
      );
    }
  }
  
  
            <Router>
              <Scene key="root">
                <Scene key="tabbar" component={DrawerMenu} type="reset" duration={1} initial={true} >
                  <Scene key="main" tabs={true} tabBarStyle={styles.tabBar} default="newsfeed">
  
                    <Scene  key="tags"
                            title="Tags"
                            iconName="tags"
                            icon={TabIcon}
                            hideNavBar={true}
                            component={Tags}
                            initial={true}
                    />
                    <Scene  key="newsfeed"
                            title="MAin"
                            iconName="newspaper-o"
                            icon={TabIcon}
                            hideNavBar={true}
                            component={NewsFeed}
                     />
  
                    <Scene  key="mynews"
                            title="MyFeed"
                            iconName="user"
                            icon={TabIcon}
                            hideNavBar={true}
                            component={NewsFeedUser}
                    />
              </Scene>
          </Scene>
        </Scene>
s      </Router>