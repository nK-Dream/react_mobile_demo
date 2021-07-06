import React, { Component } from 'react'
import { NavBar, Button, InputItem } from 'antd-mobile';
import './index.less'

export default class Login extends Component {
    render() {
        return (
            <div>
                {/* 顶部导航区 */}
                <NavBar mode='light'>手机验证码登录</NavBar>
                {/* 内容区 */}
                <div className='login-wraper'>
                    {/* 手机号输入区 */}
                    <InputItem
                        clear
                        placeholder="请输入手机号"
                    />
                    {/* 验证码输入区 */}
                    <div className='code-group'>
                        <InputItem
                            clear
                            placeholder="请输入验证码"
                        />
                        <button className="get-code-btn">获取验证码</button>
                    </div>
                    {/* 登录按钮 */}
                    <Button type="primary">登录</Button>
                    {/* 底部说明 */}
                    <div className='footer'>
                        未注册的手机号，验证后会自动创建账号，登录即代表您统一
                        <a href='http://www.baidu.com'>《隐私政策》</a>
                    </div>
                </div>
            </div>
        )
    }
}
