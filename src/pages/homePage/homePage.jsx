import React, { Component } from 'react'
import MultSearch from '../../components/multSearch/multSearch'
import NavBar from '../../components/navBar/navBar'
// import cs from 'classnames'
// import styles from './homePage.scss'

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="homePage">
                <MultSearch></MultSearch>
                homePage
                <NavBar></NavBar>
            </div>
        )
    }
}

export default HomePage