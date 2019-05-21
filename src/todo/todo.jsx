import React from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'
import Menu from '../template/menu'
export default () => (
    <div>
        <Menu />
        <PageHeader name="Produtos" small="gerenciar" />
        <TodoForm />
        <TodoList />
    </div>
)
