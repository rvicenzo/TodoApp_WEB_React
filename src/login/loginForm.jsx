import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

import { changeUsername, changePassword, login } from './loginActions'

const LoginForm = (props) => (
            <div role="form" className="todoForm">    
                <Grid cols="12 9 10">
                    <input id="description" 
                        className="form-control"
                        placeholder="Email"                        
                        onChange={props.changeUsername}
                        value={props.username}
                        >
                    </input>
                    <input id="description" 
                        className="form-control"
                        placeholder="Senha"                        
                        onChange={props.changePassword}
                        value={props.password}
                        >
                    </input>
                </Grid>
                <Grid cols="12 3 2">
                    <IconButton style="primary" icon="sign-out" title="Acessar" onClick={ () => props.login(props.username, props.password) } />                    
                </Grid>
            </div>
        )

const mapStateToProps = state => ({username: state.login.username, password: state.login.password})
const mapDispatchToProps = dispatch => bindActionCreators({ changeUsername, changePassword, login }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)