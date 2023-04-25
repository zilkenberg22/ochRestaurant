import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons'; 
import TextUtga from './textUtga';
export default function TooComponent(props) {
    const [too, setToo] = useState(1)

    function solikhToo(turul) {
        let tooUtga = too
        if ("khasakh" === turul)
        {
            tooUtga -= 1
            if (tooUtga < 1)
                tooUtga = 1
            setToo(tooUtga)
        }
        else {
            tooUtga += 1
            setToo(tooUtga)
        }
        if (props.soligdsonTooAvya)
            props.soligdsonTooAvya(tooUtga)
    }
    return (
        <View style = {styles.root}>
            <TouchableOpacity style = {styles.btn1} 
                onPress = {()=> solikhToo('khasakh')}>
                <IconMaterial name="plus" size={18}/>
            </TouchableOpacity>
            <View style = {styles.too}>
                <TextUtga style = {{fontSize:16, fontWeight:'bold'}}>{too}</TextUtga>
            </View>
            <TouchableOpacity style = {styles.btn2} 
                onPress = {()=> solikhToo('nemekh')}>
                <IconMaterial name="plus" size={18}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        width: 115, 
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#cecece',
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center'
    },
    too:{
        width: 45,
        alignItems:'center',
        justifyContent:'center'
    },
    btn1:
    {
        flex:1,
        height: 25, 
        borderRightWidth:1,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'#cecece',
    },
    btn2:
    { 
        flex:1,
        height: 25, 
        borderLeftWidth:1,
        alignItems:'center',
        justifyContent:'center', 
        borderColor:'#cecece',
    }
  });