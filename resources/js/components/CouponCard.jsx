import React, { Component } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import './Card.css'

export default class CouponCard extends Component {

    constructor(props){
        super(props)
        this.state = {
            codigo: props.codigo,
            desconto: props.desconto,
            quantidade: props.quantidade,
            valido: 1,
            inicio: props.inicio,
            fim: props.fim,
    
            cadastrar: props.cadastrar
        }
    }

    register() {
       
        const cupom = {
            codigo: this.state.codigo,
            desconto: this.state.desconto,
            quantidade: this.state.quantidade,
            valido: 1,
            inicio: this.state.inicio,
            fim: this.state.fim,
          }
  
          axios.post('/api/cupoms', cupom)
            .then(response => {
                window.location.reload(false);
            })
            .catch(error => {
              this.setState({
                errors: error.response.data.errors
              })
            })
    }

    render() {
        if (this.state.cadastrar == 1) {
            return (
                <div className='card'>
                    <h1>Promoção {this.state.id}</h1>
                    <div>
                        <label htmlFor="codigo" >Código</label>
                        <input id="codigo" type="text" value={this.state.codigo} onChange={e => this.setState({ codigo: e.target.value })} />
                    </div>

                    <div>
                        <label htmlFor="desc">Desconto(%)</label>
                        <input id="desc" type="number" value={this.state.desconto} onChange={e => this.setState({ desconto: e.target.value })} />
                    </div>

                    <div>
                        <label htmlFor="quant">Quantidade</label>
                        <input id="quant" type="number" value={this.state.quantidade} onChange={e => this.setState({ quantidade: e.target.value })} />
                    </div>

                    <div>
                        <label htmlFor="inicio" >Início</label>
                        <input id="inicio" type="date" value={this.state.inicio} onChange={e => this.setState({ inicio: e.target.value })} />
                    </div>

                    <div>
                        <label htmlFor="fim">Fim</label>
                        <input id="fim" type="date" value={this.state.fim} onChange={e => this.setState({ fim: e.target.value })} />
                    </div>
                    <button onClick={() => this.register()}> Cadastrar</button>
                </div>
            )
        } else {
            return (
                <div className="card">
                    <h1>Código Promocional <b>{this.state.codigo}</b></h1>
                    <h1>{this.state.desconto}% de Desconto</h1>
                    <h1>{this.state.quantidade} usos sobrando</h1>
                    <h1>Inicio em {this.state.inicio}</h1>
                    <h1>Fim em {this.state.fim}</h1>
                    {this.props.children}
                </div>
            )
        }

    }
}