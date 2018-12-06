import updateInput from './reducers/updateInput';

export default (state, action) => {
  switch (action.type) {
    case 'updateInput': return updateInput(state, action);
    default: return state;
  }
}

