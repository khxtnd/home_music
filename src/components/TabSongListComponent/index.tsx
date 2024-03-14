import React from "react";
import { Component } from "react";
import { FlatList, Image, Text, View } from "react-native";
import styles from "./styles";
import { Song } from "../../types";
import { ColorsInApp } from "../../values/ColorsInApp";

class TabSongListComponent extends Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            listSong: [
                { id: 0, image: 'https://bizweb.dktcdn.net/100/438/408/files/hinh-anh-meo-hai-huoc-yodyvn-c7257e34-ea9a-47c0-b357-666753f0ce90.jpg?v=1694069288618', title: 'adsdasd' },
                { id: 5, image: 'https://bizweb.dktcdn.net/100/438/408/files/hinh-anh-meo-hai-huoc-yodyvn2.jpg?v=1694069335855', title: 'adsdasd' },
                { id: 6, image: 'https://bizweb.dktcdn.net/100/438/408/files/hinh-anh-meo-hai-huoc-yodyvn2.jpg?v=1694069335855', title: 'adsdasd' },
                { id: 7, image: 'https://bizweb.dktcdn.net/100/438/408/files/hinh-anh-meo-hai-huoc-yodyvn2.jpg?v=1694069335855', title: 'adsdasd' },
                { id: 8, image: 'https://bizweb.dktcdn.net/100/438/408/files/hinh-anh-meo-hai-huoc-yodyvn2.jpg?v=1694069335855', title: 'adsdasd' },
            ],
        };
    }
    _viewItemSong = (item: Song) => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <Image
                    style={[styles.imageItemSong, { marginStart: 15 }]}
                    source={{ uri: item.image }}
                />
                <Text
                    style={{ color: ColorsInApp.black, fontFamily: 'quicksand_600', fontSize: 20 }}
                >{item.title}</Text>
            </View>
        );
    };

    render() {
        const { listSong: list } = this.state;
        return (
            <View style={styles.container}>
                <FlatList
                    style={{ marginTop: 5 }}
                    renderItem={({ item }) => this._viewItemSong(item)}
                    data={list}
                    keyExtractor={item => item.id}
                />
            </View>

        )
    }
}
export default TabSongListComponent;