import axios from 'axios'

export default axios.create(
    {
        baseURL : 'https://api.unsplash.com', 
        headers:
        {
            Authorization:
                'Client-ID f931ce45a28ec7fbb599674807f2162df6589d5688978b791b50b87044647bd6'
                           
        }
        
        
    })
