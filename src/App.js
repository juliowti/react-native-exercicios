import React, { Component } from 'react' // preciso pois vou usar jsx
import { View , StyleSheet } from 'react-native'

import Aleatorio from './components/Aleatorio'
//import MinMax from './components/MinMax'
/* import CompPadrao, { Comp1,Comp2 } from './components/Multi'
import Primeiro from './components/Primeiro' */


 export default () => (
    <View style={style.App}>
        <Aleatorio min = {1} max ={60} /> 
        <Aleatorio min = {1} max ={60} /> 
        <Aleatorio min = {1} max ={60} /> 
        <Aleatorio min = {1} max ={60} /> 
        <Aleatorio min = {1} max ={60} /> 
        <Aleatorio min = {1} max ={60} /> 
        {/* <MinMax min={3} max={20} />
        <MinMax min={1} max={90} /> */}
        {/* <CompPadrao />
       <Comp1 />
       <Comp2 />
        <Primeiro /> */}
    </View>
 )


 const style = StyleSheet.create({
     App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
     }
 })