import React from 'react';
import { Text, Image, View, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import styles from './styles';
import { Auth, DataStore,Predicates } from 'aws-amplify';
import { ChatRoom, User, ChatRoomUser } from '../../src/models';

export default function UserItem({ user }) {
  const navigation = useNavigation();

  const onPress = async (user) => {

    // TODO if there is already a chat room between these 2 users
    // then redirect to the existing chat room
    // otherwise, create a new chatroom with these users.

    const authUser = await Auth.currentAuthenticatedUser();
    const dbUser = await DataStore.query(User, authUser.attributes.sub);
    if (!dbUser) {
      Alert.alert("There was an error creating the group");
      return;
    }
    const newChatRoomData = {
      newMessages: 0,
      Admin: dbUser,
    };

    // await DataStore.delete(ChatRoom, Predicates.ALL);
    // await DataStore.delete(ChatRoomUser, Predicates.ALL);


    const chatrooms = await DataStore.query(ChatRoom);
    const chatroomsUser = await DataStore.query(ChatRoomUser);


    console.log("------------------");
    console.log(chatrooms);
    console.log(chatroomsUser);
    console.log("------------------");



    const chatroomDBUser = (await DataStore.query(ChatRoomUser)).
    filter(c => c.user.id === dbUser.id).map(c=>c.chatroom.id);
    const chatroomUser = (await DataStore.query(ChatRoomUser)).
    filter(c => c.user.id === user.id).map(c=>c.chatroom.id);

    let newChatRoom = null;
    let alreadyExsist = false;
    for (var i=0,len=chatroomDBUser.length; i<len; i++){
      if(chatroomUser.includes(chatroomDBUser[i])){
        console.log(chatroomDBUser[i]);
        newChatRoom = await DataStore.query(ChatRoom, c => c.id("eq",chatroomDBUser[i]));
        newChatRoom = newChatRoom[0];
        alreadyExsist = true;
        break;
      }
    }

    console.log(chatroomDBUser);
    console.log(chatroomUser);

    console.log(newChatRoom);
    console.log(alreadyExsist);


    if(!alreadyExsist){
      // Create a chat room
      newChatRoom = await DataStore.save(new ChatRoom({newMessages: 0}));
      await DataStore.save(new ChatRoomUser({
        user: dbUser,
        chatroom: newChatRoom
      }))

      // connect clicked user with the chat room
      await DataStore.save(new ChatRoomUser({
        user,
        chatroom: newChatRoom
      }));
    }
    navigation.navigate('ChatRoom', { id: newChatRoom.id });
  }

  return (
    <Pressable onPress={() => onPress(user)} style={styles.container}>
      <Image source={{ uri: user.imageUri}} style={styles.image} />

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
        </View>
      </View>
    </Pressable>
  );
}
