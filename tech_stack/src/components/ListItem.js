import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
 
  render() {
   const { title } = this.props.library;
    return (
     <CardSection>
       <Text style={styles.titleStyles}> {title} </Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyles: {
    fontSize: 18,
    paddingLeft: 15
  }
};
 export default ListItem;


// import React from 'react';
// import { Text } from 'react-native';
// import { CardSection } from './common';

// const ListItem = ({ library }) => {
// const { title, description } = library;
// return (
  
//           <CardSection>
//             <Text> {description} </Text>
//            </CardSection>
//     );
//   };
// export default ListItem;
