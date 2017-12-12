import React from 'react'
import axios from 'axios'
import {
    withRouter
} from 'react-router-dom'

@withRouter
class AuthRoute extends React.Component {
    componentDidMount() {
        const publicList = ['/login','register']
        const pathname = this.props.location.pathname
        if(publicList.indexOf(pathname)>-1){
            return null
        }
        console.log(this.props)
        //获取用户信息
        axios.get('./user/info').
        then(res => {
            if (res.status == 200) {
                if (res.data.code == 0) {
                    //有登陆信息
                } else {
                    this.props.history.push('/login')
                }
            }
        })
        // （1.是否登录2.现在的url地址，
        // // login是不需要跳转的3.用户的type,是boss还是牛人4.用户是否完善信息，选择头像个人简介 ）
    }
    render() {
        return <p> 判断跳转的地方 </p>
    }

}
export default AuthRoute