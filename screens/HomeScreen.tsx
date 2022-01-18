import * as React from 'react'
import { View,FlatList,Text,StyleSheet} from 'react-native'

import ChatRoomItem from '../components/ChatRoomItem'

import chatRoomData from '../assets/dummy-data/ChatRooms'

export default function TabOneScreen(){
  return (
    <View style={styles.page}>
      <FlatList 
      data={chatRoomData} 
      renderItem={({item})=> <ChatRoomItem chatRoom={item}/>} 
      showsVerticalScrollIndicator={true}
      ListHeaderComponent={()=><Text>Messages</Text>}
      />
    
    </View>
  )
}

const styles = StyleSheet.create({
  page:{
    flex:1,
    flexDirection:'column'
  }
})
