import React from "react";
import { Component } from "react";
import { FlatList, Image, Text, View } from "react-native";
import styles from "./styles";
import { ColorsInApp } from "../../values/ColorsInApp";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";
import EvilIcons from "react-native-vector-icons/EvilIcons"
import { Title } from "../../values/Title";
import AntDesignIcons from "react-native-vector-icons/AntDesign"
import { Song } from "../../types"; 0



class ViewCate3Component extends Component<any, any>{
  constructor(props: { type: string }) {
    super(props);
    this.state = {
      listSong: [
        { id: 0, image: 'https://bizweb.dktcdn.net/100/438/408/files/hinh-anh-meo-hai-huoc-yodyvn-c7257e34-ea9a-47c0-b357-666753f0ce90.jpg?v=1694069288618' },
        { id: 5, image: 'https://bizweb.dktcdn.net/100/438/408/files/hinh-anh-meo-hai-huoc-yodyvn2.jpg?v=1694069335855' },
        { id: 6, image: 'https://bizweb.dktcdn.net/100/438/408/files/hinh-anh-meo-hai-huoc-yodyvn2.jpg?v=1694069335855' },
        { id: 7, image: 'https://bizweb.dktcdn.net/100/438/408/files/hinh-anh-meo-hai-huoc-yodyvn2.jpg?v=1694069335855' },
        { id: 8, image: 'https://bizweb.dktcdn.net/100/438/408/files/hinh-anh-meo-hai-huoc-yodyvn2.jpg?v=1694069335855' },
      ],
    };
  }

  _viewItemSong = (item: Song, index: number) => {
    const marginStart = index === 0 ? 15 : 0;

    return (
      <View>
        <Image
          style={[styles.imageItemSong, { marginStart }]}
          source={{ uri: item.image }}
        />
        <AntDesignIcons
          style={{ position: 'absolute', bottom: 15, end: 15 }}
          name="play"
          size={25}
          color={ColorsInApp.while}
        />
      </View>
    );
  };

  render() {
    const { type } = this.props;
    const { listSong: list } = this.state;
    return (
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.textViewCate}>{type}</Text>
          <Text style={styles.textViewAll}>{Title.viewAll}</Text>
        </View>
        <FlatList
          style={{ marginTop: 5 }}
          horizontal
          renderItem={({ item, index }) => this._viewItemSong(item, index)}
          data={list}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
export default ViewCate3Component;