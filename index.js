'use strict';

const config = require('config');
const csv = require('csvtojson');
const jsonfile = require('jsonfile');

const csvPath = './fromCSV';
const jsonPath = './toJSON';

// Get CSV/JSON Filenames
const CSV_FILE = config.get('inputCsvFilename');
const JSON_FILE = config.get('outputJsonFilename');

const csvFilePath = `${csvPath}/${CSV_FILE}`;
const jsonFilePath = `${jsonPath}/${JSON_FILE}`;

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
