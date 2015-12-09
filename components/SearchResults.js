'use strict';

var React = require('react-native');
var BookDetail = require('./BookDetail');

var {
    StyleSheet,
    View,
    Text,
    Component,
    TouchableHighlight,
   	Image,
   	ListView
} = React;

var styles = StyleSheet.create({
	  container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginBottom: 8
    },
    author: {
        color: '#656565'
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
    listView: {
        backgroundColor: '#F5FCFF'
    },
    cellContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10
    },
    thumbnail: {
        width: 53,
        height: 81,
        marginRight: 10
    },
    rightContainer: {
        flex: 1
    }
});


module.exports = React.createClass({
	getInitialState: function() {
    var dataSource = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
    return {
      dataSource: dataSource.cloneWithRows(this.props.books)
    };
  },
  render: function(){
  	return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderBook}
        style={styles.listView}/>
    	)
  },
  renderBook: function(book){
  	 var imageURI = (typeof book.volumeInfo.imageLinks !== 'undefined') ? book.volumeInfo.imageLinks.thumbnail : null;
 
        return (
            <TouchableHighlight onPress={() => this.showBookDetail(book)}
                                underlayColor='#dddddd'>
                <View>
                    <View style={styles.cellContainer}>
                        <Image
                            source={{uri: imageURI}}
                            style={styles.thumbnail} />
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{book.volumeInfo.title}</Text>
                            <Text style={styles.author}>{book.volumeInfo.authors}</Text>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
        );
  },
  showBookDetail: function(book){
  	this.props.navigator.push({
            title: book.volumeInfo.title,
            component: BookDetail,
            passProps: {book}
      	});
  }
});

