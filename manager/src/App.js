import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

export default class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDmE7THtLpNIegHPHXIG093pjQc5Y6iDwk',
            authDomain: 'manager-20960.firebaseapp.com',
            databaseURL: 'https://manager-20960.firebaseio.com',
            projectId: 'manager-20960',
            storageBucket: 'manager-20960.appspot.com',
            messagingSenderId: '997852416174'
          };
          firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                 <View>
                    <Text>
                        Hello!
                    </Text>
                <LoginForm />
                </View>
          </Provider>
        );
    }
}
