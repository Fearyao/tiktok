import React, { Component } from 'react'
import MultSearch from '../../components/multSearch/multSearch'
import NavBar from '../../components/navBar/navBar'
import cs from 'classnames'
import style from './homePage.scss'

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className={cs(style.homePage)}>
                <div className={cs(style.top)}>
                    <MultSearch></MultSearch>
                </div>

                <div className={cs(style.bottom)}>
                    <NavBar></NavBar>
                </div>
            </div>
        )
    }
}

export default HomePage