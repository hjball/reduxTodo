export default state => ({
	...state,
	todos: [ ...state.todos, {
		title: state.input,
		time: new Date(),
	}],
	input: '',
})