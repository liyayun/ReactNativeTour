'use strict';
 
var React = require('react-native');
var SearchBooks = require('./SearchBooks');
 
var {
    StyleSheet,
    View,
    NavigatorIOS
  } = React;
 
var styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
 
module.exports = React.createClass( {
    render: function() {
        console.log(SearchBooks);
        return (
            <NavigatorIOS 
                style={styles.container}
                initialRoute={{
                    title: 'Search Books',
                    component: SearchBooks
                }}/>
        );
    }
});