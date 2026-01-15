<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Vibe-Start Project Instructions

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

## AI Assistant Guidelines
- Always use the project's pnpm scripts rather than suggesting direct tool usage
- When suggesting code changes, ensure they pass: `pnpm run validate`
- For testing, use Vitest's globals (describe, it, expect) - already imported
- Suggest modern TypeScript patterns (satisfies operator, template literal types)
- Prioritize type safety with exactOptionalPropertyTypes and noUncheckedIndexedAccess
- Use ESM imports/exports exclusively, never CommonJS
- Recommend Biome for all formatting and linting needs

## Multi-Editor Support
- This project supports VS Code, Claude, and Cursor
- All editors use the same core tooling: TypeScript, Biome, Vitest, pnpm
- Consistent development experience across all editors via pnpm scripts
- Editor-specific configurations enhance each tool's unique capabilities