const assert = require('assert');
const fs = require('fs');

let path, str;

describe('appendFileSync', () => {
  // Write hooks above the tests
  before(() => {
    path = './message.txt';
  });

  afterEach(() => {
    fs.unlinkSync(path);
  });

  
  it('writes a string to text file at given path name', () => {

    // Setup
    str = 'Hello Node.js';

    // Excercise: write to file
    fs.appendFileSync(path, str);

    // Verify: compare file contents to string
    const contents = fs.readFileSync(path);
    assert.equal(contents.toString(), str);

    //Teardown: restore file

  });

  it('writes an empty string to text file at given path name', () => {

    // Setup
    str = '';

    // Excercise: write to file
    fs.appendFileSync(path, str);

    // Verify: compare file contents to string
    const contents = fs.readFileSync(path);
    assert.equal(contents.toString(), str);

    // Teardown: restore file

  });

});