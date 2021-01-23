import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './styles'

const carItem = (props) => {

	return (

	   <View style={styles.carContainer}>
       	<ImageBackground source={require('../../assets/images/ModelX.jpeg')}  style={styles.image}/> 

        	<View style={styles.title}>
          		<Text style={styles.header}>Model S</Text>
          		<Text style={styles.subtitle}>starting at $69</Text>
        	</View>
      </View>
	);
};

export default carItem;