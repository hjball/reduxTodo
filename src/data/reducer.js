import updateInput from './reducers/updateInput';
import addTodo from './reducers/addTodo';

export default (state, action) => {
  switch (action.type) {
    case 'updateInput': return updateInput(state, action);
    case 'addTodo': return addTodo(state);
    default: return state;
  }
}

