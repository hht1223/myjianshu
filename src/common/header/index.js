import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {CSSTransition} from 'react-transition-group'
import Style from './style.module.css'
export default class Header extends Component {
    render() {
        return (
            <div className={Style.header_wrapper}>
                <Link to="/">
                    <div className={Style.logo}></div>
                </Link>
                <div className={Style.nav}>
                    <div className={Style.nav_item_left}>
                        <span className={Style.nav_item_active}>首页</span>
                    </div>
                    <div className={Style.nav_item_left}>
                        下载App
                    </div>
                    <div className={Style.nav_item_right}>
                        <span className={Style.sign_out}>退出</span>
                    </div>
                    <Link to="/login">
                        <div className={Style.nav_item_right}>
                            登录
                        </div>
                    </Link>
                    <div className={Style.nav_item_right}>
                        <i className={Style.iconfont}>&#xe636;</i>
                    </div>
                    <div className={Style.search_wrapper}>
                        {/* <CSSTransition> */}
                        <input placeholder="搜索" className={Style.nav_search}/>
                        {/* </CSSTransition> */}
                        <i className={Style.iconfont_zoom}>&#xe614;</i>
                    </div>
                </div>
                <div className={Style.addition}>
                    <Link to='/write'>
                        <div className={Style.write_article}>
                            <i className={Style.iconfont}>&#xe615;</i>
                            写文章
                        </div>
                    </Link>
                    <div className={Style.write_reg}>注册</div>
                </div>
            </div>
        )
    }
}
