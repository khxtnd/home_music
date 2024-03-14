import React from "react";
import { Component } from "react";
import { FlatList, Image, Text, View } from "react-native";
import styles from "./styles";
import { Song } from "../../types";
import PagerView from "react-native-pager-view";

class TopCateComponent extends Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            listSong: [
                { id: 0, image: 'https://bizweb.dktcdn.net/100/438/408/files/hinh-anh-meo-hai-huoc-yodyvn-c7257e34-ea9a-47c0-b357-666753f0ce90.jpg?v=1694069288618' },
                { id: 5, image: 'https://bizweb.dktcdn.net/100/438/408/files/hinh-anh-meo-hai-huoc-yodyvn2.jpg?v=1694069335855' },
                { id: 6, image: 'https://bizweb.dktcdn.net/100/438/408/files/hinh-anh-meo-hai-huoc-yodyvn2.jpg?v=1694069335855' },
                { id: 7, image: 'https://bizweb.dktcdn.net/100/438/408/files/hinh-anh-meo-hai-huoc-yodyvn2.jpg?v=1694069335855' },
                { id: 8, image: 'https://bizweb.dktcdn.net/100/438/408/files/hinh-anh-meo-hai-huoc-yodyvn2.jpg?v=1694069335855' },
            ],
            activePageIndex: 0,
        };
    }

    _renderPage = ({ item }: { item: Song }) => {
        return (
            <View
                style={{ justifyContent: 'center', alignItems: 'center' }}
            >
                <Image
                    source={{ uri: item.image }}
                    style={{ width: '90%', height: '90%', borderRadius: 15 }}
                />
            </View>
        );
    };

    handlePageChange = (event: any) => {
        const { position } = event.nativeEvent;
        this.setState({ activePageIndex: position });
    };

    render() {
        const { listSong, activePageIndex } = this.state;
        return (
            <View style={styles.container}>
                <PagerView style={{ height: 200 }} onPageSelected={this.handlePageChange}>
                    {listSong.map((item: Song, index: number) => (
                        <View key={index} style={{ flex: 1 }}>
                            {this._renderPage({ item })}
                        </View>
                    ))}
                </PagerView>

                <View style={styles.dotContainer}>
                    {listSong.map((item: Song, index: number) => (
                        <View key={index} style={[styles.dot, activePageIndex === index && styles.activeDot]} />
                    ))}
                </View>
            </View>

        )
    }
}
export default TopCateComponent;