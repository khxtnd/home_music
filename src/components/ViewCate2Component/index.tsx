import React, { Component } from 'react';
import { ScrollView, Dimensions, Text, View } from 'react-native';
import TabSongListComponent from '../TabSongListComponent';
import styles from './styles';

class ViewCate2Component extends Component<any, any> {
  constructor(props: { type: string }) {
    super(props);
    this.state = {
      tabs: [],
    };
  }

  componentDidMount() {
    this.setState({
      tabs: [
        {
          title: 'Tab 1',
        },
        {
          title: 'Tab 2',
        },
        {
          title: 'Tab 3',
        },
      ],
    });
  }

  renderScene = () => {
    return <TabSongListComponent />;
  };

  render() {
    const { type } = this.props;
    const { tabs } = this.state;
    return (
      <View>
        <Text style={styles.textViewCate}>{type}</Text>

        <ScrollView horizontal pagingEnabled style={{ flex: 1 }}>
          {tabs.map((tab: any, index: any) => (
            <View key={index} style={{ width: Dimensions.get('window').width }}>
              {this.renderScene()}
            </View>
          ))}
        </ScrollView>
      </View>

    );
  }
}

export default ViewCate2Component;
