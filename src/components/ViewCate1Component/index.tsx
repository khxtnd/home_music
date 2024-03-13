import React from "react";
import { Component } from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import { ColorsInApp } from "../../values/ColorsInApp";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";
import EvilIcons from "react-native-vector-icons/EvilIcons"

class ViewCate1Component extends Component<any, any>{
    render() {
        return (
            <Text
                style={{ color: ColorsInApp.black }}
            >top</Text>

        )
    }
}
export default ViewCate1Component;