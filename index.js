// const Calc = require('calc-js').Calc;

// console.log(process.argv);

// const [, , a, b] = process.argv;

// console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish());

// const fs = require('fs').promises;
// const path = require('path');

// (async () => {
//     try {
//         // const data = await fs.readFile(path.resolve('./data.txt'), 'utf8')
//         const data = await fs.readFile('./data.txt', 'utf8')
//         console.log(data)

//         const newData = `${data} O no! Data1`
//         const newFile = await fs.writeFile('./data1.txt', newData, 'utf8')
//         console.log( await fs.readFile('./data1.txt', 'utf8'))
//     } catch (error) {
//         console.err(error)
//     }
// })()

const http = require('http')
const fs = require('fs').promises;
const PORT = 8080;

// const fetchData = async () => {
//     try {
//         // const data = await fs.readFile(path.resolve('./data.txt'), 'utf8')
//         const data = await fs.readFile('./data.txt', 'utf8')
//         return data
//     } catch (error) {
//         console.err(error)
//     }
// }

const reduestHandler = async (request, response) => {
    packageFile = await fs.readFile('./package.json', 'utf8')
    response.writeHead(200, { 'Content-type': 'text/json' })
    // response.end(JSON.stringify({a:1, b:[]}))
    response.end(packageFile)
}

const server = http.createServer(reduestHandler);

server.listen(PORT, (error) => {
    if (error) {
        console.error('Alarm:', error)
    }
    console.log(`Server works at ${PORT} port`)
});