import React from "react";
import { Component } from "react";
import { Animated, Dimensions, FlatList, Image, ImageRequireSource, ScrollView, Text, View } from "react-native";
import BestGenreComponent from "../BestGenreComponent";
import NewOrRankingComponent from "../NewOrRankingCateComponent";
import { CategoryConstant } from "../../values/Category";
import CollectionComponent from "../CollectionComponent";
import BannerComponent from "../BannerComponent";
import { CallApi } from "../../apis";
import _, { Collection } from 'lodash';
import { CollectionType } from "../../types";


class BodyComponent extends Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            listBanner: [],
            listDataBestGenre: {},
            listNewMusicData: [],
            listRankingData: [],
            listDataCollection: [],

        }
    }


    componentDidMount() {
        this._loadData()
    }

    _loadData() {

        Promise.all([
            CallApi.getBannerInHome(0, 10),
            CallApi.getBestGenreInHome(),
            CallApi.getNewCateInHome(0, 10),
            CallApi.getRankingCateInHome(),
            CallApi.getCollectionListInHome(),

        ])
            .then((response: any) => {

                let newStateObj: any = {
                    listBanner: response[0],
                    listDataBestGenre: response[1],
                    listNewMusicData: response[2],
                    listRankingData: response[3],
                    listDataCollection: response[4],
                }

                this.setState(newStateObj)

            })
            .catch(_ => this.setState({
                loadDataError: true,
                loading: false,
                refreshing: false
            }))
    }
    render() {
        const { listBanner,
            listDataBestGenre,
            listNewMusicData,
            listRankingData,
            listDataCollection } = this.state;

        return (
            <ScrollView>
                <BannerComponent listBanner={listBanner} />
                <BestGenreComponent listDataBestGenre={listDataBestGenre} />
                <NewOrRankingComponent listData={listNewMusicData} type={CategoryConstant.hot} />
                <NewOrRankingComponent listData={listRankingData} type={CategoryConstant.rank} />
                <FlatList
                    renderItem={({ item: collectionType }) => <CollectionComponent collectionType={collectionType} />}
                    data={listDataCollection}
                />
            </ScrollView>

        );
    }



}
export default BodyComponent;