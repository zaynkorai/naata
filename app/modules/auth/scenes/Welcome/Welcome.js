import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import { Button, SocialIcon, Divider } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
import { Facebook } from 'expo';

import { actions as auth, constants as c } from "../../index"
const { signInWithFacebook } = auth;

import styles from "./styles"
import AuthContainer from "../../components/AuthContainer"

class Welcome extends React.Component {
    constructor() {
        super();
        this.state = {}


        this.onSuccess = this.onSuccess.bind(this);
        this.onError = this.onError.bind(this);
        this.onSignInWithFacebook = this.onSignInWithFacebook.bind(this);
    }


    //get users permission authorization (ret: facebook token)
    async onSignInWithFacebook() {
        const options = { permissions: ['public_profile', 'email'], }
        const { type, token } = await Facebook.logInWithReadPermissionsAsync(c.FACEBOOK_APP_ID, options);

        if (type === 'success') {
            this.props.signInWithFacebook(token, this.onSuccess, this.onError)
        }
    }

    onSuccess({ exists, user }) {
        if (exists) Actions.Main()
        else Actions.CompleteProfile({ user })
    }

    onError(error) {
        alert(error.message);
    }

    render() {
        return (
            <AuthContainer>
                <View style={styles.container}>
                    <View style={styles.topContainer}>
                        <Text style={styles.title}>Naata</Text>
                        <Text style={styles.tagLine}>A Education Connection Between</Text>  
                        <Text style={styles.tagLine}>Needy & Higher Education Students</Text>                
                    </View>

                    <View style={styles.bottomContainer}>
                        <View style={[styles.buttonContainer]}>
                            <SocialIcon
                                raised
                                button
                                type='facebook'
                                title='SIGN IN WITH FACEBOOK'
                                iconSize={19}
                                style={[styles.containerView, styles.socialButton]}
                                fontStyle={styles.buttonText}
                                onPress={this.onSignInWithFacebook} />

                            <View style={styles.orContainer}>
                                <Divider style={styles.divider} />
                            </View>

                            <Button
                                raised
                                borderRadius={20}
                                title={'SIGN IN WITH E-MAIL'}
                                containerViewStyle={[styles.containerView]}
                                buttonStyle={[styles.button]}
                                textStyle={styles.buttonText}
                                onPress={Actions.Login} />
                        </View>
                        <View style={styles.bottom}>
                            <Text style={styles.bottomText}>
                                Make an account
                            </Text>

                            <TouchableOpacity onPress={Actions.Register}>
                                <Text style={styles.signUpText}>
                                    Sign Up
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </AuthContainer>
        );
    }
}


export default connect(null, { signInWithFacebook })(Welcome);