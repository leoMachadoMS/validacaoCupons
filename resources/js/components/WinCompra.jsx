import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Compra from './Compra';
import { Link } from "react-router-dom";

export default class WinCompra extends Component {
    render() {
        return (
            
                <div>
                    <Link to="/">Gerenciar Promocões</Link>

                    <Compra produto="Alface" valor={100} />
                </div>
                
            
           
        )
    }
}