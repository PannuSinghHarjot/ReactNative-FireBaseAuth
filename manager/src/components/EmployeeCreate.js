import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native'

//import { View, Text, Input } from 'react-native';
import { employeeUpdate, employeeCreate } from '../actions'
import { Card, CardSection, Button, Input} from './common'
 class EmployeeCreate extends Component {


onButtonPress() {
  const { name , phone , shift} = this.props

  this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
}


  render() {
    return (
      <Card>
       
        <CardSection> 
            <Button onPress={this.onButtonPress.bind(this)}>Create </Button>
         </CardSection>
      </Card>
    );
  }
}

//why

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return {name, phone, shift};
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate }) (EmployeeCreate);