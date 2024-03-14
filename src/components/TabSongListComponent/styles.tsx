import { Dimensions, StyleSheet } from "react-native";
import { ColorsInApp } from "../../values/ColorsInApp";

export default StyleSheet.create({
  container: {
    width: Dimensions.get('window').width
  },
  imageItemSong: {
    marginEnd:10,
    marginBottom: 10,
    width: 40,
    height: 40,
    borderRadius: 20
  },

});