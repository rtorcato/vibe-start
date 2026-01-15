<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# TypeScript Vibecoding Project Instructions

## Project Overview
This is a TypeScript project set up for vibecoding with Biome, pnpm, and Vitest for optimal development experience.

## Development Guidelines
- Use TypeScript for all source code with ESM modules
- Follow Biome's linting and formatting rules
- Write tests using Vitest
- Use modern ES2022+ features
- Use pnpm for all package management
- Maintain clean, readable code structure

## Code Style
- Use camelCase for variables and functions
- Use PascalCase for classes and interfaces
- Prefer const over let, avoid var
- Use async/await over Promises where possible
- Add JSDoc comments for public APIs

## Testing
- Write unit tests for all functions using Vitest
- Use descriptive test names
- Aim for high test coverage
- Mock external dependencies

## Tools & Commands
- `pnpm check:fix` - Fix all linting and formatting issues
- `pnpm test:run` - Run all tests once
- `pnpm dev` - Start development mode
- `pnpm build` - Build for production

## Git Workflow
- Create feature branches from main
- Use conventional commits
- Submit pull requests for code review
- Ensure CI/CD passes before merging