import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const Pagination = ({ pages, fetchImageList }) => {

	return (
		<View style={styles.pages}>
			{
				pages && Object.keys(pages).filter(e => pages[e].length > 0).map(e => (
					<TouchableOpacity
						key={e}
						style={{ ...styles.pageButton, ...styles[e] }}
						onPress={() => fetchImageList(pages[e])}
					>
						<Text style={styles.pageButtonText}>{e[0].toUpperCase() + e.slice(1)}</Text>
					</TouchableOpacity>
				))
			}
		</View>
	)
}

const styles = StyleSheet.create({
	pages: {
		flexDirection: 'row',
		backgroundColor: '#e6e6e6',
	},
	pageButton: {
		backgroundColor: '#333',
		margin: 10,
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
	},
	pageButtonText: {
		fontSize: 16,
		color: '#fff',
	},
	next: {
		marginLeft: 'auto',
	},
	prev: {
		marginRight: 'auto',
	},
})

export default Pagination
