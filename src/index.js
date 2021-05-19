import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import App from './App'
import Home from './Home'
import Header from './Header'
import  './index.css'
import { Provider} from 'react-redux'
import store from './store'


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
    <Route exact path="/">
      <App />
    </Route>
    <Route path="/Home">
      <Header/>
      <Home />
    </Route>
      
    </Switch>
      
  </BrowserRouter>
  </Provider>
  
  ,document.getElementById('root')

);