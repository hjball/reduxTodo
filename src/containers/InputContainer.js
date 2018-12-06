import { connect } from 'react-redux';
import Input from '../components/Input';
import { updateInput, addTodo } from '../data/actions/state';

const mapStateToProps = ({ input }) => ({ input })

const mapDispatchToProps = dispatch => ({
  handleChange: input => dispatch(updateInput(input)),
  handleClick: () => dispatch(addTodo()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Input)
