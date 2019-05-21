import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

import { changeDescription, changeTitle, changePrice, search, add, clear } from './todoActions'

export class TodoForm extends Component {

    constructor(props) {
        super(props)

        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { search, add, title, description, price, clear } = this.props
        if(e.key === 'Enter') {
            e.shiftKey ? search() : add({title, description, price }) 
        } else if(e.key === 'Escape') {
            clear()
        }
    }

    render() {
        const { search, add, title, description, price, clear } = this.props
        return (
            <div role="form" className="todoForm">    
                <Grid cols="12 9 10">
                    <input id="title" 
                        className="form-control"
                        placeholder="Nome do produto"
                        onKeyUp={this.keyHandler}
                        onChange={this.props.changeTitle}
                        value={this.props.title}
                        >
                    </input>
                    <input id="description" 
                        className="form-control"
                        placeholder="Descrição do produto"
                        onKeyUp={this.keyHandler}
                        onChange={this.props.changeDescription}
                        value={this.props.description}
                        >
                    </input>
                    <input id="description" 
                        className="form-control"
                        placeholder="Valor do produto"
                        onKeyUp={this.keyHandler}
                        onChange={this.props.changePrice}
                        value={this.props.price}
                        >
                    </input>
                </Grid>
                <Grid cols="12 3 2">
                    <IconButton style="primary" icon="plus" onClick={ () => add({title, description, price}) } />                    
                </Grid>
            </div>
        )
    }

}

// obter os atributos do componente na store e mapear dentro de props
const mapStateToProps = state => ({ title: state.todo.title, description: state.todo.description, price: state.todo.price })
const mapDispatchToProps = dispatch => 
    bindActionCreators({ changeDescription, changeTitle, changePrice, search, add, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)