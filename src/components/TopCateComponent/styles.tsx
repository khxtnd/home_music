import { StyleSheet } from "react-native";
import { ColorsInApp } from "../../values/ColorsInApp";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  dot: {
    width: 15,
    height: 2,
    borderRadius: 4,
    backgroundColor: ColorsInApp.gray6,
    marginHorizontal: 5,
},
dotContainer: {
    width: 150,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 45,
    alignSelf:'center'
},
activeDot: {
    width: 20,
    height: 4,
    backgroundColor: ColorsInApp.while,
},
});