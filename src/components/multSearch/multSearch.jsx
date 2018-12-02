import React, { Component } from 'react'
import cs from 'classnames'
import style from './multsearch.scss'
class MultSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 0
        }
    }
    setItem = (num) => {
        this.setState({
            active: num
        }, this.getList)
    }
    getList = () => {
        console.log(this.state.active)
    }
    render() {
        return (
            <div className={style.multsearch}>
                <div className={cs(style.item)}>
                    <span className={cs('fa', 'fa-search')}></span>
                </div>
                <div className={style.item}>
                    <span className={this.state.active === 0 ? style.active : ''} onClick={this.setItem.bind(this, 0)}>推荐</span>
                    <span className={this.state.active === 1 ? style.active : ''} onClick={this.setItem.bind(this, 1)}>杭州</span>
                </div>
                <div className={style.item}>
                    <span className='fa fa-qrcode'></span>
                </div>
            </div>
        )
    }
}
export default MultSearch