import React, { Component, createRef } from 'react';
import { ScrollView, Dimensions, Text, View, TouchableOpacity } from 'react-native';
import TabSongListComponent from '../TabSongListComponent';
import styles from './styles';
import { Genre } from '../../types';

class ViewCate2Component extends Component<any, any> {
  scrollViewRef: any;
  constructor(props: { type: string }) {
    super(props);
    this.state = {
      tabs: [
        { id: '1', title: 'Tab 1' },
        { id: '2', title: 'Tab 2' },
        { id: '3', title: 'Tab 3' },
      ],
      activeTabIndex: 0,
    };
    this.scrollViewRef = createRef();
  }

  renderScene = () => {
    return <TabSongListComponent />;
  };

  handleTabPress = (index: number) => {
    this.setState({ activeTabIndex: index });
    this.scrollViewRef.current.scrollTo({ x: index * Dimensions.get('window').width, animated: true });
  };

  handleScroll = (event: any) => {
    const { contentOffset } = event.nativeEvent;
    const currentIndex = Math.round(contentOffset.x / Dimensions.get('window').width);
    this.setState({ activeTabIndex: currentIndex });
  };
  render() {
    const { type } = this.props;
    const { tabs,  activeTabIndex } = this.state;
    return (
      <View>
        <Text style={styles.textViewCate}>{type}</Text>
        <View style={styles.tabBar}>
          {tabs.map((tab: Genre, index: number) => (
            <TouchableOpacity
              key={tab.id}
              style={[
                styles.tabBarItem,
                index === activeTabIndex && styles.activeTab // Highlight active tab
              ]}
              onPress={() => this.handleTabPress(index)}
            >
              <Text style={styles.tabBarItemText}>{tab.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <ScrollView
          ref={this.scrollViewRef}
          horizontal
          pagingEnabled
          style={{ flex: 1 }}
          onScroll={this.handleScroll}
          scrollEventThrottle={16} // Adjust the scroll event throttle as needed
        >
          {tabs.map((tab: Genre, index: number) => (
            <View key={tab.id} style={{ width: Dimensions.get('window').width }}>
              {this.renderScene()}
            </View>
          ))}
        </ScrollView>

      </View>
    );
  }
}

export default ViewCate2Component;