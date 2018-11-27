import React, {Component, Fragment} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

//import {ConnectedRouter} from 'connected-react-router'
//import history from './history'

import Loader from '../components/Loader'

import Main from '../pages/Main'
import Coin from '../pages/Coin'

class Routes extends Component{
    state = {
        isLoading: true
    }
    componentDidMount(){
        this.setState({
            isLoading: false
        })
    }
    render(){
        return(
            <Fragment>
                {
                    this.state.isLoading ? 
                    <Loader color="black" title="Carregando..."/>
                    :
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Main}/>
                            <Route path='/:id' component={Coin}/>
                        </Switch>
                    </BrowserRouter>
                }
            </Fragment>
        )
    }
}

export default Routes