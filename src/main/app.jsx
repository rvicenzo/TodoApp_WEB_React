import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import React from 'react'

import Router from '../main/routes'

export default props => (
    <div className="container">        
        <Router />
    </div>
)