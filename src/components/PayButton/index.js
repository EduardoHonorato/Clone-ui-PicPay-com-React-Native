import React from 'react'
import { Text, TouchableWithoutFeedback } from 'react-native'
import { Button, Label} from'./styles'

import {MaterialIcons} from '@expo/vector-icons'


export default function PayButton({onPress, focused}){
    return(
        <TouchableWithoutFeedback onPress={onPress}>
        <Button
        colors={
            focused? ['#106138', '#04602f']
            :['#00fc6c', '#00ac4a']
        }
        start={[1, 0.2]}
        >
            <MaterialIcons 
            name="attach-money" 
            size={30} 
            color={focused? '#fff':'#f1f1f1'}
            />
            <Label focused={focused}>Pagar</Label>
        </Button>
        </TouchableWithoutFeedback>
    )
}