const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrOtv=[];
    let arr = expr.split('');
    let arrOfLett = [];
    for (let i=0; i< expr.length-9; i=i+10){
        let bukva = [arr[i], arr[i+1], arr[i+2], arr[i+3], arr[i+4], arr[i+5], arr[i+6], arr[i+7], arr[i+8], arr[i+9]];
        let ttBukva = [];
        for (let i=0; i<9; i=i+2) {
            let m=i+1;
            let dve = [bukva[i], bukva[m]].join('');
            switch (dve) {
                case '10':
                    ttBukva.push('.');
                    break;
                case '11':
                    ttBukva.push('-');
                    break;
                case '**':
                    ttBukva.push('*');
                    break;
                
                default:
                    break;
            }
                        
        }
        let strBukva=ttBukva.join('');
        if (strBukva == '*****') {arrOtv.push(' ');} else {
            arrOtv.push(MORSE_TABLE[strBukva]);
        }
        


    }
    return arrOtv.join('');
}

module.exports = {
    decode
}