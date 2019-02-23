import React,{ Component} from 'react'
import './index.less'

export default class NavLeft extends Component{

    render (){

        return (
            <div >
                <div className="logo">
                    <img alt="请稍等" src="/favicon.ico"/>
                    <p className="title">react demo</p>
                </div>
               
            </div>
        )
    }
}
