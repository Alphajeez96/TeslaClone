import React from 'react';
import { Text, View, Pressable, FlatList, Dimensions  } from 'react-native';
import styles from './styles'
import CarItem from '../Caritem'

import cars from './cars'




const carsList = (props) => {

	return(
<View style={styles.container}>
<FlatList 
data={cars}
showsVerticalScrollIndicator={false}
renderItem={({item}) => <CarItem car={item} />}
snapToAlignment={'start'}
decelerationRate={'fast'}
snapToInterval= {Dimensions.get('window').height}
/>  


 </View>

		);
};

export default carsList;

