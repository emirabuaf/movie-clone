import axios from 'axios';

const KEY='a953b1fe43592371e88772d4e636f7bf'

export default axios.create({
  baseURL:'https://api.themoviedb.org/3',
  params:{
    api_key: KEY,
    query: String,
  }
});
