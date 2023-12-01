import { getMostUsedLetter } from '@chekl/most-used-letter';
import { readFile } from 'fs';

const params = process.argv.slice(2);

readFile(params[0], 'utf-8', (err, data) => {
  console.log('Most used letter in file is:', getMostUsedLetter(data));
});
