export const replaceImageToWEBP = (img) => {
    return img.replace(/\.[a-z]{3,}/, '.webp')
};

export const compareDates = (date) => {
    let playersBday = date.split('/');
    let currentDate = new Date();

    return +playersBday[0] === currentDate.getDate() && +playersBday[1] === currentDate.getMonth()+1
};