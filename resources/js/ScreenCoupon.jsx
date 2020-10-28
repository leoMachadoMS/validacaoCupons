import React, { Component } from 'react';
import ReactDom from 'react-dom';
import CouponCard from './components/CouponCard'
import CouponCardList from './components/CouponCardList';
import { Link } from "react-router-dom";
import './Screen.css'

export default class ScreenCoupon extends Component {
    render() {
        return (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <CouponCard cadastrar={1} />
                <Link to="/comprar"><div className="btn">Fazer Compra</div></Link>
                <CouponCardList />
            </div>
        )
    }
}