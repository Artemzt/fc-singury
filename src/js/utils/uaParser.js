import UAParser from 'ua-parser-js';
import {elements} from '../views/elements';

const parsed = new UAParser();

export const insertDevicesClassToBody = () => {
    elements.html.className = `${parsed.getOS().name} ${parsed.getBrowser().name} ${parsed.getDevice().type}`.toLowerCase();
};