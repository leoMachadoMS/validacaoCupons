import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Card from './components/Card'
import CardList from './components/CardList';
import { Link } from "react-router-dom";
import './Screen.css'

export default class ScreenPromocao extends Component {
    render() {
        return (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <Card cadastrar={1} />
                <Link to="/comprar"><div className="btn">Fazer Compra</div></Link>
                <CardList />
            </div>
        )
    }
}