// 'use client'
import { Col, Row } from "antd";
import React from 'react';
import classNames from "classnames/bind";
import image from "@/assets/images";
import Image from "next/image";
import HeaderSearch from "./HeaderSearch";

import style from './HeaderComponent.module.scss'
import NotificationComponent from "./NotificationComponent";
import MessageComponent from "./MessageComponent";
import UserAccount from "./UserAccount";
import Link from "next/link";
import ROUTES from "@/constants/routes";
const cx = classNames.bind(style)

export default function HeaderComponent({collapsed, onCollapsed}) {

    return (
        <header className={cx('wrapper')}>

            <div className="container">
                <Row style={{height: '60px'}} justify={'space-between'} align={'middle'}>
                    <Col span={8} >
                        <div className={cx("left-box")}>
                            <Link href={ROUTES.HOMEPAGE} className={cx('header-logo')}>
                                <Image priority src={'/logo-test.png'} alt="logo" height={50} width={50} />
                                <div className={cx("logo-name")}>
                                    <div className={cx("logo-name-1")}>VinhUni Educator</div>
                                    {/* <div className={cx("logo-name-2")}>Hệ thống thi trắc nghiệm</div> */}
                                </div>
                            </Link>
                        </div>
                    </Col>
                    <Col span={8} >
                        <div className={cx('center-box')}>
                            <HeaderSearch />
                        </div>
                    </Col>
                    <Col span={8} >
                        <div className={cx('right-box')}>

                            <MessageComponent />

                            <NotificationComponent />

                            <UserAccount />
                        </div>
                    </Col>
                </Row>
            </div>

            {/* <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined className={cx('icon')} /> : <MenuFoldOutlined className={cx('icon')} />}
                onClick={() => onCollapsed(!collapsed)}
                className={cx('btn-collaped')}
            ><span className={cx('space')}></span></Button> */}
        </header>
    )
}