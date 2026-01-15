import { capitalize, isEmpty } from '@/utils/string';

describe('String utilities', () => {
  describe('isEmpty', () => {
    it('should return true for empty string', () => {
      expect(isEmpty('')).toBe(true);
    });

    it('should return true for whitespace-only string', () => {
      expect(isEmpty('   ')).toBe(true);
      expect(isEmpty('\t\n')).toBe(true);
    });

    it('should return false for non-empty string', () => {
      expect(isEmpty('hello')).toBe(false);
      expect(isEmpty('  hello  ')).toBe(false);
    });
  });

  describe('capitalize', () => {
    it('should capitalize first letter of lowercase string', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    it('should handle already capitalized string', () => {
      expect(capitalize('Hello')).toBe('Hello');
    });

    it('should handle single character', () => {
      expect(capitalize('a')).toBe('A');
    });

    it('should return empty string unchanged', () => {
      expect(capitalize('')).toBe('');
    });

    it('should handle whitespace-only string', () => {
      expect(capitalize('   ')).toBe('   ');
    });

    it('should capitalize mixed case correctly', () => {
      expect(capitalize('hELLO')).toBe('Hello');
    });
  });
});
