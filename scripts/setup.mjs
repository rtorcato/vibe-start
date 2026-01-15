#!/usr/bin/env node

/**
 * Quick setup script for vibecoding
 * Runs all the setup steps needed for optimal development flow
 */

import { execSync } from 'child_process';
import { existsSync } from 'fs';

console.log('🚀 Setting up vibecoding environment...\n');

try {
  // Check if pnpm is available
  execSync('pnpm --version', { stdio: 'pipe' });
  console.log('✅ pnpm detected');
} catch {
  console.log('❌ pnpm not found. Please install pnpm globally: npm install -g pnpm');
  process.exit(1);
}

// Install dependencies if not already done
if (!existsSync('node_modules')) {
  console.log('📦 Installing dependencies...');
  execSync('pnpm install', { stdio: 'inherit' });
  console.log('✅ Dependencies installed');
} else {
  console.log('✅ Dependencies already installed');
}

// Setup husky if not already done
if (!existsSync('.husky/_/husky.sh')) {
  console.log('🪝 Setting up git hooks...');
  execSync('pnpm exec husky init', { stdio: 'inherit' });
  console.log('✅ Git hooks configured');
} else {
  console.log('✅ Git hooks already configured');
}

// Run validation to ensure everything works
console.log('🔍 Running validation checks...');
execSync('pnpm run validate', { stdio: 'inherit' });

console.log('\n🎉 Vibecoding setup complete!');
console.log('\n🚀 Quick start commands:');
console.log('  pnpm dev:watch     - Start development with auto-restart');
console.log('  pnpm test          - Run tests in watch mode');
console.log('  pnpm test:ui       - Open Vitest UI');
console.log('  pnpm check:fix     - Fix all code quality issues');
console.log('\n💡 Press Ctrl+Shift+P in VS Code and run "Tasks: Run Task" for quick actions');