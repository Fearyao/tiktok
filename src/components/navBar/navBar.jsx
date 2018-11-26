import React,{Component} from 'react'
import cs from 'classnames'
import style from './navBar.scss'

class NavBar extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return(
            <div className={cs(style.navBar)} >
                navBar
            </div>
        )
    }
}
export default NavBar