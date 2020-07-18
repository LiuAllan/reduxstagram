// We will have a reducer for every state
const postComments = (state = [], action) => {
	switch(action.type)
	{
		case 'ADD_COMMENT':
			return [...state, {
				user: action.author,
				text: action.comment
			}];
		case 'REMOVE_COMMENT':
			return [
				...state.slice(0, action.i),
				...state.slice(action.i + 1)
			]
		default:
			return state;
	}
}

const comments = (state = [], action) => {
	// console.log(state, action);
	if(typeof action.postId !== 'undefined')
	{
		return {
			// get current state
			...state,
			// overwrite post with new post
			[action.postId]: postComments(state[action.postId], action)
		}
	}
	return state;
}

export default  comments;