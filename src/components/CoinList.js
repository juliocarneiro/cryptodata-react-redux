import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionCreators from '../store/actions'
import {Link} from 'react-router-dom'

import Loader from './Loader'

class CoinList extends Component{
    componentWillMount(){
        this.props.getData()
    }
    render(){
        //console.log(this.props)
        return(
            <Fragment>
            {
                this.props.coins.length !== 0 ?
                this.props.coins.map(item => {
                    return(
                        <div key={item.id} className="col-md-2 text-center mb-4 animated fadeIn">
                          <Link to={item.id} className="card-crypto d-block">
                            <img src={item.image.small} alt=""/>
                            <p className="font-weight-bold mt-2 mb-0" style={{fontSize:'12px'}}>{item.name}</p>
                          </Link>
                        </div>
                    )
                }) :
                <div className="container">
                    <Loader color="black" title="Carregando..."/>
                </div>
            }
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    coins: state.getData.coins
})
const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators, dispatch) 

export default connect(mapStateToProps, mapDispatchToProps)(CoinList)