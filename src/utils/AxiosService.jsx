import axios from "axios"

const AXIOS_SERVICE = axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    headers:{
        "Content-Type": "application/json"
    }
})

AXIOS_SERVICE.interceptors.request.use(config=>{
    const token = sessionStorage.getItem('token')
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config
},error=>Promise.reject((error)))

AXIOS_SERVICE.interceptors.response.use(response=>{
    return response.data
},error=>{
    const {response}= error;

    console.error('request error:',{
        message:error.message,
        config:error.config,
        response:response?response.data:null,
        url:error.config.url

    })

    if(response){
        console.log(response)
        switch(response.status){
            case 401:
            sessionStorage.removeItem("token");
            window.location.assign('/');
            break;
            case 404:
                console.log('Not Found')
                break;
            case 500:
                console.log('Internel Server Error')
                break;
            default :
                console.error('An Unexpected Error')
                break;
                
        }
    
    
    }else{
        console.error("An unexpected error occurred.")
    }
    return Promise.reject(response?response.data:error.message)

})

export default AXIOS_SERVICE