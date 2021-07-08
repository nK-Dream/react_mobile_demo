import React, { Component } from 'react'
import { NavBar, Button, InputItem, Toast } from 'antd-mobile';
import { phoneReg, codeReg } from '../../config/reg'
import { timeCode } from '../../config/contants'
import './index.less'

export default class Login extends Component {
    state = {
        phone: '',
        code: '',
        canClick: true,
        time: timeCode
    } 

    login = () => {
        const { phone, code } = this.state;
        if (!phone) return Toast.fail('请输入合法的手机号');
        if (!code) return Toast.fail('请输入合法的验证码');
        console.log(`发送请求，手机号为${phone}，验证码为${code}`)
    }

    saveData = (type) => {
        return (value) => {
            if (type === 'phone' && !phoneReg.test(value)) value = ''
            else if (type === 'code' && !codeReg.test(value)) value = ''
            this.setState({ [type]: value })
        }
    }

    getCode = () => {
        const { canClick, phone } = this.state
        if (!canClick) return
        if (!phone) return Toast.fail('请输入合法的手机号');
        this.setState({ canClick: false })
        const timeId = setInterval(() => {
            const { time } = this.state;
            this.setState({ time: time - 1 });
            if (time <= 1) {
                clearInterval(timeId)
                this.setState({ canClick: true, time: timeCode })
            }
        }, 1000)
        console.log('发送请求正在获取验证码');
    }

    render() {
        const { canClick, time } = this.state
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
                        onChange={this.saveData('phone')}
                    />
                    {/* 验证码输入区 */}
                    <div className='code-group'>
                        <InputItem
                            clear
                            placeholder="请输入验证码"
                            onChange={this.saveData('code')}
                        />
                        <button
                            className={canClick ? "get-code-btn active" : "get-code-btn disable"}
                            onTouchEnd={this.getCode}
                        >获取验证码{canClick ? '' : ` (${time})`}
                        </button>
                    </div>
                    {/* 登录按钮 */}
                    <Button type="primary" onTouchEnd={this.login}>登录</Button>
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
