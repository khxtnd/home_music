import { StyleSheet } from "react-native";
import { ColorsInApp } from "../../values/ColorsInApp";

export default StyleSheet.create({
  textViewCate: {
    color: ColorsInApp.black,
    fontSize: 18,
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
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#eee',
    paddingVertical: 10,
  },
  tabBarItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  tabBarItemText: {
    fontSize: 16,
  },
  activeTab: {
    backgroundColor: 'lightblue', // Change active tab color
  },
});