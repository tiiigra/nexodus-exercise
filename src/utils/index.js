export const truncate = (str, maxWords) => {
    const array = str.trim().split(' ');
    const ellipsis = array.length > maxWords ? '...' : '';
    return array.slice(0, maxWords).join(' ') + ellipsis;
};