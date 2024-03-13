import React from "react";
import { Component } from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import { ColorsInApp } from "../../values/ColorsInApp";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";
import EvilIcons from "react-native-vector-icons/EvilIcons"

class TopBarComponent extends Component<any, any>{
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logoImage}
                    source={require('../../assets/images/logo.jpg')}
                />

                <View style={{ flexDirection: 'row' }}>
                    <EvilIcons name="search" size={30} color={ColorsInApp.black} style={{ marginEnd: 15 }} />
                    <EvilIcons name="bell" size={30} color={ColorsInApp.black} style={{ marginEnd: 15 }} />
                    <EvilIcons name="user" size={30} color={ColorsInApp.black} style={{ marginEnd: 15 }} />
                </View>

            </View>
        )
    }
}
export default TopBarComponent