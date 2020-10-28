import axios from 'axios'
import React, { Component } from 'react'
import CouponCard from './CouponCard'
import './Card.css'

export default class CouponCardList extends Component {
      constructor () {
        super()
        this.state = {
          cupoms: []
        }
      }

      componentDidMount () {
        axios.get('/api/cupoms').then(response => {
          this.setState({
            cupoms: response.data
          })
        })
      }

      remove (id) {
        axios.delete(`/api/cupoms/${id}`)
        .then(res => {
          console.log(res);
          console.log(res.data)
        })
        window.location.reload(false);
      }

      render () {
        const { cupoms } = this.state
        return (
          <div>
            <h3 style={{textAlign: "center"}}>Todas as Promoções</h3>
            <div className='list'>
              {cupoms.map(cupom => (
                        <CouponCard
                            key={cupom.id}
                            codigo={cupom.codigo}
                            desconto={cupom.desconto}
                            quantidade={cupom.quantidade}
                            inicio={cupom.inicio}
                            fim={cupom.fim}
                            cadastrar={0}
                        ><button onClick={() => this.remove(cupom.id)} >Remover</button>  </CouponCard>
                        
              ))}
                    
            </div>
          </div>
        )
      }
}