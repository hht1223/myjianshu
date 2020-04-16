import React, { PureComponent } from 'react'
import Style from './../style.module.css'
export default class Recommend extends PureComponent {
    render() {
        return (
            <div className={Style.recommend_wrapper}>
                <div className={Style.recommend_item}></div>
            </div>
        )
    }
}
