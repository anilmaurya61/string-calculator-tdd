import { StringCalculator } from "../src/stringCalculator.js";

describe('StringCalculator', () => {
  const calculator = new StringCalculator();

  test('should return 0 when no argument is passed', () => {
    expect(calculator.add()).toBe(0);
  });

  test('should return 0 for empty string', () => {
    expect(calculator.add("")).toBe(0);
  });

  test('should return the number for a single number', () => {
    expect(calculator.add("5")).toBe(5);
  });

  test('should return sum for two comma-separated numbers', () => {
    expect(calculator.add("1,2")).toBe(3);
  });

  test('should return sum for multiple numbers', () => {
    expect(calculator.add("1,2,3,4")).toBe(10);
  });

  test('should handle newlines as delimiters', () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  test('should support custom delimiter', () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
  });

  test('should throw for custom delimiter with no numbers', () => {
    expect(() => calculator.add("//;\n")).toThrow("Invalid custom delimiter format");
  });

  test('should throw for negative numbers', () => {
    expect(() => calculator.add("1,-2,-3")).toThrow("negative numbers not allowed -2,-3");
  });

  test('should support special character delimiters', () => {
    expect(calculator.add("//.\n2.3")).toBe(5);
  });
});
