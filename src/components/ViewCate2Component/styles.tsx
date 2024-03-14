import { StyleSheet } from "react-native";
import { ColorsInApp } from "../../values/ColorsInApp";

export default StyleSheet.create({
  textViewCate: {
    color: ColorsInApp.black,
    fontSize: 20,
    marginStart: 15,
    fontFamily: 'quicksand_600'
  },
  imageItemSong: {
    marginEnd: 10,
    marginBottom: 10,
    width: 120,
    height: 120,
    borderRadius: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  tabItem:{
    marginStart: 15,
    marginEnd: 15,
  },
  tabBarItemText: {
    color: ColorsInApp.gray7,
    fontFamily: 'quicksand_500',
    fontSize: 18
  },
  activeTabText:{
    fontFamily: 'quicksand_500',
    color: ColorsInApp.oragnge6,
    fontSize: 18

  }
});