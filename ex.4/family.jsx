import React from 'react'
import { ChildrenWithProps } from '../utils/ReactUtils' 

export default props => (
    <div>
        <h1>Família</h1>
        { ChildrenWithProps(props) }
    </div>
)