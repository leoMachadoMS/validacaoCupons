import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Card from './Card'
import CardList from './ProjectsList';
import { Link } from "react-router-dom";

export default class WinPromocao extends Component {
    render() {
        return (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <Link to="/comprar">Fazer Compra</Link>
                <Card cadastrar={1} />
                <CardList />
            </div>
        )
    }
}