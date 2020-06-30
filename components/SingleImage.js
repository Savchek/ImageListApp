import React, { useState } from 'react'
import { StyleSheet, Image, View } from 'react-native'
import LoadingBar from './LoadingBar'

const SingleImage = ({ route }) => {

	const [loading, setLoading] = useState(true)
	const { imageUrl } = route.params

	const endLoading = () => setLoading(false)

	return (
		<View style={styles.imageView}>
			{loading && <LoadingBar style={styles.loader} />}
			<Image
				style={!loading ? styles.image : {}}
				source={{ uri: imageUrl }}
				onLoadEnd={endLoading}
				resizeMode="contain"
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: '100%',
	},
	imageView: {
		flex: 1,
	},
})

export default SingleImage
