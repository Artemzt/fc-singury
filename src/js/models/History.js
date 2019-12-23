import axios from 'axios';
import {apiRoot} from  './../config';

export default class  {
    constructor() {};

    async getAllHistory() {
            const res = await axios(`${apiRoot}/teams/`, {
                params: {
                    ID: '5dae01fde5fd6921e0af71cb'
                }
            });
            return res.data.data.team[0].history;
    };
};