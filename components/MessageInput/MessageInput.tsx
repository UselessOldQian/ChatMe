import React, { useState } from 'react'
import {View, Text, StyleSheet, TextInput, Pressable, KeyboardAvoidingView,Platform} from 'react-native'
import { SimpleLineIcons,Feather,MaterialCommunityIcons,AntDesign,Ionicons } from '@expo/vector-icons'

export default function MessageInput() {
    const [message,setMessage] = useState('');
    const sendMessage = ()=>{
        console.warn("sending: ",message);
        setMessage('');
    }
    const onPlusClicked = ()=>{
        console.warn("on plus clicked");
    }
    const onPress = ()=>{
        if(message){
            sendMessage();
        }else{
            onPlusClicked();
        }
    }
    return (
        <KeyboardAvoidingView 
        style={styles.root} 
        behavior={Platform.OS === "ios" ? "padding":"height"}
        keyboardVerticalOffset={100}>
            <View style={styles.inputContainer}>
                <SimpleLineIcons name='emotsmile' size={24} color="#595959"/>
                <TextInput 
                style={styles.input}
                value={message}
                onChangeText={setMessage}
                placeholder='Signal message ...'/>
                <Feather name='camera' size={24} color="#595959" style={styles.icon}/>
                <MaterialCommunityIcons name = "microphone-outline" size={24} color="#595959"/>
            </View>
            <Pressable onPress={onPress} style={styles.buttonContainer}>
                {message ? <Ionicons name='send' size={24} color='white'/>: <AntDesign name='plus' size={24} color='white'/>}
            </Pressable>

        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    root:{
        flexDirection:'row',
        padding:10
    },
    inputContainer:{
        backgroundColor:'lightgrey',
        flex:1,
        marginRight:10,
        borderWidth:1,
        borderColor:'#dedede',
        justifyContent:'center',
        borderRadius:10,
        flexDirection:'row',
        padding:10,
    },
    input:{
        flex:1,
        marginHorizontal:8
    },
    buttonContainer:{
        width:50,
        height:50,
        backgroundColor:'#3777f0',
        borderRadius:25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color:'white',
        fontSize: 20
    },
    icon:{
        marginHorizontal:5
    }

})