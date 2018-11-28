import React, { Component } from 'react'
import cs from 'classnames'
import style from './navBar.scss'

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 0
        }
    }
    clickNav = (key) => {
        this.setState({
            active: key
        })
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
                                    ? <li className={cs(style.center)} key={key}>
                                        <span>
                                            +
                                    </span>
                                    </li>
                                    : <li key={key}>
                                        <span className={cs(key === this.state.active && style.active)} onClick={this.clickNav.bind(this, key)}>
                                            {item.name}
                                        </span>
                                    </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default NavBar