'use strict';

var React = require('react-native');

var {
	StyleSheet,
	Text,
	View,
	Component,
	Image
} = React;

var styles = StyleSheet.create({
	container: {
		marginTop: 75,
		alignItems: 'center',
		paddingBottom: 75
	},
	image: {
    width: 107,
    height: 165,
    padding: 10
  },
  description: {
    padding: 10,
    fontSize: 15,
    color: '#656565'
  }
});

module.exports = React.createClass({
	render: function(){
		var book = this.props.book;
		var imageURI = (typeof book.volumeInfo.imageLinks !== 'undefinde') ? book.volumeInfo.imageLinks.thumbnail : '';
		var description = (typeof book.volumeInfo.description !== 'undefined') ? book.volumeInfo.description : '';
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: imageURI}} />
          <Text style={styles.description}>{description}</Text>
      </View>
    );
	}
});