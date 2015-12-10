/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Featured = require('./components/Featured');
var Search = require('./components/Search');

var {
  AppRegistry,
  TabBarIOS,
  Component
} = React;

var ReactNativeTour = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'featured'
    };
  },
  render: function() {
    return (
      <TabBarIOS 
        barTintColor="black"
        selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item 
          selected={this.state.selectedTab === 'featured'} 
          title="Featured"
          systemIcon="featured"
          onPress={() => {
            this.setState({
              selectedTab: 'featured'
            });
          }}>
          <Featured/>
        </TabBarIOS.Item>

        <TabBarIOS.Item 
          selected={this.state.selectedTab === 'search'} 
          title="Search"
          systemIcon="search"
          onPress={() => {
            this.setState({
              selectedTab: 'search'
            });
          }}>
          <Search />
        </TabBarIOS.Item>
       </TabBarIOS>    
    );
  }
});

AppRegistry.registerComponent('ReactNativeTour', () => ReactNativeTour);
