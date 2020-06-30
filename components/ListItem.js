import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

const ListItem = ({ item, selectItem }) => {

	const onPressHandler = () => selectItem(item.urls.full)

	return (
		<TouchableOpacity style={styles.listItem} onPress={onPressHandler}>
			<Image
				style={styles.imgThumb}
				source={{ uri: item.urls.thumb }}
				resizeMode="contain"
			/>
			<View style={styles.textBox}>
				<Text style={styles.textDesc}>{item.description || item.alt_description}</Text>
				<Text style={styles.textName}>{item.user.name}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	listItem: {
		borderBottomWidth: 1,
		borderBottomColor: 'grey',
		paddingVertical: 10,
		flexDirection: 'row',
		alignItems: 'center',
	},
	textBox: {
		maxWidth: '65%',
	},
	textDesc: {
		fontSize: 18,
		color: 'black',
		marginBottom: 5,
	},
	textName: {
		fontSize: 16,
		color: 'grey',
	},
	imgThumb: {
		width: 100,
		height: 100,
		marginHorizontal: 10,
	},
})

export default ListItem
