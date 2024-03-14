import { Dimensions, StyleSheet } from "react-native";
import { ColorsInApp } from "../../values/ColorsInApp";

const widthScreen=  Dimensions.get('window').width
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  textViewCate: {
    color: ColorsInApp.black,
    fontSize: 20,
    marginStart: 15,
    fontFamily: 'quicksand_600'
  },
  imageItemSong: {
    marginEnd: 15,
    marginBottom: 10,
    width: (widthScreen-45)/2,
    height: 80,
    borderRadius: 10
  },
});