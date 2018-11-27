import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionCreators from '../store/actions'

import Loader from '../components/Loader'

class Coin extends Component {
    componentWillMount(){
        const coin = this.props.match.params.id
        this.props.getDataCoin(coin)
    }
    render() {
        //console.log(this.props)
        return (
            <div className="container">
                {
                    typeof this.props.coinsPage.id != 'undefined' ?
                    <div className="animated fadeIn mt-5 mb-5">
                        <h3 className="mb-4">
                            <img alt="" src={this.props.coinsPage.image.small}/>
                            {' '+this.props.coinsPage.id.toUpperCase()+' / '}
                            {this.props.coinsPage.symbol.toUpperCase()}
                        </h3>
                        <div 
                            className="animated fadeIn" 
                            dangerouslySetInnerHTML={{
                                __html: Object.values(this.props.coinsPage.description)[0]
                            }}
                        />
                        <Link to="/" className="btn btn-primary mb-5 mt-4">Voltar</Link>
                    </div>
                    : <Loader color="black" title="Carregando..."/>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    coinsPage: state.getDataCoin.coinsPage
})
const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators, dispatch) 

export default connect(mapStateToProps, mapDispatchToProps)(Coin)