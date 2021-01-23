import React from 'react';
import { Text, View, Pressable  } from 'react-native';
import styles from './styles'


const styledButton = (props) => {

const { type, content, onPress } = props


const backgroundColor = type === 'primary' ? '#171a20cc' : '#ffffffA6';
const textColor = type === 'primary' ? 'white' : '#171a20';


	return (

	   <View style={styles.container}>
    
    <Pressable style={[styles.button, {backgroundColor: backgroundColor}]} onPress={() =>{
    	onPress()
    }}>

<Text style={[styles.text, {color:textColor}]}> {content} </Text>

     </Pressable>
   
        
      </View>
	);
};

export default styledButton;