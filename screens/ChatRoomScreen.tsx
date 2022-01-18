import React from 'react'
import { Text, View,StyleSheet, FlatList,SafeAreaView } from 'react-native'
import { useRoute,useNavigation } from '@react-navigation/core'

import Message from '../components/Message'
import MessageInput from '../components/MessageInput/MessageInput'

import chatData from '../assets/dummy-data/Chats'


export default function ChatRoomScreen() {
    const route = useRoute();
    const navigation = useNavigation();
    navigation.setOptions({title:"hello"});
    console.log("display: ",route.params?.id);
    return (
        <SafeAreaView style={styles.page}>
            <FlatList 
            data={chatData.messages} 
            renderItem={({item})=> <Message message={item}/>} 
            showsVerticalScrollIndicator={true}
            />
            <MessageInput/>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    page:{
        flexDirection: 'column',
        flex:1
    }
})
