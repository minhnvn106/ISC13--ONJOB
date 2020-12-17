import axios from 'axios';

const url = {
    //có thể thay thế bằng url bên backend
    baseUrl:'http://localhost:8888/api',
    login:'/login', //đường dẫn sẽ gọi đến controller api backend
    majors:'/majors',
    instructors:'/instructors'
}

const instance = axios.create({
    baseURL:url.baseUrl,
    headers:{
        // Content-Type  - chỉ truyền và nhận dữ liệu bằng json
        "Content-Type":"application/json",
        "Accept":"application/json"
    }
});

const api2 = {
    url,
    instance,
    // url : url,
    // instance : instance,
    get : instance.get,
    post:instance.post,
    put:instance.put,
    delete:instance.delete
}
export default api2;