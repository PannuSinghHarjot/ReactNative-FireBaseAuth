import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router'

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
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                 
               <Router />
                
          </Provider>
        );
    }
}

   