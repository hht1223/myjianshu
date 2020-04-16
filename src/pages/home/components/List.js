import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom'
import Style from './../style.module.css'
export default class List extends PureComponent {
    render() {
        return (
            <div>
                <Link>
                    <div className={Style.list_item}>
                        <img className={Style.list_item_pic} />
                        <div className={Style.list_info}>
                            <h3 className={Style.list_info_title}>胡歌12年后首谈车祸</h3>
                            <p className={Style.list_info_desc}>文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...</p>
                        </div>
                    </div>
                </Link>
                <div className={Style.load_more}>更多文字</div>
            </div>
        )
    }
}
