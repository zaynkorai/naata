import React from 'react';
import { StyleSheet } from "react-native";
import { Scene, Router, ActionConst, Stack, TabIcon, Tabs } from 'react-native-router-flux';

//Splash Component
import Splash from '../components/Splash/Splash';

//Authentication Scenes
import Welcome from '../modules/auth/scenes/Welcome';
import Register from '../modules/auth/scenes/Register';
import CompleteProfile from '../modules/auth/scenes/CompleteProfile';
import Login from '../modules/auth/scenes/Login';
import ForgetPassword from '../modules/auth/scenes/ForgetPassword';
// import Home from '../modules/home/Home';
// Import the screens
import Feed from '../modules/home/feed/screens/FeedScreen';
import NewPost from '../modules/home/feed/screens/NewPostScreen';

//Import Store, actions
import store from '../redux/store'
import { checkLoginStatus } from "../modules/auth/actions";

import { fontFamily, normalize } from "../styles/theme";

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            isReady: false,
            isLoggedIn: false
        }
    }

    componentDidMount() {
        let _this = this;
        store.dispatch(checkLoginStatus((isLoggedIn) => {
            _this.setState({ isReady: true, isLoggedIn });
        }));
    }

    render() {
        if (!this.state.isReady)
            return <Splash />

        return (
            <Router>
                <Scene key="root"
                    hideNavBar
                    navigationBarStyle={styles.navBar}
                    titleStyle={styles.title}
                    backButtonTintColor={"rgba(0,0,0,.84)"}>
                    <Stack key="Auth" initial={!this.state.isLoggedIn}>
                        <Scene key="Welcome" component={Welcome} title="" initial={true} hideNavBar />
                        <Scene key="Register" component={Register} title="" back />
                        <Scene key="CompleteProfile" component={CompleteProfile} title="Select Username"
                            back={false} />
                        <Scene key="Login" component={Login} title="Login" />
                        <Scene key="ForgetPassword" component={ForgetPassword} title="ForgetPassword" />
                    </Stack>

                    <Stack key="Main" initial={this.state.isLoggedIn}>

                        <Scene key="tabbar" tabs tabBarPosition="bottom" tabBarStyle={{ borderTopColor: '#00bb00', borderTopWidth: 1, }} >
                            <Scene key="Feed" title="Feeds" component={Feed} />
                            <Scene key="NewPost" title="New Post" component={NewPost} />
                        </Scene>

                    </Stack>
                </Scene>
            </Router>
        )
    }
}


const styles = StyleSheet.create({
    navBar: {
        backgroundColor: "#fff",
        borderBottomWidth: 0,
        justifyContent: 'center'
    },

    title: {
        fontSize: normalize(16),
        lineHeight: normalize(19),
        fontFamily: fontFamily.bold,
        color: "rgba(0,0,0,.84)"
    }
});