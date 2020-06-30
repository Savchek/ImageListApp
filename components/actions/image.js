import { SET_IMAGE_LIST } from './types'

export const setImageList = data => {
	return ({
		type: SET_IMAGE_LIST,
		data,
	})
}
