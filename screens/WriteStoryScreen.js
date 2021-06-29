import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Touchable, TouchableOpacity } from 'react-native';
import {CreateBottomTabNavigator} from 'react-navigation-tabs';
import {AppContainer} from 'react-navigation';
import db from '../config.js';
import firebase from 'firebase';


export default class WriteStoryScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            author:'',
            story:'',
            submitStory:''
        }
    }
    
    submitStory=()=>{
        db.collection('stories/').add({
            title:this.state.title,
            author:this.state.author,
            story:this.state.story,
        })
        

    }
    
    render(){
        return(
            <View style={{
                flex:1,
                fontSize: 20,
                justifyContent:'center',
                alignItems:'center'
              }}>
                  <KeyboardAvoidingView>
                <TextInput style={StyleSheet.formTextInput} placeholder={"Story Title"}  onChangeText={(text)=>{this.setState({title:text})}} value={this.state.title}/>
                <TextInput style={StyleSheet.formTextInput} placeholder={"Author"}  onChangeText={(text)=>{this.setState({author:text})}} value={this.state.author}/>
                <TextInput style={StyleSheet.formTextInput} placeholder={"Story"}  onChangeText={(text)=>{this.setState({story:text})}} value={this.state.story}/>
                </KeyboardAvoidingView>

                <View>
                <TouchableOpacity 
                style={StyleSheet.button}
                onPress={this.submitStory}>
                <Text>Submit</Text>
                </TouchableOpacity>
                </View>


            </View>



        )
    }
}

const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
      },
    }
  )
  