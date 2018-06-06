import React, { Component } from 'react';
import { connect } from 'react-redux';
import {emailChanged, onPasswordChange} from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
   onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text){
    this.props.onPasswordChange(text)
  }

  render() {
    return (
     <Card>
       <CardSection> 
         <Input 
            label="email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
         />
       </CardSection>
       <CardSection>
         <Input
            secureTextEntry   
            label="password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
         />
       </CardSection>
       <CardSection>
         <Button> Login </Button>
       </CardSection>
      </Card>
    );
  }
}
const mapStateToProps = state => {
   const { email, password } = state.auth;
  return{
    email,
    password
  };
};

 export default connect(mapStateToProps, {emailChanged, passwordChanged})(LoginForm);
 