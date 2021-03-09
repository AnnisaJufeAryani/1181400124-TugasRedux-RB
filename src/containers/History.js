import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } form 'redux'
import { selectHistory, clearHistory } from '../actions/index'

class History extends Component {
    render(){
        return {
            <div>
                <h4><i className='fa fa-clock' /> History Operator</h4>
                <ul className='List-group'>
                {this.props.history.maphistory, index) => (
                    <li key={index} className='list-group-item list-group-item-action' onClick{() =>{
                        this.props.selectHistory(index)}}>{ ${history} = ${eval(history)}}</li>
                ))}
                </ul>
                <div className='mt-3 text-right'>
            </div>
        }
    }
}