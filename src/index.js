const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '*': ' ',
};

function decode(expr) {

    let resultStr = '';
    let buf = '';
    let arr = [];
    for (let i = 0; i < expr.length + 1; i++) {
        if (buf.length < 10) {
            buf += expr[i];
        } else {
            resultStr += getLetter(buf);
            buf = '';
            buf += expr[i];
        }
    }
    return resultStr;
}

function getLetter(w) {
    if (w == '**********')
        return ' ';
    let morze = '';
    for (let i = 0; i < w.length; i++) {
        if (w[i] == 1) {
            if (w[i + 1] == 1) {
                morze += '-'
                i++;
            } else {
                morze += '.'
                i++;
            }
        }
    }
    return MORSE_TABLE[morze];
}

module.exports = {
    decode
}