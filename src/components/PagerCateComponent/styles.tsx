import { Dimensions, StyleSheet } from "react-native";
import { ColorsInApp } from "../../values/ColorsInApp";

export default StyleSheet.create({
  container: {
    height: 300,
    width: Dimensions.get('window').width
  },
  imageItemSong: {
    marginEnd:10,
    width: 50,
    height: 50,
    borderRadius: 5
  },

});