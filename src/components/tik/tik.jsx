import React, { Component } from 'react'
import SideCtrl from '../sideCtrl/sideCtrl'
import style from './tik.scss'
class TikComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className={style.tikComponent}>
                <div className={style.video}>
                    <br />1
                    <br />1
                </div>
                <div className={style.side}>
                    <SideCtrl></SideCtrl>
                </div>
            </div>
        )
    }
}

export default TikComponent