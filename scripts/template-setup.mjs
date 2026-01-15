# Template Setup Script
# This script helps initialize a new project from the vibe-start template

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { execSync } from 'node:child_process';

const projectName = process.argv[2] || 'my-project';
const projectDescription = process.argv[3] || 'A TypeScript project built with vibe-start template';
const authorName = process.argv[4] || '';
const authorEmail = process.argv[5] || '';

console.log('🚀 Setting up your new vibecoding project...');

// Update package.json
const packageJsonPath = join(process.cwd(), 'package.json');
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));

packageJson.name = projectName;
packageJson.description = projectDescription;
if (authorName) {
  packageJson.author = authorEmail ? `${authorName} <${authorEmail}>` : authorName;
}

// Reset version and remove template-specific fields
packageJson.version = '0.1.0';
delete packageJson.homepage;
delete packageJson.repository;
delete packageJson.bugs;

writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

// Update README.md
const readmePath = join(process.cwd(), 'README.md');
let readme = readFileSync(readmePath, 'utf8');

// Replace title and description
readme = readme.replace('# Vibe-Start', `# ${projectName}`);
readme = readme.replace(
  'A modern TypeScript project setup with Biome, pnpm, and Vitest for optimal vibecoding experience across VS Code, Claude, and Cursor.',
  projectDescription
);

writeFileSync(readmePath, readme);

// Clean up template-specific files
try {
  execSync('rm -f IMPLEMENTATION.md', { stdio: 'ignore' });
  execSync('rm -f scripts/template-setup.mjs', { stdio: 'ignore' });
} catch (error) {
  // Files might not exist, continue
}

console.log(`✅ Project "${projectName}" initialized successfully!`);
console.log('');
console.log('Next steps:');
console.log('1. Install dependencies: pnpm install');
console.log('2. Start development: pnpm dev');
console.log('3. Run tests: pnpm test');
console.log('4. See docs/EDITORS.md for multi-editor setup');
console.log('');
console.log('Happy vibecoding! 🎯');