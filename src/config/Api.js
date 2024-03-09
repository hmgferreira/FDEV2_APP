import axios from 'axios';
import Util from '../config/Util';

const Api = axios.create({
    baseURL: 'http://localhost:8000/'
});

const getToken = async () => {
    const token = await Util.getToken();
    Api.defaults.headers['token'] =  token;
}
getToken();
export default Api;

// axios.get("http://localhost:8000/produtos");
// const dados = {
//     title: 'MOuse',
//     price: 15.99
// }
// axios.post("http://localhost:8000/produtos", dados);
// axios.put("http://localhost:8000/produtos/1", dados);
// axios.delete("http://localhost:8000/produtos/1");

