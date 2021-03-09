import React, {Component} from 'react'
import Screen from '../containers/Screen'
import History from '../containers/History'
class App extends Component {
    render (){
        return (
            <div className='row'>
                <div className='col-sm-12'>
                    <h3 className='mt-4'><i className='fa fa-calculator' /> Calculator React Reduce</h3>
                </div>
                <div className='col-sm-8'>
                    <Screen/>
                </div>
                <div className='col-sm-8'>
                    <h5>Buttons</h5>
                </div>
                <div className='col-sm-4'>
                    <History />
                </div>
            </div>
        )
    }
}

export default App 