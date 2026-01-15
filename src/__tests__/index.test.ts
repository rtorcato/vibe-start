import { add, greet } from '../index';

describe('Main functions', () => {
  describe('greet', () => {
    it('should return a greeting message with capitalized name', () => {
      const result = greet('john');
      expect(result).toBe('Hello, John! Welcome to vibecoding! 🚀');
    });

    it('should handle already capitalized names', () => {
      const result = greet('Alice');
      expect(result).toBe('Hello, Alice! Welcome to vibecoding! 🚀');
    });

    it('should throw error for empty string', () => {
      expect(() => greet('')).toThrow('Name cannot be empty');
    });

    it('should throw error for whitespace-only string', () => {
      expect(() => greet('   ')).toThrow('Name cannot be empty');
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
