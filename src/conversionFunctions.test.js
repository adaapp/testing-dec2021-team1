import './conversionFunctions';
const {
  hexconverter,
  rgbconverter
} = require("./conversionFunctions");

describe('Test the hexconverter function ', () => {
  test('Inputting a hex value will give you a rgb value', () => {
      expect(hexconverter('#8a3be2')).toBe("rgb(138, 59, 226)");
  })
}); 

