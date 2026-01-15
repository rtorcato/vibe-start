# Multi-Editor Development Guide

This template is designed to provide an excellent development experience across VS Code, Claude (AI assistant), and Cursor (AI-powered IDE). All editors share the same core tooling while providing editor-specific optimizations.

## Core Tooling (Shared Across All Editors)

### Stack Overview
- **TypeScript 5.3+** - Type-safe development with modern ES2022+ features
- **Biome** - Fast linting, formatting, and import organization (replaces ESLint + Prettier)
- **Vitest** - Modern testing framework with native TypeScript support
- **pnpm** - Efficient package manager with strict dependency management
- **tsx** - TypeScript execution with hot reload capabilities

### Universal Commands
All editors can use these pnpm scripts for consistent experience:

```bash
# Development
pnpm dev              # Start development with hot reload
pnpm dev:watch        # Development with file watching

# Testing
pnpm test             # Run tests in watch mode
pnpm test:run         # Run tests once
pnpm test:ui          # Run tests with interactive UI
pnpm test:coverage    # Run tests with coverage report

# Code Quality
pnpm check:fix        # Fix all linting/formatting issues
pnpm validate         # Full validation (type check, lint, test)

# Building
pnpm build            # Build for production
pnpm clean            # Clean build artifacts
```

## VS Code Configuration

### Features Enabled
- **Biome integration** - Format on save with import organization
- **TypeScript inlay hints** - Parameter names, variable types, return types
- **Semantic highlighting** - Enhanced syntax highlighting
- **Vitest integration** - Test discovery and execution
- **Optimized file watching** - Excludes node_modules, dist, coverage

### Recommended Extensions
The template includes curated extension recommendations in [.vscode/extensions.json](.vscode/extensions.json):
- Biome (linting and formatting)
- Vitest (testing)
- GitHub Copilot (AI assistance)
- TypeScript Importer (auto-imports)

### Tasks and Debugging
Pre-configured tasks in [.vscode/tasks.json](.vscode/tasks.json):
- Development server
- Test runner
- Build and validation
- Debug configurations for TypeScript and tests

## Cursor Configuration

### AI-Powered Features
- **Context-aware completions** - Understands your project structure and conventions
- **Natural language to code** - Describe functionality and get TypeScript implementation
- **Intelligent refactoring** - AI-assisted code improvements and modernization
- **Chat integration** - Claude 3.5 Sonnet for complex problem-solving

### Configuration Files
- [.cursorrules](.cursorrules) - Project context and coding standards for AI
- [cursor-settings.json](cursor-settings.json) - IDE settings and preferences

### Best Practices
1. **Use descriptive prompts** - "Create a utility function that validates email addresses with TypeScript types"
2. **Reference project patterns** - Cursor understands your existing code style and patterns
3. **Leverage AI for tests** - Generate comprehensive test suites with edge cases
4. **Code reviews** - Use AI to review and suggest improvements before committing

## Claude Integration

### GitHub Copilot Instructions
The [.github/copilot-instructions.md](.github/copilot-instructions.md) file provides:
- Project context and technology stack
- Coding standards and best practices
- Preferred patterns and anti-patterns
- Multi-editor workflow guidance

### Effective Usage
1. **Project-aware suggestions** - Claude understands your TypeScript configuration and tooling
2. **Consistent code style** - Follows Biome formatting and project conventions
3. **Modern patterns** - Suggests ES2022+ features and TypeScript best practices
4. **Testing integration** - Generates Vitest-compatible tests with proper imports

## Editor-Specific Features

### VS Code Unique Benefits
- **Integrated debugger** - Step-through debugging for TypeScript and tests
- **Task runner** - Built-in task execution and monitoring
- **Extension ecosystem** - Rich marketplace for additional functionality
- **Git integration** - Visual source control management

### Cursor Unique Benefits
- **AI-first development** - Natural language programming and explanations
- **Context understanding** - AI knows your entire codebase and patterns
- **Instant refactoring** - AI-powered code transformations
- **Multi-file editing** - AI can work across multiple files simultaneously

### Claude Unique Benefits
- **Deep reasoning** - Complex problem-solving and architectural guidance
- **Code explanations** - Detailed explanations of TypeScript patterns and decisions
- **Best practices** - Industry-standard recommendations and security considerations
- **Documentation** - AI-generated docs and comments

## Troubleshooting

### Formatter Conflicts
If you see conflicting formatters:
1. Ensure Biome is set as default formatter in your editor
2. Disable other formatters (Prettier, ESLint formatting rules)
3. Run `pnpm check:fix` to apply consistent formatting

### TypeScript Errors
1. Ensure TypeScript version matches project requirements
2. Restart TypeScript language server in your editor
3. Run `pnpm validate` to check for type errors
4. Clear `node_modules` and run `pnpm install` if issues persist

### Test Integration Issues
1. Verify Vitest extension is installed and enabled
2. Check that `vitest.commandLine` points to `pnpm exec vitest`
3. Ensure tests use Vitest globals (describe, it, expect)
4. Run `pnpm test:run` to verify test configuration

### AI Assistant Issues
1. **VS Code/Claude**: Check GitHub Copilot extension status and authentication
2. **Cursor**: Verify Claude 3.5 Sonnet model is selected in settings
3. Ensure project instructions are properly loaded from configuration files
4. Restart editor if AI features become unresponsive

## Migration from Other Editors

### From WebStorm/IntelliJ
- Import TypeScript configuration
- Use equivalent shortcuts for debugging and refactoring
- Install recommended extensions for similar functionality

### From Vim/Neovim
- Consider Vim extension for VS Code or Cursor
- Use command palette equivalents for common operations
- Leverage AI features for faster navigation and editing

### From Atom/Sublime
- Import key bindings and themes
- Set up similar file navigation patterns
- Utilize integrated terminal and task runner features

## Performance Optimization

### File Watching
Optimized exclusions prevent unnecessary file watching:
- `node_modules/` - Dependencies don't need watching
- `dist/` - Build output
- `coverage/` - Test coverage reports
- `.git/` - Version control metadata

### Memory Usage
- TypeScript compiler uses incremental compilation
- Biome provides fast linting without heavy AST parsing
- Vitest runs tests efficiently with minimal overhead

### Editor Responsiveness
- Semantic highlighting improves without performance cost
- Inlay hints provide information without cluttering
- Auto-imports work quickly with proper TypeScript configuration

---

This multi-editor approach ensures you can work effectively regardless of your preferred development environment while maintaining consistent code quality and development practices.