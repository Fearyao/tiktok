import React, { Component } from 'react'
import cs from 'classnames'
import style from './sideCtrl.scss'
import './another.css'

const uperImg = require('../../assets/images/uper.png')
class SideCtrl extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className={style.sideCtrl}>
                <div className={cs(style.item, style.uper)} style={
                    {
                        background: `url(${uperImg})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }
                }>
                    <span className='fa fa-plus'></span>
                </div>
                <div className={cs(style.item, style.fav)}>
                    <span className='fa fa-heart'></span>
                    <span className="num title">123</span>
                </div>
                <div className={cs(style.item, style.talk)}>
                    <span className='fa fa-comment'></span>
                    <span className="num">123</span>
                </div>
                <div className={cs(style.item, style.share)}>
                    <span className="fa fa-share"></span>
                    <span className="num">123</span>
                </div>
            </div>
        )
    }
}
export default SideCtrl