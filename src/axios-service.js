const axios = require('axios').default
// Must Import From env Files
const baseURL = 'http://localhost:3000/api/'

const service = {
    post: (endpoint,token,data)  => {
        console.log(endpoint)
        const instance = axios.create({
            baseURL : baseURL,
            headers : {
                token : token  
            }
        })
        return  instance.post(`${baseURL}`+`${endpoint}`,data)
    }
}

export default service
