import React from 'react'
import axios from 'axios'


class AuthRoute extends React.Component{
    componentDidMount(){
        //获取用户信息
        axios.get('./user/info').
        then(res=>{
            if(res.status==200){
                console.log(res.data)
            }
        })
        // （1.是否登录2.现在的url地址，
        // // login是不需要跳转的3.用户的type,是boss还是牛人4.用户是否完善信息，选择头像个人简介 ）
    }
    render(){
        return <p>判断跳转的地方</p>
    }
    
}
export default AuthRoute