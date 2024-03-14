import { StyleSheet } from "react-native";
import { ColorsInApp } from "../../values/ColorsInApp";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  textViewCate: {
    color: ColorsInApp.black,
    fontSize: 18,
    marginStart: 15,
    fontFamily: 'quicksand_600'
  },
  imageItemSong: {
    marginEnd: 15,
    marginBottom: 10,
    width: 180,
    height: 80,
    borderRadius: 10
  },
});