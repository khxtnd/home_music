import React from "react";
import { Component } from "react";
import { FlatList, Image, Text, View } from "react-native";
import styles from "./styles";
import { Banner } from "../../types";
import PagerView from "react-native-pager-view";


class BannerComponent extends Component<any, any>{
    constructor(props: { listBanner: Banner[] }) {
        super(props);
        this.state = {
            activePageIndex: 0,
        };
    }

    _renderPage = ({ item }: { item: Banner }) => {
        return (
            <View
                style={{ justifyContent: 'center', alignItems: 'center' }}
            >
                <Image
                    source={{ uri: item.file }}
                    style={{ width: '90%', height: '90%', borderRadius: 15 }}
                />
            </View>
        );
    };

    _handlePageChange = (event: any) => {
        const { position } = event.nativeEvent;
        this.setState({ activePageIndex: position });
    };

    render() {
        const { listBanner } = this.props;
        const { activePageIndex } = this.state;
        console.log("khxtnd", listBanner.size)
        return (
            <View style={styles.container}>
                <PagerView style={{ height: 200 }} onPageSelected={this._handlePageChange}>
                    {listBanner.map((item: Banner, index: number) => (
                        <View key={index} style={{ flex: 1 }}>
                            {this._renderPage({ item })}
                        </View>
                    ))}
                </PagerView>

                <View style={styles.dotContainer}>
                    {listBanner.map((item: Banner, index: number) => (
                        <View key={index} style={[styles.dot, activePageIndex === index && styles.activeDot]} />
                    ))}
                </View>
            </View>

        )
    }
}
export default BannerComponent;