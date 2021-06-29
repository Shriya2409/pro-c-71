import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {CreateBottomTabNavigator} from 'react-navigation-tabs';
import {AppContainer} from 'react-navigation';

export default class ReadStoryScreen extends Component{
    render(){
        return(
            <View>
                
               
                <Text styles={{alignItems:'center'}}>Read story screen</Text>
                
            </View>

        )
    }
}