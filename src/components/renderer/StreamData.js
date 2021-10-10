export default function StreamData(dataFile, checkboxState) {

    const fs = require("fs");
    const readline = require('readline');
    const __ = require('highland');

    const dataFilePath = dataFile;

    // const selectFilePath = dataFile.filePath;
    // console.log(dataFile);
    // console.log(checkboxState)
    const inputStream = fs.createReadStream(dataFilePath);
    const rl = readline.createInterface({input: inputStream});

    // console.log(dataFile);
    // dataFile.filePath = false;

    let test = [];
    let counter = 0
    const generator = (push, next) => {
      rl.on('line', line => {
        push(null, null)
      })
      rl.on('close', () => {
        push(null, __.nil)
      })
    }

    const valuesAtLines = () => {
      __(generator)
        .tap(() => counter++)
        //.filter(line => {
          //return counter == 2
        //})
        //.map(line => line.split('|')[7])
        // .map(value => `value at line ${counter}: ${value}`)
        .toArray(array => console.log(array))
    }

    return valuesAtLines();
}
