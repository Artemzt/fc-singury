import axios from 'axios';
import {apiRoot} from  './../config';

export default class  {
    constructor() {};

    async getAllPlayers() {
            const res = await axios(`${apiRoot}/players/`);
            return res.data.data.players;
    };
}