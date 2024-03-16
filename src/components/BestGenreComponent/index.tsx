import React from "react";
import { Component } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import styles from "./styles";
import { ColorsInApp } from "../../values/ColorsInApp";
import { Title } from "../../values/Title";
import { CollectionType, ItemInCollection } from "../../types";
import AntDesignIcons from "react-native-vector-icons/AntDesign"
import { Collection } from "lodash";

class BestGenreComponent extends Component<any, any>{
    constructor(props: { listDataBestGenre: CollectionType }) {
        super(props);
    }

    _viewItemSong = (itemInCollection: ItemInCollection, index: number) => {
        let marginStart = 0
        if (index % 2 == 0) {
            marginStart = 15
        }
        return (
            <View
                style={{ justifyContent: 'center', alignItems: 'center', marginEnd: 15, marginTop: 6, marginBottom: 8 }}
            >
                <Image
                    style={[styles.imageItemSong, { marginStart }]}
                    source={{ uri: itemInCollection.avatar }}
                />
                <Text
                    style={{ position: 'absolute', color: ColorsInApp.while, fontFamily: 'quicksand_500', fontSize: 23, flex: 1 }}
                >
                    {itemInCollection.itemName}
                </Text>
            </View>
        );
    };
    render() {
        const { listDataBestGenre } = this.props;

        return (
            <View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.textViewCate}>{listDataBestGenre.collectionName}</Text>
    
                        <Text style={styles.textViewAll}>{Title.viewAll}</Text>
                    </View>
                    <FlatList
                        style={{ marginTop: 5 }}
                        numColumns={2}
                        renderItem={({ item, index }) => this._viewItemSong(item, index)}
                        data={listDataBestGenre.items}
                        keyExtractor={item => item.id}
                    />

                </View>
            </View>

        )
    }
}
export default BestGenreComponent;