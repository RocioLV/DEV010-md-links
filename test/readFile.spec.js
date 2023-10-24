const fsPromises = require('fs/promises');
const readFile = require('../lib/readFile');

jest.mock('fs/promises');

describe('readFile', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should read file content successfully', async () => {
    const mockFileContent = 'Contenido de prueba';
    fsPromises.readFile.mockResolvedValue(mockFileContent);

    const filePath = '/ruta/valida/archivo.txt';
    const result = await readFile(filePath);

    expect(result).toBe(mockFileContent);
    expect(fsPromises.readFile).toHaveBeenCalledWith(filePath);
  });

  test('should throw an error if reading file fails', async () => {
    const mockError = new Error(`Error reading file`);
    fsPromises.readFile.mockRejectedValue(mockError);

    const filePath = '/ruta/archivo/inexistente.txt';

    await expect(readFile(filePath)).rejects.toThrowError(
      `Error reading file`,
    );
    expect(fsPromises.readFile).toHaveBeenCalledWith(filePath);
  });
});