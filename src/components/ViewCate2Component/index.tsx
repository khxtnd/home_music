import React, { Component, createRef } from 'react';
import {
  ScrollView,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import TabSongListComponent from '../TabSongListComponent';
import styles from './styles';
import { Genre } from '../../types';
import PagerView from 'react-native-pager-view';

class ViewCate2Component extends Component<any, any> {
  scrollViewBodyRef: any;
  scrollViewTitleRef: any;
  constructor(props: { type: string }) {
    super(props);
    this.state = {
      tabs: [
        { id: '1', title: 'Tab 1' },
        { id: '2', title: 'Tab 2' },
        { id: '3', title: 'Tab 3' },
        { id: '4', title: 'Tab 3' },
        { id: '5', title: 'Tab 3' },
        { id: '6', title: 'Tab 3' },
        { id: '7', title: 'Tab 3' },
        { id: '8', title: 'Tab 3' },
        { id: '9', title: 'Tab 3' },
      ],
      activePageIndex: 0,
    };
    this.scrollViewBodyRef = createRef();
    this.scrollViewTitleRef = createRef();

  }

  _renderScene = (item: Genre) => {
    return <TabSongListComponent />;
  };

  _handleTabPress = (index: number) => {
    this.setState({ activePageIndex: index });
    this.scrollViewBodyRef.current.setPage(index);
  };

  _handlePageChange = (event: any) => {
    const { position } = event.nativeEvent;
    this.setState({ activePageIndex: position });
  };
  
  render() {
    const { type } = this.props;
    const { tabs, activePageIndex } = this.state;
    return (
      <View>
        <Text style={styles.textViewCate}>{type}</Text>
        <ScrollView
          horizontal
          ref={this.scrollViewTitleRef} 
        >
          {tabs.map((item: Genre, index: number) => (
            <TouchableOpacity
              key={item.id}
              style={styles.tabItem}
              onPress={() => this._handleTabPress(index)}
            >
              <Text
                style={[
                  styles.tabBarItemText,
                  index === activePageIndex && styles.activeTabText,
                ]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>



        <PagerView style={{ flex: 1, height: 300 }} initialPage={0} onPageSelected={this._handlePageChange} ref={this.scrollViewBodyRef}>
          {tabs.map((item: Genre, index: number) => (
            <View key={item.id} style={{ height: 270 }}>
              {this._renderScene(item)}
            </View>
          ))}
        </PagerView>
      </View>
    );
  }
}

export default ViewCate2Component;