import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import {login} from '../../redux/user.redux'
import {connect} from 'react-redux'

@connect(
    state=>state.user,
    {login}
)

 class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user:'',
            pwd:''
        }
        this.regiser = this.register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    register() {
        this.props.history.push('./register')
    }

    handleChange(key, val) {
        this.setState({
          [key]: val
        })
      }
      handleLogin(){
          this.props.login(this.state)
      }

    render() {
        return (<div>
            <Logo></Logo>
            <h2>我是登录页面</h2>
            <WingBlank>
                <List>
                    <InputItem onChange={v => this.handleChange('user', v)}>用户</InputItem>
                    <WhiteSpace />
                    <InputItem onChange={v => this.handleChange('pwd', v)}>密码</InputItem>
                </List>
                <Button type='primary' onClick={this.handleLogin}>登录</Button>
                <WhiteSpace />
                <Button onClick={this.register} type='primary'>注册</Button>
            </WingBlank>
        </div>)
    }
}
export default Login