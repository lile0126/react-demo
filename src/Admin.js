import React,{ Component} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Row, Col } from 'antd';
import NavLeft from './components/NavLeft'
import './styles/common.less'

export default class Admin extends Component{

    render(){
        return(
            <Row className="container">
                <Col span={4} className="nav-left">
                   <NavLeft />
                </Col>
                <Col span={21} className="main">
                    <Header>

                    </Header>
                    <Row className="content">
                        content
                    </Row>
                    <Footer >

                    </Footer>
                </Col>
            </Row>
           )
    }
}