import React from "react";
import { Component } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import styles from "./styles";
import { Category, Song } from "../../types";
import { ColorsInApp } from "../../values/ColorsInApp";

class PagerCateComponent extends Component<any, any>{
    constructor(props: { category: Category }) {
        super(props);
    }
    _viewItemSong = (song: Song) => {
        return (
            <View style={{ flexDirection: 'row', height: 60, alignItems: 'center' }}>
                <Image
                    style={[styles.imageItemSong, { marginStart: 15 }]}
                    source={{ uri: song.avatar }}
                />
                <View>
                    <Text
                        style={{ color: ColorsInApp.black, fontFamily: 'quicksand_600', fontSize: 15 }}>
                        {song.songName}</Text>
                    <Text
                        style={{ color: ColorsInApp.black, fontFamily: 'quicksand_400', fontSize: 12 }}>
                        {song.artists[0].aliasName}</Text>
                </View>

            </View>
        );
    };

    render() {
        const { category } = this.props;
        return (
            <ScrollView
                scrollEnabled={false}
                horizontal>
                <View
                    style={styles.container}>
                    <FlatList
                        style={{ marginTop: 5 }}
                        renderItem={({ item: song }) => this._viewItemSong(song)}
                        data={category.items}
                        keyExtractor={item => item.id}
                    />
                </View>

            </ScrollView>

        )
    }
}
export default PagerCateComponent;