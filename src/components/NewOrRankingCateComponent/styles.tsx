import { StyleSheet } from "react-native";
import { ColorsInApp } from "../../values/ColorsInApp";

export default StyleSheet.create({
  textViewCate: {
    color: ColorsInApp.black,
    fontSize: 20,
    marginStart: 15,
    fontFamily: 'quicksand_600',
    marginBottom: 6
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  tabItem:{
    marginEnd: 10,
    height: 30
  },
  tabBarItemText: {
    color: ColorsInApp.gray7,
    fontFamily: 'quicksand_500',
    fontSize: 16
  },
  activeTabText:{
    fontFamily: 'quicksand_500',
    color: ColorsInApp.oragnge6,
    fontSize: 16

  }
});