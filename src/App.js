import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Form from './components/Form/Form';
import Customer from './components/Customer/Customer';

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <Route exact path="/" component={Customer} />
                <Route path="/form" component={Form} />
            </BrowserRouter>
        )
    }
}

export default App