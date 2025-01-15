import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    carContainer :{
        width:'100%',
        height:Dimensions.get('window').height,
      },
      titles : {
        marginTop:'30%',
        width : '100%',
        alignItems:"center",
      },
      title : {
        fontSize:40,
        fontWeight:"500"
      },
      subTitle : {
        fontSize:16,
        color:"gray",
      },
      image :{
        height:'100%',
        width : '100%',
        resizeMode:'cover',
        position:'absolute'
      },
      buttonContainer :{
        position:"absolute",
        bottom:50,
        width:'100%',
      },
      subTitleCTA:{
        textDecorationLine:'underline',
      }
});

export default styles;