import { Component } from "react";
import { Text, View } from "react-native";
import { ColorsInApp } from "../../values/ColorsInApp";
import React from "react";
import styles from "./styles";
import TopBarComponent from "../../components/TopBarComponent";
import BodyComponent from "../../components/BodyComponent";


class HomeScreen extends Component<any,any>{
    render(){
        return(
            <View style={styles.container}>
                <TopBarComponent/>
                <BodyComponent/>
            </View>
        )
    }
}

export default HomeScreen;