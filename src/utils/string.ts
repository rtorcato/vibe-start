/**
 * Utility functions for common operations
 */

/**
 * Checks if a string is empty or contains only whitespace
 * @param str - The string to check
 * @returns True if string is empty or whitespace only
 */
export function isEmpty(str: string): boolean {
  return str.trim().length === 0;
}

/**
 * Capitalizes the first letter of a string
 * @param str - The string to capitalize
 * @returns The string with first letter capitalized
 */
export function capitalize(str: string): string {
  if (isEmpty(str)) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
