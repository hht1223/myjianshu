import React, { PureComponent } from 'react'
import Style from './style.module.css'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
export default class Home extends PureComponent {
    render() {
        return (
            <div className={Style.home_wrapper}>
                <div className={Style.home_left}>
                    <img className={Style.home_left_banner} src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                    <Topic/>
                    <List/>
                </div>
                <div className={Style.home_right}>
                    <Recommend/>
                    <Writer/>
                </div>
                <div className={Style.back_top}>顶部</div>
            </div>
        )
    }
}
