import React from 'react'
import ReactDOM from 'react-dom'
import { Primeiro, Segundo } from './component'

ReactDOM.render(
    <div>
        <Primeiro value="O valor do meu componente"/>
        <Segundo value="O valor do meu componente"/>
    </div>
    

, document.getElementById("app"))