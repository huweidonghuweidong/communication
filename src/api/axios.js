/**
 * axios封装
 * 请求拦截，响应拦截，错误统一处理
 * */
import axios from 'axios'

//封装一个请求返回后失败的状态码处理方法
const errorHandle = (code,tips) => {
    switch (code) {
        case 200:
            console.log('状态码为200',tips)
            //弹框提示后台返回错误提示tips，或者前端根据错误状态码弹出不同的消息
            break;
        case 400:
            console.log('状态码为400')
            //弹框提示后台返回错误提示tips，或者前端根据错误状态码弹出不同的消息
            break;
        case 201:
            console.log('状态码为201')
            //弹框提示后台返回错误提示tips，或者前端根据错误状态码弹出不同的消息
            break;
        case 202:
            console.log('状态码为202')
            //弹框提示后台返回错误提示tips，或者前端根据错误状态码弹出不同的消息
            break;
        case 500:
            console.log('状态码为500')
            //弹框提示后台返回错误提示tips，或者前端根据错误状态码弹出不同的消息
            break;
        
        default:
            console.log('其他错误')
            break;
    }
}

var instance = axios.create({timeout:1000*60});
//设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-from-urlencoded';
//请求前拦截器
instance.interceptors.request.use(
    config => {
        //加载中的loading显示

        //请求时token带入，可根据token判断用户是否登陆
        config.headers.token = sessionStorage.getItem('token')
        return config
    },
    error => {
        //请求错误后
        return Promise.error(error)
    }
);
//请求响应后拦截器
instance.interceptors.response.use(
    response => {
        //根据返回码判断提示
        errorHandle(response.data.code, response.data.message)
        //关闭loading显示

        return Promise.resolve(response)
    },
    error => {
        const {response} = error
        errorHandle(response.status, response.data.message)
        return Promise.reject(error)
    }
);
export default instance;