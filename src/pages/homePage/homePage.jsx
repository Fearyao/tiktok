import React, { Component } from 'react'
import MultSearch from '../../components/multSearch/multSearch'
import NavBar from '../../components/navBar/navBar'
import TikComponent from '../../components/tik/tik'
import style from './homePage.scss'
import cs from 'classnames'
import Swiper from 'swiper'
import swiperStyle from 'swiper/dist/css/swiper.min.css'
class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 20,
            direction: "vertical"
        })
    }
    render() {
        return (
            <div className={style.homePage}>
                <div className={style.top}>
                    <MultSearch></MultSearch>
                </div>
                <div className={style.content}>

                    <div className={cs("swiper-container", swiperStyle['swiper-container'], style.container)}>
                        <div className={cs("swiper-wrapper", swiperStyle['swiper-wrapper'], style.wrapper)}>
                            <div className={cs("swiper-slide", swiperStyle['swiper-slide'], style.slide)}>
                                <TikComponent></TikComponent>
                            </div>
                        </div>
                        <div className={cs("swiper-wrapper", swiperStyle['swiper-wrapper'], style.wrapper)}>
                            <div className={cs("swiper-slide", swiperStyle['swiper-slide'], style.slide)}>
                                <TikComponent></TikComponent>
                            </div>
                        </div>
                        <div className={cs("swiper-wrapper", swiperStyle['swiper-wrapper'], style.wrapper)}>
                            <div className={cs("swiper-slide", swiperStyle['swiper-slide'], style.slide)}>
                                <TikComponent></TikComponent>
                            </div>
                        </div>
                        <div className={cs("swiper-wrapper", swiperStyle['swiper-wrapper'], style.wrapper)}>
                            <div className={cs("swiper-slide", swiperStyle['swiper-slide'], style.slide)}>
                                <TikComponent></TikComponent>
                            </div>
                        </div>
                        <div className={cs("swiper-wrapper", swiperStyle['swiper-wrapper'], style.wrapper)}>
                            <div className={cs("swiper-slide", swiperStyle['swiper-slide'], style.slide)}>
                                <TikComponent></TikComponent>
                            </div>
                        </div>
                        <div className={cs("swiper-wrapper", swiperStyle['swiper-wrapper'], style.wrapper)}>
                            <div className={cs("swiper-slide", swiperStyle['swiper-slide'], style.slide)}>
                                <TikComponent></TikComponent>
                            </div>
                        </div>
                        <div className={cs("swiper-wrapper", swiperStyle['swiper-wrapper'], style.wrapper)}>
                            <div className={cs("swiper-slide", swiperStyle['swiper-slide'], style.slide)}>
                                <TikComponent></TikComponent>
                            </div>
                        </div>
                        <div className={cs("swiper-wrapper", swiperStyle['swiper-wrapper'], style.wrapper)}>
                            <div className={cs("swiper-slide", swiperStyle['swiper-slide'], style.slide)}>
                                <TikComponent></TikComponent>
                            </div>
                        </div>
                        <div className={cs("swiper-wrapper", swiperStyle['swiper-wrapper'], style.wrapper)}>
                            <div className={cs("swiper-slide", swiperStyle['swiper-slide'], style.slide)}>
                                <TikComponent></TikComponent>
                            </div>
                        </div>

                    </div>

                </div>
                <div className={style.bottom}>
                    <NavBar></NavBar>
                </div>
            </div>
        )
    }
}

export default HomePage