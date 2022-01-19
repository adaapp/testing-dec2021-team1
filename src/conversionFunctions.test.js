import './conversionFunctions';
const {
  hexconverter,
  rgbconverter
} = require("./conversionFunctions");

//testing hex converter function
describe('this is a test for the hexconverter function ', () => {

  test('Inputting a hex value will give you the correct rgb value', () => {
    expect(hexconverter('#8A3BE2')).toBe("rgb(138, 59, 226)");
    expect(hexconverter('#7A4FE2')).toBe("rgb(122, 79, 226)");
    expect(hexconverter('#E16470')).toBe("rgb(225, 100, 112)");
    expect(hexconverter('#FFFFFF')).toBe("rgb(255, 255, 255)");
    expect(hexconverter('#0637C7')).toBe("rgb(6, 55, 199)");
  });

  test('That the output of the hex converter is length from 12 to 18 ', () => {
    expect(hexconverter('#EEEEEE')).toHaveLength(18);
    expect(hexconverter('#060501')).toHaveLength(12);
    expect(hexconverter('#7D0501')).toHaveLength(14);
    expect(hexconverter('#000000')).toHaveLength(12);
    expect(hexconverter('#0A0B0C')).not.toHaveLength(11);
  });

  test('That the case sensitivity does not matter', () => {
    expect(hexconverter('#AAAFFF')).toStrictEqual("rgb(170, 175, 255)");
    expect(hexconverter('#AaaFfF')).toStrictEqual("rgb(170, 175, 255)");
    expect(hexconverter('#aaaFFF')).toStrictEqual("rgb(170, 175, 255)");
    expect(hexconverter('#aaafff')).toStrictEqual("rgb(170, 175, 255)");
    expect(hexconverter('#AaaFff')).not.toStrictEqual(undefined);
  });

  test('That not inputting a # will still give you the correct rgb value', () => {
    expect(hexconverter('#0CFF2D')).toStrictEqual("rgb(12, 255, 45)");
    expect(hexconverter('0CFF2D')).toStrictEqual("rgb(12, 255, 45)");
    expect(hexconverter('#85B0B7')).toStrictEqual("rgb(133, 176, 183)");
    expect(hexconverter('85B0B7')).toStrictEqual("rgb(133, 176, 183)");
    expect(hexconverter('72C1B4')).not.toStrictEqual(undefined);
  });

  test('The letter inputted is only A,B,C,D,E or F to get a rgb value', () => {
    expect(hexconverter('AAAAAA')).toStrictEqual("rgb(170, 170, 170)");
    expect(hexconverter('BBBBBB')).toStrictEqual("rgb(187, 187, 187)");
    expect(hexconverter('CCCCCC')).toStrictEqual("rgb(204, 204, 204)");
    expect(hexconverter('DDDDDD')).toStrictEqual("rgb(221, 221, 221)");
    expect(hexconverter('EEEEEE')).toStrictEqual("rgb(238, 238, 238)");
    expect(hexconverter('FFFFFF')).toStrictEqual("rgb(255, 255, 255)");
    expect(hexconverter('GGGGGG')).toStrictEqual("rgb(NaN, NaN, NaN)");
    expect(hexconverter('HHHHHH')).toStrictEqual("rgb(NaN, NaN, NaN)");
    expect(hexconverter('ZZZZZZ')).toStrictEqual("rgb(NaN, NaN, NaN)");
    expect(hexconverter('MMMMMM')).toStrictEqual("rgb(NaN, NaN, NaN)");
    expect(hexconverter('MLABZO')).toStrictEqual("rgb(NaN, 171, NaN)");
  });

  test('The input is length 6', () => {
    expect(hexconverter('#010203')).toStrictEqual("rgb(1, 2, 3)");
    expect(hexconverter('#10203')).not.toStrictEqual("rgb(1, 2, 3)");
    expect(hexconverter('#123')).not.toStrictEqual("rgb(1, 2, 3)");
    expect(hexconverter('#A1B1C1')).toStrictEqual("rgb(161, 177, 193)");
  });

  test('There is an object', () => {
    expect(hexconverter).toBeInstanceOf(Object);
    expect(hexconverter).toBeInstanceOf(Function);
    expect(hexconverter).not.toBeInstanceOf(Array);
  });

});


//testing rgb function
describe("this is a test for the rgb converter function", () => {

  test("value is converted into a hexcode correctly", () => {
    expect(rgbconverter("12,34,56")).toStrictEqual("#c2238");
    expect(rgbconverter("4,5,20")).toStrictEqual("#4514");
    expect(rgbconverter("1,1,1")).toStrictEqual("#111");
    expect(rgbconverter("20,50,70")).toStrictEqual("#143246");
  });

  test('Should throw an error when string is not in correct format e.g. symbols or text', () => {
    expect(() => {
      rgbconverter('%^&&*')
    }).toThrow("Currently in invalid format");
    expect(() => {
      rgbconverter("hello")
    }).toThrow("Currently in invalid format");
    expect(() => {
      rgbconverter("this is invalid")
    }).toThrow("Currently in invalid format");
  });

  test("an error is thrown when given a value instead of a string", () => {
    expect(() => {
      rgbconverter(12, 34, 56);
    }).toThrow("input.split is not a function");
    expect(() => {
      rgbconverter(1, 3, 6);
    }).toThrow("input.split is not a function");
  });

  test("there is an object, fucntion but not an array", () => {
    expect(rgbconverter).toBeInstanceOf(Object);
    expect(rgbconverter).toBeInstanceOf(Function);
    expect(rgbconverter).not.toBeInstanceOf(Array);
  });
});

