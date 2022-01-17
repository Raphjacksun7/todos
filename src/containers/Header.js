import { connect } from 'react-redux'
import Header from '../components/Header'
import { addTodo } from '../actions/todo'

export default connect(null, { addTodo })(Header)
