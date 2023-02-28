// const Calc = require('calc-js').Calc;

// console.log(process.argv);

// const [, , a, b] = process.argv;

// console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish());

const fs = require('fs').promises;
const path = require('path');

(async () => {
    try {
        // const data = await fs.readFile(path.resolve('./data.txt'), 'utf8')
        const data = await fs.readFile('./data.txt', 'utf8')
        console.log(data)

        const newData = `${data} O no! Data1`
        const newFile = await fs.writeFile('./data1.txt', newData, 'utf8')
        console.log( await fs.readFile('./data1.txt', 'utf8'))
    } catch (error) {
        console.err(error)
    }
})()