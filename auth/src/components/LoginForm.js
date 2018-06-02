import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';   
import { Button, Card, CardSection, Input, Spinner } from './common';

export default class LoginForm extends Component {

    state = {
        email: '',
        password: '',
        error: '',
        test: false
    }


    onButtonPress() {
        this.setState({ error: '', test: true });

        const { email, password } = this.state;
       
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
             }); 
    }

    onLoginFail() {
        this.setState({ error: 'Authentication Failed', test: false });
    }

    onLoginSuccess() {
        this.setState({ 
            email: '',
            password: '',
            test: false,
            error: ''
        });
    }

    renderButton() {
        if (this.state.test) {
            return <Spinner size="small" />;
        }
        return (
           
            <Button onPress={this.onButtonPress.bind(this)}> 
                    Login
             </Button>
        );
}

    render() {
        //console.log(this.state.text);
       
        return (
             <Card>
                <CardSection>
                     <Input
                        placeholder="user@email.com"
                        label="Email"
                        value={this.state.email} 
                        onChangeText={email => this.setState({ email })} 
                     />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                    />
                </CardSection>
                <CardSection>
                    { this.renderButton() }
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

               
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};
