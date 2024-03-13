import { StyleSheet } from "react-native";
import { ColorsInApp } from "../../values/ColorsInApp";

export default StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        backgroundColor: ColorsInApp.lime1,
        height: 55,
    }, 
    logoImage: {
        marginStart: 15,
        height: 40,
        width: 40,
        borderRadius: 20
    },

  });