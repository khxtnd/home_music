import React, { Component, createRef } from 'react';
import {
  ScrollView,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import PagerCateComponent from '../PagerCateComponent';
import styles from './styles';
import { Category } from '../../types';
import PagerView from 'react-native-pager-view';


class NewOrRankingComponent extends Component<any, any> {
  pagerViewRef: any;
  flatlistRef: any;
  constructor(props: { listData: Category[], type: string }) {
    super(props);
    this.state = {
      activePageIndex: 0,
    };
    this.pagerViewRef = createRef();
    this.flatlistRef = createRef();

  }

  _handleTabPress = (index: number) => {
    this.setState({ activePageIndex: index });
    this.pagerViewRef.current.setPage(index);
  };

  _handlePageChange = (event: any) => {
    const { position } = event.nativeEvent;
    this.setState({ activePageIndex: position });
    this._scrollToIndex(position)

  };

  _scrollToIndex = (index: number) => {
    if (!this.flatlistRef || !this.flatlistRef.current) return;
    this.flatlistRef.current.scrollToIndex({ index: index, animated: true, viewPosition: 0.5 });


    console.log("aaaaa", index + "")
  };

  render() {
    const { listData, type } = this.props;
    const { activePageIndex } = this.state;
    return (
      <View>
        <Text style={styles.textViewCate}>{type}</Text>
        <FlatList
          horizontal
          ref={this.flatlistRef}
          data={listData}
          renderItem={({ item, index }) => {
            let marginStart = index === 0 ? 15 : 0;
            return (
              <TouchableOpacity
                style={[styles.tabItem, { marginStart: marginStart }]}
                onPress={() => this._handleTabPress(index)}
              >
                <Text
                  style={[
                    styles.tabBarItemText,
                    index === activePageIndex && styles.activeTabText,
                  ]}
                >
                  {item.cateName}
                </Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.id}

        />

        <PagerView style={{ flex: 1, height: 300 }} initialPage={0} onPageSelected={this._handlePageChange} ref={this.pagerViewRef}>
          {listData.map((category: Category, index: number) => (
            <View key={category.id} style={{ height: 270 }}>
              <PagerCateComponent category={category} />
            </View>
          ))}
        </PagerView>
      </View>
    );
  }
}


export default NewOrRankingComponent;