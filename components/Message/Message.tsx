import React from 'react';
import { Text, View,StyleSheet } from 'react-native'

export default function Message({message}) {
    const myId = 'u1';
    const {user,content} = message;
    const isMe = myId===user.id;
    const blue = '#3777f0';
    const grey = 'lightgrey';

    return (
        <View style={[
            styles.container, {
                backgroundColor:isMe ? grey : blue,
                marginLeft:isMe ? 'auto':10,
                marginRight:isMe ? 10:'auto'
            }
            ]}>
            <Text style={[styles.text, {color:isMe ? 'black' : 'white'}]}>
                {content}
            </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#3777f0',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        maxWidth: '75%'
    },
    text: {
        color: 'white'
    }
})

