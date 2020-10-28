import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Compra from './components/Compra';
import { Link } from "react-router-dom";
import './Screen.css'

export default class ScreenCompra extends Component {
    render() {
        return (
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <Compra produto="Alface" valor={100} />
                    <Link to="/"><div className="btn">Gerenciar Promocões</div></Link>
                </div>  
        )
    }
}