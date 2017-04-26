'use strict';

const csv = require('csvtojson');
const jsonfile = require('jsonfile');

const csvPath = './fromCSV';
const jsonPath = './toJSON';

// Input/Output Filenames
const csvFile = 'sample.csv'; // CSV filename to convert
const jsonFile = 'sample.json'; // JSON filename to output

const csvFilePath = `${csvPath}/${csvFile}`;
const jsonFilePath = `${jsonPath}/${jsonFile}`;

const jsonOutput = [];

csv().fromFile(csvFilePath)
.on('json', (jsonObject) => {
  jsonOutput.push(jsonObject);
})
.on('done', (error) => {
  jsonfile.writeFile(jsonFilePath, jsonOutput, (err) => {
    if (err) console.error(err);
  });
  console.log('Done.');
});
