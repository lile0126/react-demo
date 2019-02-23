import React,{ PureComponent} from 'react'
import './index.less'
import { logoSrc } from '../../common/GlobalStatic'
import menuList from '../../config/menuConfig'
import { Menu,
    } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

export default class NavLeft extends PureComponent{


    state={
        menuTreeNodes:[],
    }
    componentWillMount(){
        const menuNodeList = this.handleSubMenu(menuList);
        this.setState({
            menuTreeNodes:menuNodeList,
        })
    }


    handleSubMenu = (data)=>{
        return  data.map((item)=>{
            if(!!item.children){
                return <SubMenu title={item.title} key={item.path}>
                    {this.handleSubMenu(item.children)}
                   </SubMenu>
            }else {
                return <MenuItem title={item.title} key={item.path}  >{item.title}</MenuItem>
            }
       })
    }

    render (){
        return (
            <div >
                <div className="logo">
                    <img alt="请稍等" src={logoSrc}/>
                    <p className="title">react demo</p>
                </div>
                <Menu theme="dark"   >
                    {this.state.menuTreeNodes }
                </Menu>
            </div>
        )
    }
}
