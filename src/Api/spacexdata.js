import axios from 'axios';

export default axios.create({
    baseURL:'https://api.spacexdata.com/v3/launches?limit=100',
    // headers:{
    //     Authorization: 'Client-ID _w7kRrYkf6aEAZCB8UiThCipu2OgR51UprZkMBNmRfQ',
    // }
});