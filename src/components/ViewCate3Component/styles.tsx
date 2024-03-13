import { StyleSheet } from "react-native";
import { ColorsInApp } from "../../values/ColorsInApp";

export default StyleSheet.create({
  textViewCate: {
    color: ColorsInApp.black,
    fontSize: 18,
    marginStart: 15,
    fontFamily: 'quicksand_600'
  },
  textViewAll: {
    color: ColorsInApp.black,
    fontSize: 14,
    marginEnd: 15,
    fontFamily: 'quicksand_500'
  },
  imageItemSong: {
    marginEnd:10,
    marginBottom: 10,
    width: 120,
    height: 120,
    borderRadius: 10
  },

});