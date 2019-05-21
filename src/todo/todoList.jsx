import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { remove } from './todoActions'

import IconButton from '../template/iconButton';

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
                <tr key={todo.id}>
                    <td>{todo.title}</td>
                    <td>{todo.description}</td>
                    <td>                        
                        <IconButton style='danger' icon='trash-o'
                            onClick={() => props.remove(todo)}></IconButton>
                    </td>
                </tr>
            )
        )
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>        
    )
}

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch => bindActionCreators({ remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)