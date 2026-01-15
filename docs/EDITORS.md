# Multi-Editor Development Guide

This template is designed to provide an excellent development experience across VS Code, Claude (AI assistant), and Cursor (AI-powered IDE). All editors share the same core tooling while providing editor-specific optimizations.

## AI-Powered Development Across Platforms

### Unified AI Experience
This template provides consistent AI assistance across three major platforms:

**🚀 VS Code + GitHub Copilot**
- Real-time code completion and suggestions
- Chat interface for complex problems
- Seamless IDE integration with debugging

**🧠 Claude (Anthropic)**  
- Deep architectural reasoning and guidance
- Comprehensive code generation with explanations
- Multi-file understanding and refactoring
- Organized project context in `.claude/` directory

**⚡ Cursor (AI-First IDE)**
- Natural language to code translation
- Predictive editing and intelligent completions
- AI-native development experience
- Organized configuration in `.cursor/` directory

### Shared AI Skills
All platforms use identical project understanding:
- TypeScript patterns and modern ES2022+ features
- Biome formatting and linting standards
- Vitest testing patterns with comprehensive coverage
- pnpm workflow and validation commands

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
- **[.cursor/](.cursor/)** - Organized Cursor configuration directory
- **[.cursor/.cursorrules](.cursor/.cursorrules)** - Project context and coding standards for AI
- **[.cursor/cursor-settings.json](.cursor/cursor-settings.json)** - IDE settings and preferences
- **[.cursor/README.md](.cursor/README.md)** - Comprehensive Cursor usage guide

### Best Practices
1. **Use descriptive prompts** - "Create a utility function that validates email addresses with TypeScript types"
2. **Reference project patterns** - Cursor understands your existing code style and patterns
3. **Leverage AI for tests** - Generate comprehensive test suites with edge cases
4. **Code reviews** - Use AI to review and suggest improvements before committing

## Claude Integration

### Configuration & Setup
Claude uses dedicated configuration files in the [.claude/](.claude/) directory:
- **[.claude/claude.md](.claude/claude.md)** - Comprehensive project guide and AI collaboration patterns
- **[.claude/.claude_project](.claude/.claude_project)** - Project metadata and development rules
- **Shared configuration** - Also references [.github/copilot-instructions.md](.github/copilot-instructions.md) for multi-platform consistency

This organized structure provides:
- **Complete project context** - TypeScript stack, tooling, and patterns
- **Vibecoding principles** - Flow state focus and development velocity
- **Code standards** - Biome formatting, naming conventions, and best practices
- **Development workflow** - pnpm scripts and validation pipeline
- **AI collaboration guidelines** - Specific patterns for working with Claude

### Vibe Coding with Claude
Claude is optimized for "vibecoding" - maintaining flow state through:

1. **Context Awareness**
   - Understands the entire project structure and conventions
   - Knows about TypeScript config, Biome rules, and Vitest setup
   - Follows established patterns without breaking consistency

2. **Development Workflow**
   - Always suggests using `pnpm` scripts (dev, test, validate, etc.)
   - Ensures code passes validation before suggesting commits
   - Provides modern TypeScript patterns and ES2022+ features

3. **Quality Focus**
   - Suggests comprehensive test coverage with edge cases
   - Maintains strict TypeScript compliance
   - Follows Biome formatting automatically

### Effective Claude Usage
1. **Describe intent clearly** - "Create a utility that validates emails with TypeScript types"
2. **Reference existing patterns** - Claude understands your codebase and will follow conventions
3. **Ask for explanations** - Get detailed explanations of complex TypeScript patterns
4. **Leverage for architecture** - Get guidance on project structure and best practices
5. **Code reviews** - Ask Claude to review and suggest improvements

### Claude Best Practices
- **Be specific about requirements** - Include TypeScript types, test requirements, etc.
- **Ask for complete solutions** - Claude can provide code + tests + documentation
- **Request explanations** - Understanding complex patterns improves your learning
- **Validate suggestions** - Always run `pnpm validate` after implementing suggestions
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

## Multi-Editor Consistency

### Organized Configuration Structure
Each editor has its own organized configuration directory:
- **VS Code**: `.vscode/` for settings, tasks, and extension recommendations
- **Claude**: `.claude/` for AI project context and collaboration patterns  
- **Cursor**: `.cursor/` for AI behavior rules and IDE preferences

### Shared Standards
- **Core tooling**: Same TypeScript, Biome, Vitest, and pnpm across all platforms
- **Validation pipeline**: Identical `pnpm validate` ensures consistent quality
- **Project patterns**: Shared coding standards via `.github/copilot-instructions.md`
- **Development workflow**: Same scripts and build processes regardless of editor

### Platform-Specific Benefits
While maintaining consistency, each editor leverages its unique strengths:
- **VS Code**: Rich debugging, extension ecosystem, integrated Git
- **Claude**: Deep reasoning, architectural guidance, comprehensive explanations
- **Cursor**: AI-first development, natural language programming, predictive editing

---

This multi-editor approach ensures you can work effectively regardless of your preferred development environment while maintaining consistent code quality and development practices.