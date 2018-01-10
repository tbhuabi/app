const fs = require('fs');
const Parser = require('qrcode-image-parser');
const path = require('path');

const src = path.resolve(__dirname, './1.png');
debugger;
fs.readFile('./1.png', function (err, data) {
    debugger;
    Parser.parse(data, (err, parsed) => {
        console.log(parsed);
        // [
        //   [1,1,1,1,1,1,1],
        //   [1,0,0,0,0,0,1],
        //   [1,0,1,1,1,0,1],
        //   [1,0,1,1,1,0,1],
        //   [1,0,1,1,1,0,1],
        //   [1,0,0,0,0,0,1],
        //   [1,1,1,1,1,1,1],
        // ]
    });
})
