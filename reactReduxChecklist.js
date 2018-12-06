// REACT-REDUX CHECKLIST

// 1.) yarn add react redux react-redux

// 2.) Import create store from redux in index.js
		import { createStore } from 'redux';

// 3.) Create store and import reducer (index.js)
		import { createStore } from 'redux';
		const store = createStore(
			reducer, 
			initial, 
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		)
		

// 4.) Import provider (index.js)
		import { Provider } from 'react-redux';
		React.DOM.render(
			<Provider store={ store }>
				<App />
			</Provider>,
			document.getElementById('root')
		);

// 4.) Create and import ./data/reducer.js
	export default (state, action) => {
		switch (action.type) {
			default: return state;
		}
	}

// 5.) Create and import ./data/initial.js
		export default {
			key: []
		}

// 6.) Set up App.js as a functional stateless component
		const App = () => (
			<Component />
		);

		export default App;

// 7.) Create ./src/containers and ./src/components

// 8.) Create component (Component.jsx)
		export default () => (
			<Component />
		)

// 9.) Create container component (ComponentContainer.js)
		import { connect } from 'react-redux';
		import Component from './component/Component';

		const mapStateToProps = ({ state }) => ({
			key: state.object
		})

		export default connect(mapStateToProps)(Component);

// 10.) After creating container component, change import in App.js to use container
		import Component from './containers/Input';

// 11.) Add event handler to a component (Component.jsx)
		export default ({ input, handleChange }) => (
			<Component onChange={ e => handleChange(e.currentTarget.value) }/>
		)

// 12.) Add mapDispatchToProps to the component (ComponentContainer.js)
		import updateComponent from '../data/actions/state' 
		
		const mapStateToProps = ({ state }) => ({
			key: state.object
		})

		const mapDispatchToProps = dispatch => ({
			handleChange: input => dispatch(updateComponent(input))
		})

		export default connect(mapStateToProps, mapDispatchToProps)(Component)

// 13.) Update reducer to include case (reducer.js)
		export default (state, action) => {
			switch (action.type) {
			case 'updateComponent' : return updateComponent(state, action);
			default: return state;
		}
	}

// 14.) Create ./data/actions/state.js
		export const updateComponent = (data) => ({
			type: 'updateComponent',
			data: data,
		})

// 15.) Create ./data/reducers/UpdateComponent.js 
	export default (state, action) => ({
		...state,
		key: action.data
	})

// 16.) Create ./data/reducers and import reducer function in reducer.js (reducer.js)
		import UpdateComponent from './reducers/updateComponent'












