import axios from 'axios';
import {apiRoot} from  './../config';

export default class  {
    constructor() {};

    async getAllHistory() {
            const res = await axios(`${apiRoot}/teams/`, {
                params: {
                    ID: '5e67ea504c4e6519cc40aab3'
                }
            });
            return res.data.data.team[0].history;
    };
};