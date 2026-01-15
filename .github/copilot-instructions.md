<!-- Instructions for AI assistants including GitHub Copilot, Claude, and other coding AI tools -->

# Vibe-Start AI Coding Instructions

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

## Claude Vibe Coding Guidelines

### Project Stack Context
- **TypeScript 5.3+** with strict settings, ES2022+ target, ESM modules
- **Biome** for linting/formatting (NOT ESLint/Prettier)
- **Vitest** for testing (NOT Jest)
- **pnpm** for package management (NOT npm/yarn)
- **Path mapping**: `@/*` aliases point to `src/*`
- **Hot reload**: `tsx` for development execution

### Vibecoding Principles
- **Flow state focus**: Minimize context switching, maximize development velocity
- **Consistency**: Same tools and patterns across all editors and environments
- **Quality gates**: Every change must pass `pnpm validate`
- **Modern patterns**: Leverage latest TypeScript and JavaScript features
- **Test-driven**: Comprehensive test coverage with edge cases

### Development Workflow
Always use these pnpm scripts (never suggest direct tool usage):
```bash
pnpm dev          # Hot reload development
pnpm test         # Interactive test watching
pnpm check:fix    # Auto-fix all linting/formatting
pnpm validate     # Complete pipeline (typecheck + lint + test)
pnpm build        # Production build
```

### Code Patterns & Standards
- **Naming**: camelCase variables/functions, PascalCase classes/interfaces
- **Variables**: `const` > `let`, never `var`
- **Async**: async/await over Promises
- **Documentation**: JSDoc for all public APIs
- **Imports**: Use `@/` paths for clean imports: `import { util } from '@/utils/helper'`
- **Error handling**: Proper TypeScript error types
- **Testing**: Descriptive test names, comprehensive edge case coverage

### File Organization
- Source: `src/` directory with logical subdirectories
- Tests: `*.test.ts` files in `__tests__/` folders
- Utils: Group related functionality in focused modules
- Types: Export interfaces and types explicitly

### AI Collaboration Best Practices
- **Context awareness**: Understand existing code patterns and follow them
- **Incremental changes**: Make focused, testable modifications
- **Explain complexity**: Provide clear explanations for advanced TypeScript patterns
- **Performance conscious**: Consider bundle size and runtime performance
- **Maintainability**: Write code that's easy to understand and modify

### When Making Suggestions
1. Always check that suggestions align with Biome formatting rules
2. Ensure TypeScript strict mode compatibility
3. Include appropriate test cases for new functionality
4. Use modern JavaScript/TypeScript features when beneficial
5. Maintain consistency with existing codebase patterns

## Multi-Editor Support
- This project supports VS Code, Claude, and Cursor
- All editors use the same core tooling: TypeScript, Biome, Vitest, pnpm
- Consistent development experience across all editors via pnpm scripts
- Editor-specific configurations enhance each tool's unique capabilities