import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { setImageList } from './actions/image'
import { connect } from 'react-redux'

import ListItem from './ListItem'
import Pagination from './Pagination'
import LoadingBar from './LoadingBar'

const ImageList = ({ images, fetchImageList, pages, navigation }) => {

	const [loading, setLoading] = useState(true)

	const loadImages = async page => {
		setLoading(true)
		await fetchImageList(page)
		setLoading(false)
	}

	useEffect(() => {
		const loadImagesInHook = async () => {
			await fetchImageList('https://api.unsplash.com/photos/?client_id=AmOUDUIFYlYXP_Ar-v368Wnk8yi3cy2jp1ZUqEOwDJc')
			setLoading(false)
		}

		loadImagesInHook()
	}, [fetchImageList])

	const listKeyExtractor = item => item.id

	const selectItem = imageUrl => navigation.navigate('SingleImage', { imageUrl })

	return loading ?
		(<LoadingBar />) :
		(
			<View style={styles.mainView}>
				<FlatList
					data={images}
					keyExtractor={listKeyExtractor}
					renderItem={({ item }) => <ListItem selectItem={selectItem} item={item} />}
				/>
				<Pagination pages={pages} fetchImageList={loadImages} />
			</View>
		)
}

const styles = StyleSheet.create({
	mainView: {
		flex: 1,
	},
})

const mapStateToProps = state => {
	return {
		images: state.imageReducer.imageList,
		pages: state.imageReducer.pagination,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchImageList: async link => {
			let response = await fetch(link)

			if (response.ok) {
				let data = {
					pages: {},
				}
				let linkString = response.headers.map.link.toString()

				let links = linkString.match(/<(.*?)>/gi).map(e => e.substring(1, e.length - 1))

				// getting rel="first", rel="next", etc.
				linkString.match(/\brel=(['"])(.*?)\1/gi)

					// getting first, next, etc.
					.map(e => e.substring(5, e.length - 1))

					// storing links according to names
					.forEach((name, index) => {
						data.pages[name] = links[index]
					})

				let imageList = await response.json()
				data.imageList = imageList

				dispatch(setImageList(data))

			} else {
				console.error('Responce error: ' + response.status)
			}
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageList)
