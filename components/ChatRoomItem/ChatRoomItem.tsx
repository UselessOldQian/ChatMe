import React from 'react';
import { Text,StyleSheet,View,Image,Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import styles from './style';
import Navigation from '../../navigation';

export default function ChatRoomItem({ chatRoom } ) {
  const {users, lastMessage, newMessage} = chatRoom;
  const navigation = useNavigation();
  const sender = users[1];
  const onPress = ()=>{
    navigation.navigate('ChatRoom',{id:chatRoom.id})

  }
  return (
  <Pressable onPress={onPress} style={styles.container}>
      <Image source={{uri: sender.imageUri}} style={styles.image}/>
      {newMessage &&
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{newMessage}</Text>
        </View> }
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{sender.name}</Text>
          <Text style={styles.time}>{lastMessage.createdAt}</Text>
        </View>

        <Text numberOfLines={1} style={styles.texts}>{lastMessage.content}</Text>
      </View>
    </Pressable>
  )
}

