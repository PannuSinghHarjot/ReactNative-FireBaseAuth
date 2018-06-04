import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
 
  renderDescription() {
    const { library, selectedLibraryId } = this.props;  
    if (library.id === selectedLibraryId) {
      return (
        <Text> 
          {library.description}
        </Text>
      );
    }
  }
 
  render() {
   const { title, id } = this.props.library;
    return (
      <TouchableWithoutFeedback 
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={styles.titleStyles}> {title} </Text>
          </CardSection>
            {this.renderDescription()}
        </View>
     </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyles: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = state => ({ selectLibraryId: state.selectedLibraryId });


export default connect(mapStateToProps, actions)(ListItem);


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
