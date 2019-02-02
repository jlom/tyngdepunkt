/**
 * Norwegian number formatter.
 *
 * @param {number} num
 * @returns {string} Natural language number string
 * @example "litt over fire og et halvt"
 */
const numberFormatter = (num: number): string => {
    const decimals = num % 1;

    let qualifier = '';
    let decimalPre = '';
    let numberString = '';
    let decimalPost = '';

    if (num > 9.5 && num < 10) {
        qualifier = 'nesten ';
    } else if (decimals > 0.1 && decimals < 0.2) {
        qualifier = 'over ';
    } else if (decimals > 0.85) {
        qualifier = 'nesten ';
        num++;
    } else if (decimals > 0.45 && decimals < 0.55) {
        decimalPost = ' og et halvt';
    } else if (decimals > 0.35 && decimals < 0.5) {
        decimalPre = 'nesten ';
        decimalPost = ' og et halvt';
    } else if (decimals < 0.5 && decimals > 0.7) {
        decimalPre = 'over ';
        decimalPost = ' og et halvt';
    }

    if (num >= 1 && (decimalPost !== '' || qualifier !== '')) {
        switch (Math.floor(num)) {
            case 1:
                numberString = 'ett';
                break;
            case 2:
                numberString = 'to';
                break;
            case 3:
                numberString = 'tre';
                break;
            case 4:
                numberString = 'fire';
                break;
            case 5:
                numberString = 'fem';
                break;
            case 6:
                numberString = 'seks';
                break;
            case 7:
                numberString = 'syv';
                break;
            case 8:
                numberString = 'åtte';
                break;
            case 9:
                numberString = 'ni';
                break;
            case 10:
                numberString = 'ti';
                break;
            case 15:
                numberString = 'femten';
                break;
            case 20:
                numberString = 'tyve';
                break;
            default:
                numberString = `${Math.floor(num)}`;
            }
        } else {
            return `${Math.round(num * 10) / 10}`;
        }
    return `${qualifier}${decimalPre}${numberString}${decimalPost}`;
};

export default {
    numberFormatter,
};
