import axios from 'axios';


export default axios.create({
  baseURL: 'https://api.unsplash.com' , 
  headers: {
    Authorization:
      "Client-ID 28801d04d71b9cd3c0652b1bfe661f8b601c29bab6d4cedd321adc63bfc76ee1"
  }
})