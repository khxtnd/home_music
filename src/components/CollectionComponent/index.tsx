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
import { CollectionType, ItemInCollection} from "../../types"; 0


class CollectionComponent extends Component<any, any>{
  constructor(props: { collectionType: CollectionType }) {
    super(props);
  }

  _viewItemSong = (itemInCollection: ItemInCollection, index: number) => {
    const marginStart = index === 0 ? 15 : 0;

    return (
      <View>
        <Image
          style={[styles.imageItemSong, { marginStart }]}
          source={{ uri: itemInCollection.avatar}}
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
    const { collectionType } = this.props;
  
    return (
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.textViewCate}>{collectionType.collectionName}</Text>
          <Text style={styles.textViewAll}>{Title.viewAll}</Text>
        </View>
        <FlatList
          style={{ marginTop: 5 }}
          horizontal
          renderItem={({ item, index }) => this._viewItemSong(item, index)}
          data={collectionType.items}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
export default CollectionComponent;