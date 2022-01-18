import React from 'react';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    rightContainer: {
      flex:1,
      justifyContent: 'center',
      borderBottomWidth: 0.4,
      borderBottomColor: 'gray'
    },
    container: {
      flexDirection: 'row',
      padding: 10,
    },
    image: {
      height: 50,
      width: 50,
      borderRadius: 30,
      marginRight: 10
    },
    row:{
      flexDirection:'row',
      justifyContent: 'space-between',
    },
    time: {
      color: 'gray',
    },
    texts: {
      color: 'gray',
      marginBottom:5
    },
    name: {
      fontWeight: 'bold',
      fontSize:18,
      marginBottom:5
    },
    badgeText:{
      color:'white',
      fontSize:12
    },
    badgeContainer:{
      backgroundColor: '#3872E9',
      width: 20,
      height: 20,
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
      position: 'absolute',
      left:50,
      top:10,
      borderWidth:1,
      borderColor:'white'
    }
  })

  export default styles;