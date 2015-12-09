'use strick';

var React = require('react-native');
var BookList = require('./BookList');

var {
	StyleSheet,
	View,
	NavigatorIOS,
} = React;

var styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});

module.exports = React.createClass({
	render: function(){
		return (
			<NavigatorIOS 
				style={styles.container}
				initialRoute={{
					title: 'Featured Books',
					component: BookList
				}}/>
			);
	}
}); 