import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './Compra.css'
import axios from 'axios';


export default class Compra extends Component {

    constructor(props){
        super(props)
        this.state = {
            produto: props.produto,
            valor: props.valor,
            desconto: 0,
            promocao: "",
            promocaoID: "",

            not: ""
        }
    }

    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

    validate(){
        const data = this.formatDate(new Date())
        
        console.log(data)
        
        axios.get('/api/cupoms')
        .then(response => {
            response.data.map(cupom => {
                
                if(cupom.codigo == this.state.promocao && cupom.valido && cupom.quantidade > 0){
                    console.log(cupom.inicio)
                    if(data >= cupom.inicio && data <= cupom.fim){
                        this.setState({desconto: cupom.desconto, promocaoID: cupom.id})
                        console.log(cupom)
                        return(this.setState({ not: "OK"})
                            
                        )
                    }else{
                        return(this.setState({ not: "Promoção Expirada :("}))
                    }
                }
            })
            //return(this.setState({ not: "Promoção Inválida :("}))
        }
            
        )
        
    }

    isValid(params){

    }

    register() {
       
        const compra = {
            produto: this.state.produto,
            desconto: this.state.desconto,
            valor: this.state.valor
            
          }
          if(this.state.promocaoID != "" && this.state.desconto != 0){
            axios.get(`/api/cupoms/${this.state.promocaoID}`)
            .then(
                response => {
                    response.data.quantidade = response.data.quantidade -1
                    axios.put(`/api/cupoms/${this.state.promocaoID}`, response.data)
                }
                
            )
          }

          
          axios.post('/api/compras', compra)
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
       
            return (
                <div className="ComprarCard">
                    <h1>Fazer Compra {this.state.id}</h1>
                    <div>
                        <h3>Produto : {this.state.produto} </h3>
                        <h3>Valor   : R${this.state.valor}</h3>
                        <h3>Desconto: {this.state.desconto}%</h3>
                        <br/>
                        <h3>Valor Final: R${this.state.valor - (this.state.valor * this.state.desconto)/100}</h3>
                    
                        <label htmlFor="cupom" >Cupom de Desconto</label>
                        <input id="cupom" type="text" value={this.state.promocao} onChange={e => this.setState({ promocao: e.target.value })} />
                        <button onClick={() => this.validate()} >Validar</button>
                        <label>{this.state.not}</label>
                    </div>
                    <br/>
                    <button onClick={() => this.register()}>Comprar</button>
                </div>
            )
        }
}