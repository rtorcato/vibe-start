<!-- Instructions for AI assistants including GitHub Copilot, Claude, and other coding AI tools -->
<!-- Claude: This file serves as your project configuration and skills system -->
<!-- Claude also uses .claude/ directory for dedicated configuration -->
<!-- All AI systems reference .ai/skills/ for unified patterns and templates -->

# Vibe-Start AI Coding Instructions

## Project Overview
This is a TypeScript project set up for vibecoding with Biome, pnpm, and Vitest for optimal development experience.

## Vibecoding Principles
- **Flow state focus** - Minimize context switching, maximize development velocity
- **Zero configuration** - Works out of the box with sensible defaults
- **Modern patterns** - Latest TypeScript 5.3+ and ES2022+ features
- **Quality gates** - Every change must pass `pnpm validate`
- **Multi-editor consistency** - Same patterns across VS Code, Claude, and Cursor
- **AI-first approach** - Optimized for AI-assisted development

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
- `pnpm dev` - Start development with hot reload
- `pnpm dev:watch` - Development with file watching
- `pnpm test` - Interactive test watching with Vitest
- `pnpm test:run` - Run all tests once
- `pnpm test:ui` - Run tests with interactive UI
- `pnpm test:coverage` - Generate test coverage reports
- `pnpm check:fix` - Fix all linting and formatting issues
- `pnpm validate` - Complete validation pipeline
- `pnpm typecheck` - TypeScript type checking only
- `pnpm build` - Build for production
- `pnpm clean` - Clean build artifacts

## Git Workflow
- Create feature branches from main
- Use conventional commits
- Submit pull requests for code review
- Ensure CI/CD passes before merging

## AI Skills Framework
Reference the centralized skills in `.ai/skills/` for all code generation and assistance:

### Skill Categories
- **Core Standards** (`.ai/skills/core.json`) - Naming conventions, imports, quality gates, project structure
- **TypeScript Functions** (`.ai/skills/typescript/functions.json`) - Function templates, JSDoc patterns, validation
- **TypeScript Interfaces** (`.ai/skills/typescript/interfaces.json`) - Interface patterns, type definitions, best practices
- **Vitest Testing** (`.ai/skills/testing/vitest.json`) - Test structure, mocking, async testing, coverage
- **Workflow Commands** (`.ai/skills/workflow/commands.json`) - pnpm scripts, development workflow, quality gates

### Code Generation Rules
When generating code, ALWAYS reference these skills:

1. **Check `.ai/skills/core.json`** for naming conventions and import patterns
2. **Use `.ai/skills/typescript/functions.json`** templates for new functions with proper JSDoc
3. **Follow `.ai/skills/typescript/interfaces.json`** patterns for type definitions
4. **Apply `.ai/skills/testing/vitest.json`** patterns for comprehensive tests
5. **Reference `.ai/skills/workflow/commands.json`** for correct pnpm script usage

### Quality Standards
All AI-generated code must:
- Follow patterns defined in `.ai/skills/core.json`
- Use TypeScript templates from `.ai/skills/typescript/`
- Include tests using patterns from `.ai/skills/testing/vitest.json`
- Pass validation pipeline: `pnpm validate`

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

## AI Skills & Automated Workflows

### Code Generation Templates

#### TypeScript Function Template
```typescript
/**
 * [Brief description of function purpose]
 * @param [paramName] - [Parameter description]
 * @returns [Return value description]
 * @throws [Error conditions]
 */
export function [functionName]([params]: [types]): [ReturnType] {
  // Input validation
  if ([validation]) {
    throw new Error('[descriptive error message]');
  }
  
  // Implementation
  const result = [implementation];
  
  return result;
}
```

#### Comprehensive Test Template
```typescript
describe('[Component/Function Name]', () => {
  describe('[specific method/behavior]', () => {
    it('should [expected behavior] when [condition]', () => {
      // Arrange
      const input = [test data];
      
      // Act
      const result = [function call];
      
      // Assert
      expect(result).toBe([expected]);
    });

    it('should handle edge case: [specific edge case]', () => {
      // Edge case test
    });

    it('should throw error when [invalid condition]', () => {
      expect(() => [function call]).toThrow('[expected error]');
    });
  });
});
```

#### Error Handling Pattern
```typescript
type Result<T, E = Error> = 
  | { success: true; data: T }
  | { success: false; error: E };

export function [safeFunctionName](): Result<[DataType]> {
  try {
    const data = [implementation];
    return { success: true, data };
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error : new Error(String(error))
    };
  }
}
```

### Multi-Platform AI Integration
- **VS Code Copilot**: Uses this file for context and suggestions
- **Claude**: Reads this as primary project configuration and skills reference
- **Cursor**: Combines this with .cursorrules for comprehensive AI assistance
- **Consistency**: All platforms follow the same patterns and standards

### Automated Quality Checks
Before any code suggestion, ensure:
1. ✅ TypeScript strict mode compliance
2. ✅ Biome formatting rules followed
3. ✅ Tests included for new functionality
4. ✅ JSDoc comments for public APIs
5. ✅ Error handling implemented
6. ✅ Path mapping used for imports (@/*)

## Multi-Editor Support
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