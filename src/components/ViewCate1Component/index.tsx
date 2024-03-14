import React from "react";
import { Component } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import styles from "./styles";
import { ColorsInApp } from "../../values/ColorsInApp";
import { Title } from "../../values/Title";
import { Song } from "../../types";
import AntDesignIcons from "react-native-vector-icons/AntDesign"

class ViewCate1Component extends Component<any, any>{
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
    viewItemSong = (item: Song, index: number) => {
        let marginStart=0
        if (index % 2 == 0) {
            marginStart = 15
        } 
        return (
            <View>
                <Image
                    style={[styles.imageItemSong, { marginStart }]}
                    source={{ uri: item.image }}
                />
            </View>
        );
    };
    render() {
        const { type } = this.props;
        const { listSong } = this.state;
        return (
            <View>
                <View>
                    <Text style={styles.textViewCate}>{type}</Text>
                    <FlatList
                        style={{ marginTop: 5 }}
                        numColumns={2}
                        renderItem={({ item, index }) => this.viewItemSong(item, index)}
                        data={listSong}
                        keyExtractor={item => item.id}
                    />

                </View>
            </View>

        )
    }
}
export default ViewCate1Component;