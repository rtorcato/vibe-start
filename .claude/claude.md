# Claude Project Configuration

Welcome to **vibe-start** - a modern TypeScript template optimized for AI-assisted vibecoding!

## Project Overview

**vibe-start** is designed to provide the ultimate TypeScript development experience with seamless AI integration across VS Code, Claude, and Cursor. This template emphasizes:

- **Flow state development** - Minimal context switching, maximum velocity
- **Zero configuration** - Works out of the box with sensible defaults  
- **Modern patterns** - Latest TypeScript and JavaScript features
- **AI-first approach** - Optimized for AI-assisted development

## Technology Stack

### Core Technologies
- **TypeScript 5.3+** with strict mode and ES2022+ features
- **Biome** for ultra-fast linting and formatting (replaces ESLint + Prettier)
- **Vitest** for modern testing with native TypeScript support  
- **pnpm** for efficient package management
- **ESM modules** exclusively (import/export syntax)

### Development Tools
- **tsx** for hot reload TypeScript execution
- **Path mapping** `@/*` → `src/*` for clean imports
- **Husky** for pre-commit validation hooks
- **GitHub Actions** for CI/CD pipeline

## Vibecoding Principles

### Flow State Focus
- Maintain consistent patterns across the entire codebase
- Use AI to accelerate development without breaking mental models
- Minimize context switching between tools and files
- Prioritize readable, maintainable code over clever abstractions

### Quality Gates
Every change must pass the comprehensive validation pipeline:

```bash
pnpm validate  # Runs: typecheck + lint + test
```

This ensures:
- ✅ TypeScript strict mode compliance
- ✅ Biome formatting and linting rules
- ✅ Comprehensive test coverage
- ✅ No regressions in existing functionality

### Modern Development Practices
- Leverage latest TypeScript features (satisfies, template literals, utility types)
- Use async/await over Promises for better readability
- Prefer composition over inheritance
- Write comprehensive tests with edge case coverage
- Document public APIs with JSDoc comments

## Development Workflow

### Essential Commands

```bash
# Development
pnpm dev              # Hot reload development with tsx
pnpm dev:watch        # Development with file watching

# Testing  
pnpm test             # Interactive test watching with Vitest
pnpm test:run         # Run all tests once
pnpm test:ui          # Run tests with interactive UI
pnpm test:coverage    # Generate test coverage reports

# Code Quality
pnpm check:fix        # Auto-fix all formatting and linting issues
pnpm validate         # Complete validation pipeline
pnpm typecheck        # TypeScript type checking only

# Building
pnpm build            # Production build
pnpm clean            # Clean build artifacts
```

### File Organization

```
src/
├── index.ts              # Main entry point with example functions
├── utils/                # Utility functions and helpers
│   ├── string.ts         # String manipulation utilities  
│   └── __tests__/        # Utility-specific tests
└── __tests__/            # Main application tests
```

## Code Standards & Patterns

### Naming Conventions
- **camelCase**: variables, functions, properties
- **PascalCase**: classes, interfaces, types, components
- **SCREAMING_SNAKE_CASE**: constants, environment variables

### TypeScript Patterns

```typescript
// Modern function with comprehensive JSDoc
/**
 * Validates and formats an email address
 * @param email - Raw email string to validate
 * @returns Formatted email or throws validation error
 * @throws {Error} When email format is invalid
 */
export function validateEmail(email: string): string {
  if (!email.trim()) {
    throw new Error('Email cannot be empty');
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error('Invalid email format');
  }
  
  return email.toLowerCase().trim();
}

// Use path mapping for clean imports
import { capitalize } from '@/utils/string';
import { UserType } from '@/types/user';

// Prefer Result types for error handling
type Result<T, E = Error> = 
  | { success: true; data: T }
  | { success: false; error: E };

export async function fetchUserData(id: string): Promise<Result<UserType>> {
  try {
    const user = await api.getUser(id);
    return { success: true, data: user };
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error : new Error(String(error))
    };
  }
}
```

### Testing Patterns

