import React,{ Component} from 'react'
import { Row, Col} from 'antd'
import './index.less'
import * as  DateUtils from '../../utils/dateUtils'

export default class Header extends Component{
    state={
        user:{
            name:'java worker'
        },
        todayTime:"",
    }

    componentDidMount(){
        setInterval(()=>{
        const  times = DateUtils.formatDayTime(new Date().getTime());
        this.setState({
               todayTime:times,
           })
        },1000)
    }

    render (){

        return (
            <div className="header">
                <Row className="header-top">
                    <Col span="24">欢迎&nbsp;{this.state.user.name}
                     <a href="www.baidu.com" target="_self">退出</a>
                    </Col>
                    
                </Row>
                <Row className="header-down">   
                    <Col span="4" className="header-down-title">首页</Col>
                    <Col span="20" className="header-down-content">
                        <span className="today">{this.state.todayTime}</span>
                        <span className="weather">晴转多云</span>
                    </Col>
                </Row>
            </div>
        )
    }
}

