/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('./app');

    import React, { Component } from 'react'
    import ReactDOM from 'react-dom'
    import { BrowserRouter, Route, Switch } from 'react-router-dom'
    import ScreenCoupon from './ScreenCoupon'
    import ScreenPurchase from './ScreenPurchase'
    
    class App extends Component {
      render () {
        return (
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={ScreenCoupon} />
            <Route path='/comprar' component={ScreenPurchase} />
          </Switch>
        </BrowserRouter>
        )
      }
    }

    ReactDOM.render(<App />, document.getElementById('app'))