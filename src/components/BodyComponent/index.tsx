import React from "react";
import { Component } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { Title } from "../../values/Title";
import ViewCate1Component from "../ViewCate1Component";
import ViewCate2Component from "../ViewCate2Component";
import { Category } from "../../values/Category";
import ViewCate3Component from "../ViewCate3Component";
import PagerView from "react-native-pager-view";
import { ColorsInApp } from "../../values/ColorsInApp";


class BodyComponent extends Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            pagerViews: [
                { id: 0, image: 'https://bizweb.dktcdn.net/100/438/408/files/hinh-anh-meo-hai-huoc-yodyvn-c7257e34-ea9a-47c0-b357-666753f0ce90.jpg?v=1694069288618' },
                { id: 5, image: 'https://bizweb.dktcdn.net/100/438/408/files/hinh-anh-meo-hai-huoc-yodyvn2.jpg?v=1694069335855' },
                { id: 6, image: 'https://bizweb.dktcdn.net/100/438/408/files/hinh-anh-meo-hai-huoc-yodyvn2.jpg?v=1694069335855' },
                { id: 7, image: 'https://bizweb.dktcdn.net/100/438/408/files/hinh-anh-meo-hai-huoc-yodyvn2.jpg?v=1694069335855' },
                { id: 8, image: 'https://bizweb.dktcdn.net/100/438/408/files/hinh-anh-meo-hai-huoc-yodyvn2.jpg?v=1694069335855' },
            ],
        };
    }

    listType = [Category.moodAndActivity,
    Category.hot,
    Category.rank,
    Category.top100,
    Category.whatIsOnToday,
    Category.maybeYouWantToHear,
    Category.relaxingMusic,
    Category.featuredArtistAlbum,
    Category.uSUK,
    Category.excitingWithADM]


    viewItemWithType = (type: string) => {

        if (type == Category.moodAndActivity) {
            return (
                <ViewCate1Component type={type} />
            )
        }
        else if (type == Category.hot || type == Category.rank) {
            return (
                <ViewCate2Component type={type} />
            )
        }
        else {
            return (
                <ViewCate3Component type={type} />
            )
        }
    }

    renderPage = ({ item }: { item: any }) => {
        return (
            <View>
                <Image source={{ uri: item.image }}
                    style={{ width: 100, height: 100 }}
                // style={{ width: '100', height: '100' }} 
                />
            </View>
        );
    };
    render() {
        return (
            <View >
                {this.state.pagerViews.map((pagerView) => (
                    <PagerView
                        key={pagerView.id.toString()} style={{ flex: 1, backgroundColor: ColorsInApp.blue5, height: 80 }}>
                        <View key={pagerView.id.toString()}>
                            <Image source={{ uri: pagerView.image }} style={{ width: '100%', height: '100%' }} />
                        </View>
                    </PagerView>
                ))}

                <FlatList
                    renderItem={({ item }) => this.viewItemWithType(item)}
                    data={this.listType}
                />
            </View>

        )
    }
}
export default BodyComponent;