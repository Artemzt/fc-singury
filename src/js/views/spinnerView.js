import {getElement} from './elements';

export const renderSpinner = (parentElem) => {
    const spinner = `
        <div id="spinner">
            <div class="dot-loader"></div>
            <div class="dot-loader"></div>
            <div class="dot-loader"></div>
        </div>
`;
    parentElem.insertAdjacentHTML("afterbegin", spinner);
};

export const clearSpinner = () => {
    const loader = getElement.spinner();
    if (loader) {
        loader.parentElement.removeChild(loader);
    }
};
