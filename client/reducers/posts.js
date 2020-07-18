// We will have a reducer for every state

// a reducer takes in 2 things:

// 1. the action or the info of what happend

// 2. copy of the current state

const posts = (state = [], action) => {
	// console.log(state, action);
	switch(action.type) {
		case 'INCREMENT_LIKES' :
			const index = action.index;
			return [
				...state.slice(0, index),
				{...state[index], likes: state[index].likes + 1 },
				...state.slice(index + 1),
			]
		default:
			return state;
	}
}

export default posts;