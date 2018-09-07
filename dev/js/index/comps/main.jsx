import React from 'react'
import RactDOM from 'react-dom'
import Comp1 from './component.jsx'
import style from '../../../style/index/index.css'

RactDOM.render(
    <div className="main">
        react es2015 demo:
        <Comp1 />
    </div>,
    document.getElementById('comp')
)