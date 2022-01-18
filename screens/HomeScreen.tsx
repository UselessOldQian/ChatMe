import * as React from 'react'
import { View,FlatList,Text,StyleSheet,Pressable} from 'react-native'
import {Auth} from 'aws-amplify';

import ChatRoomItem from '../components/ChatRoomItem'

import chatRoomData from '../assets/dummy-data/ChatRooms'

export default function TabOneScreen(){
  const logOut = ()=>{
    Auth.signOut();
  }

  return (
    <View style={styles.page}>
      <FlatList 
      data={chatRoomData} 
      renderItem={({item})=> <ChatRoomItem chatRoom={item}/>} 
      showsVerticalScrollIndicator={true}
      ListHeaderComponent={()=><Text>Messages</Text>}
      />
      <Pressable onPress={logOut} style={{backgroundColor:'red',height:50,margin:10,
      borderRadius:50,alignItems:'center',justifyContent:'center'}}>
        <Text style={{color:'white'}}>Logout</Text>
      </Pressable>
    
    </View>
  )
}

const styles = StyleSheet.create({
  page:{
    flex:1,
    flexDirection:'column'
  }
})
