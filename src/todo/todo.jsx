import React from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'

export default () => (
    <div>
        <PageHeader name="Tarefas" small="Gerenciar" />
        <TodoForm />
        <TodoList />
    </div>
)
