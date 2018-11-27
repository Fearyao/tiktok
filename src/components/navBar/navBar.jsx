import React, { Component } from 'react'
import cs from 'classnames'
import style from './navBar.scss'

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const navList = [
            {
                name: '首页',
                url: ''
            },
            {
                name: '关注',
                url: ''
            },
            {
                add: true,
            },
            {
                name: '消息',
                url: ''
            },
            {
                name: '我',
                url: ''
            }
        ]
        return (
            <div className={cs(style.navBar)} >
                <ul>
                    {
                        navList.map((item, key) => {
                            return (
                                item.add
                                    ? <li className={cs(style.center)}>+</li>
                                    : <li className={cs(style.nomal)}>{item.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default NavBar