```typescript
describe('validateEmail', () => {
  it('should format valid email correctly', () => {
    // Arrange
    const email = '  TEST@EXAMPLE.COM  ';
    
    // Act
    const result = validateEmail(email);
    
    // Assert
    expect(result).toBe('test@example.com');
  });

  it('should throw error for invalid email format', () => {
    // Test edge cases and error conditions
    expect(() => validateEmail('')).toThrow('Email cannot be empty');
    expect(() => validateEmail('invalid')).toThrow('Invalid email format');
    expect(() => validateEmail('test@')).toThrow('Invalid email format');
  });
});
```

## AI Collaboration Guidelines

### Centralized Skills Framework
This project uses centralized AI skills in the [`.ai/skills/`](../.ai/skills/) directory:
- **[Core Standards](../.ai/skills/core.json)** - Naming conventions, imports, quality gates
- **[TypeScript Functions](../.ai/skills/typescript/functions.json)** - Function templates and patterns  
- **[TypeScript Interfaces](../.ai/skills/typescript/interfaces.json)** - Interface and type definitions
- **[Vitest Testing](../.ai/skills/testing/vitest.json)** - Comprehensive testing patterns
- **[Workflow Commands](../.ai/skills/workflow/commands.json)** - Standardized pnpm scripts

This centralized `.ai` directory serves as the single source of truth for AI behavior across VS Code Copilot, Claude, and Cursor.

### Working with Claude
Claude excels at:
- **Architectural guidance** - Project structure and design decisions
- **Complex refactoring** - Multi-file changes and improvements
- **Pattern recognition** - Understanding and following existing code conventions
- **Test generation** - Creating comprehensive test suites with edge cases
- **Documentation** - Writing clear JSDoc comments and explanations

### Code Generation Best Practices
When asking Claude to generate code:

1. **Be specific about requirements**:
   - Include TypeScript types and interfaces needed
   - Specify test coverage requirements
   - Mention any edge cases to handle

2. **Reference existing patterns**:
   - Point to similar functions in the codebase
   - Ask Claude to follow established conventions
   - Request consistency with current architecture

3. **Request complete solutions**:
   - Ask for implementation + tests + documentation
   - Include error handling and validation
   - Ensure path mapping usage for imports

4. **Validate all suggestions**:
   - Always run `pnpm validate` after implementing
   - Check that new code follows TypeScript strict mode
   - Verify tests cover edge cases and error conditions

### Example Prompts

**Good prompts for Claude:**
- "Create a utility function for deep cloning objects with TypeScript types, following our existing patterns in `@/utils/string.ts`, including comprehensive tests"
- "Refactor this function to use our Result type pattern and add proper error handling with tests"
- "Add JSDoc documentation to this function following our project standards"

**Less effective prompts:**
- "Write a function" (too vague)
- "Fix this code" (no context about standards)
- "Make it better" (no specific requirements)

## Multi-Editor Consistency

### Shared Standards
- Same code patterns work across VS Code, Claude, and Cursor
- Identical pnpm scripts ensure consistent developer experience
- Biome configuration maintains formatting across all editors
- TypeScript configuration provides universal type checking

### Platform Integration
- **VS Code**: Uses `.vscode/` settings and tasks + GitHub Copilot
- **Claude**: Uses this `.claude/` directory for project context
- **Cursor**: Uses `.cursorrules` and `cursor-settings.json`

All platforms share the core configuration in `.github/copilot-instructions.md` for maximum consistency.

## Template Philosophy

### Purpose
This is a **template project**, which means:
- Code should serve as examples of best practices
- Patterns should be reusable and well-documented
- New additions should enhance the template's value
- Maintain clean, exemplary code that teaches good practices

### Success Metrics
- **Zero configuration**: New projects work immediately
- **AI acceleration**: AI assistance feels natural and productive
- **Learning value**: Code serves as educational examples
- **Maintainability**: Easy to understand, modify, and extend

---

## Quick Reference

### Key Files
- **`package.json`** - Project configuration and scripts
- **`tsconfig.json`** - TypeScript configuration with path mapping
- **`biome.json`** - Linting and formatting rules
- **`vitest.config.ts`** - Testing configuration
- **`.github/copilot-instructions.md`** - Shared AI instructions

### Validation Command
```bash
pnpm validate  # ← Run this before every commit
```

### Getting Help
- Check existing code patterns in `src/` for examples
- Review tests in `__tests__/` folders for usage patterns  
- Run `pnpm validate` to catch issues early
- Use Claude for architectural guidance and complex refactoring

Happy vibecoding! 🚀