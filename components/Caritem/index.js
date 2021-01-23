import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './styles'
import StyledButton from '../StyledButton'

const carItem = (props) => {

	const { name, tagLine, image, tagLineCTA} = props

	return (

	   <View style={styles.carContainer}>
       	<ImageBackground source={image}  style={styles.image}/> 

        	<View style={styles.title}>
          		<Text style={styles.header}>{name}</Text>
          		<Text style={styles.subtitle}>

          		{tagLine}
          		{ ' '}
				<Text style={styles.subtitleCTA}> {tagLineCTA} </Text>
          		</Text>

        	</View>
<View style={styles.buttonContainer}> 
<StyledButton type='primary' content={"custom order"} onPress={()=>{
        		console.warn("order as pressed")
        	}}/>


        	<StyledButton type='secondary' content={"Existing inventory"} onPress={()=>{
        		console.warn("inventory was pressed")
        	}}/>
</View>
        	
      </View>
	);
};

export default carItem;