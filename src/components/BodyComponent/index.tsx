import React from "react";
import { Component } from "react";
import { Animated, Dimensions, FlatList, Image, ImageRequireSource, Text, View } from "react-native";
import ViewCate1Component from "../ViewCate1Component";
import ViewCate2Component from "../ViewCate2Component";
import { Category } from "../../values/Category";
import ViewCate3Component from "../ViewCate3Component";
import TopCateComponent from "../TopCateComponent";


class BodyComponent extends Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    _listType = [
        Category.top,
        Category.moodAndActivity,
        Category.hot,
        Category.rank,
        Category.top100,
        Category.whatIsOnToday,
        Category.maybeYouWantToHear,
        Category.relaxingMusic,
        Category.featuredArtistAlbum,
        Category.uSUK,
        Category.excitingWithADM]


    _viewItemWithType = (type: string) => {

        if (type == Category.top) {
            return (
                <TopCateComponent />
            )
        } else if (type == Category.moodAndActivity) {
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

    render() {
        return (
            <FlatList
                renderItem={({ item }) => this._viewItemWithType(item)}
                data={this._listType}
            />

        );
    }


}
export default BodyComponent;