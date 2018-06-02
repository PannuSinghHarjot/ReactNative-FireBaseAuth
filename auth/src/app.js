import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null }
    
    componentWillMount() {
       firebase.initializeApp({
            apiKey: 'AIzaSyDPXiMsREyLkcxQDwSgeIFo8cPSwO4vesQ',
            authDomain: 'auth-a155b.firebaseapp.com',
            databaseURL: 'https://auth-a155b.firebaseio.com',
            projectId: 'auth-a155b',
            storageBucket: 'auth-a155b.appspot.com',
            messagingSenderId: '958996591398'
          });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent(){
    switch (this.state.loggedIn) {
        case true: 
        return <View style={{ padding: 5, flexDirection: 'row' }} >
                    <Button onPress={() => firebase.auth().signOut()}> 
                    Log Out 
                    </Button>
                </View>;
        case false: 
        return <LoginForm />;
        default:
        return <Spinner size="large" />;
     } 
    }  


    render() {
        return (
            <View>
                <Header>Authentication</Header>
                
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
