import { add, greet } from '../index';

describe('Main functions', () => {
  describe('greet', () => {
    it('should return a greeting message', () => {
      const result = greet('World');
      expect(result).toBe('Hello, World! Welcome to TypeScript vibecoding!');
    });

    it('should handle empty string', () => {
      const result = greet('');
      expect(result).toBe('Hello, ! Welcome to TypeScript vibecoding!');
    });
  });

  describe('add', () => {
    it('should add two positive numbers', () => {
      const result = add(2, 3);
      expect(result).toBe(5);
    });

    it('should add negative numbers', () => {
      const result = add(-2, -3);
      expect(result).toBe(-5);
    });

    it('should handle zero', () => {
      const result = add(0, 5);
      expect(result).toBe(5);
    });
  });
});
