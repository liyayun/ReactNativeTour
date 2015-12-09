'use strict';

var React = require('react-native');
var BookDetail = require('./BookDetail');

var {
	StyleSheet,
	Image,
	Text,
	View,
	Component,
	ListView,
	TouchableHighlight,
	ActivityIndicatorIOS
} = React;

var styles = StyleSheet.create({
	container: {
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
    	backgroundColor: '#ddd'
    },
    listView: {
    	marginTop: 65,
    	marginBottom: 45,
    	backgroundColor: '#f5fcff'
    },
    loading: {
    	flex: 1,
    	alignItems:'center',
    	justifyContent:'center'
    }
})


var REQUEST_URL = 'https://www.googleapis.com/books/v1/volumes?q=subject:fiction';

module.exports = React.createClass({
	getInitialState: function(){
		return {
			isLoading: true,
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2
			})
		}
	},
	componentDidMount() {
     this.fetchData();
   },
   fetchData() {
       fetch(REQUEST_URL)
       .then((response) => response.json())
       .then((responseData) => {
           this.setState({
               dataSource: this.state.dataSource.cloneWithRows(responseData.items),
               isLoading: false
           });
       })
       .done();
   },
	render: function(){
		 if (this.state.isLoading) {
         return this.renderLoadingView();
      }

    return (
    	<ListView dataSource={this.state.dataSource}
    		renderRow={this.renderBook}
    		style={styles.listView}/>
    );
	},
	showBookDetail: function(book){
		this.props.navigator.push({
			title: book.volumeInfo.title,
			component: BookDetail,
			passProps: {book}
		});
	},
	renderBook: function(book){
		return (
			<TouchableHighlight onPress={()=> this.showBookDetail(book)} underlayColor='#ddd'>
    		<View>
    			<View style={styles.container}>
    				<Image
                source={{uri: book.volumeInfo.imageLinks.thumbnail}}
                style={styles.thumbnail} />
                <View style={styles.rightContainer}>
                  <Text style={styles.title}>{book.volumeInfo.title}</Text>
                  <Text style={styles.author}>{book.volumeInfo.authors}</Text>
                </View>
    			</View>
    			<View style={styles.separator}/>
    		</View>
    	</TouchableHighlight>
			);
	},
	renderLoadingView: function(){
    return (
        <View style={styles.loading}>
            <ActivityIndicatorIOS
                size='large'/>
            <Text>
                Loading books...
            </Text>
        </View>
    );
	}
});