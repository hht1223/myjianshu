import React, { PureComponent } from 'react'
import Style from './style.module.css'
export default class Login extends PureComponent {
    render() {
        return (
            <div className={Style.login_wrapper}>
                <div className={Style.login_box}>
                    <input placeholder="账号" />
                    <input placeholder="密码" />
                    <div className={Style.button}>登录</div>
                </div>
            </div>
        )
    }
}
