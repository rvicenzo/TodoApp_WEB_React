import React from 'react'

export default props => (
    <nav className="navbar navbar-inverse bg-inverse">
        <div className="container">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">
                    <i className="fa fa-calendar-check-o"></i>TodoApp
                </a>
            </div>
            <div className="navbar" className="navbar-collapse collapase">
                <ul className="nav navbar-nav">
                    <li><a href="#/Todos">Tarefas</a></li>
                    <li><a href="#/About">Sobre</a></li>
                </ul>
            </div>
        </div>
    </nav>
)