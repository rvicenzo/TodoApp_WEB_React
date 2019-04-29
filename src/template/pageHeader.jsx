import React from 'react'

export default props => (
    <header>
        <h2>{props.name}<small className="sub-title">{props.small}</small></h2>
    </header>
)