import { SET_IMAGE_LIST } from '../actions/types'

const initialState = {
	imageList: [],
	pagination: {
		first: '',
		prev: '',
		next: '',
		last: '',
	},
}

const imageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_IMAGE_LIST:
			return {
				...state,
				imageList: action.data.imageList,
				pagination: {
					first: action.data.pages.first || '',
					prev: action.data.pages.prev || '',
					next: action.data.pages.next || '',
					last: action.data.pages.last || '',
				},
			}
		default:
			return state
	}
}

export default imageReducer
