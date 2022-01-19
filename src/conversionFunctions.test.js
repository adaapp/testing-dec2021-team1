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

describe('Test the hexconverter function ', () => {
  test('Inputting a hex value will give you a rgb value', () => {
    expect(hexconverter('#8a3be2')).toBe("rgb(138, 59, 226)");
  })
});

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

