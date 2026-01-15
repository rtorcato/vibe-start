/**
 * Main entry point for the TypeScript vibecoding project
 */

import { capitalize } from '@/utils/string';

/**
 * Greets a person with a personalized message
 * @param name - The name of the person to greet
 * @returns A greeting message
 */
export function greet(name: string): string {
  if (!name.trim()) {
    throw new Error('Name cannot be empty');
  }
  return `Hello, ${capitalize(name)}! Welcome to vibecoding! 🚀`;
}

/**
 * Adds two numbers together
 * @param a - First number
 * @param b - Second number
 * @returns The sum of a and b
 */
export function add(a: number, b: number): number {
  return a + b;
}

// Main execution
if (process.argv[1] === new URL(import.meta.url).pathname) {
  console.log(greet('Vibecoder'));
  console.log(`2 + 3 = ${add(2, 3)}`);
}
