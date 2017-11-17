const INITIAL_STATE = {
	items: []
}

export default function(state=INITIAL_STATE, action) {
	switch(action.type) {
		// case "REQUEST_ITEMS":
		// 	return Object.assign({}, state, {

		// 	});
		case "RECEIVE_ITEMS":
			return Object.assign({}, state, {
				items: action.items
			});
		default:
			return state;
	}
}