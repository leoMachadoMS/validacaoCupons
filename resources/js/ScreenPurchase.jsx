import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PurchaseCard from './components/PurchaseCard';
import { Link } from "react-router-dom";
import './Screen.css'

export default class ScreenPurchase extends Component {
    render() {
        return (
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <PurchaseCard produto="Alface" valor={120} />
                    <Link to="/"><div className="btn">Gerenciar Promocões</div></Link>
                </div>  
        )
    }
}