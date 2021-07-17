import axios from '../axios'; //引入axios创建的axios实例

const home = {
    getHome(params) {
        return axios.get(`${process.env.VUE_APP_URL}/api/home`,{params})
    },
    postHome(params) {
        return axios.post(`${process.env.VUE_APP_URL}/api/home`,{params})
    },
}
export default home