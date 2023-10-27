const fsPromises = require('fs/promises');
const readFileContent = require('../lib/readFileContent');

jest.mock('fs/promises');

describe('readFileContent', () => {
  it('should return the content of the file', () => {
    const filePath = '/Users/shio/DEV010-md-links/examples/example.txt';
    const content = 'This is a sample file content.';
    fsPromises.readFile.mockResolvedValue(content);
    return readFileContent(filePath)
      .then((result) => {
        expect(result).toBe(content);
      });
  });
  it('should return an error if the file could not be read', () => {
    const filePath = '/Users/shio/DEV010-md-links/examples/examplesss.txt';
    const error = new Error(`The file ${filePath} could not be read.`);
    fsPromises.readFile.mockRejectedValue(error);
    return readFileContent(filePath)
      .catch((err) => {
        expect(err).toEqual(error);
      });
  });
});