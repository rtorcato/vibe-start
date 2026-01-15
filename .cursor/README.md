# Cursor IDE Configuration

Welcome to **vibe-start** optimized for Cursor - the AI-first code editor!

## Overview

Cursor is designed around AI-native development, providing natural language programming with Claude 3.5 Sonnet integration. This configuration maximizes your vibecoding experience with intelligent code completion, natural language editing, and seamless AI assistance.

## File Structure

```
.cursor/
├── README.md              # This documentation
├── .cursorrules           # AI behavior and coding standards
└── cursor-settings.json   # IDE-specific settings and preferences
```

## Configuration Files

### `.cursorrules`
Defines AI behavior, coding standards, and project-specific guidelines:
- **TypeScript patterns** - Modern ES2022+ with strict mode
- **Biome integration** - Formatting and linting standards  
- **Vitest testing** - Test generation and patterns
- **Vibecoding principles** - Flow state and consistency rules

### `cursor-settings.json` 
IDE settings for optimal development experience:
- **AI model configuration** - Claude 3.5 Sonnet setup
- **Auto-completion settings** - Intelligent suggestions
- **File watching** - Hot reload and change detection
- **Extension preferences** - Recommended plugins and settings

## AI-First Development

### Natural Language Programming
Cursor excels at converting natural language to code:

```
// Natural language → Code
"Create a utility function that validates email addresses with proper TypeScript types"
// Cursor generates complete implementation with types, validation, and tests
```

### Predictive Editing
- **Tab completion** - AI predicts your next code segments
- **Multi-line editing** - Generate entire functions from comments
- **Refactoring assistance** - Intelligent code improvements
- **Import optimization** - Automatic dependency management

### Chat Interface
Use `Cmd+L` (macOS) or `Ctrl+L` (Windows/Linux) for:
- **Architecture questions** - "How should I structure this feature?"
- **Code explanations** - "Explain this TypeScript pattern"
- **Debug assistance** - "Why is this test failing?"
- **Optimization guidance** - "How can I improve performance here?"

## Vibecoding with Cursor

### Flow State Optimization
1. **Minimal context switching** - AI handles routine coding tasks
2. **Predictive assistance** - Code completion before you finish thinking
3. **Intelligent debugging** - AI suggests fixes for errors
4. **Pattern recognition** - Learns your coding style and preferences

### Quality Assurance
- **Auto-formatting** - Biome integration ensures consistent style
- **Type checking** - Real-time TypeScript validation
- **Test generation** - AI creates comprehensive test suites
- **Error prevention** - Suggests fixes before compilation

## Best Practices

### Effective Prompting
1. **Be specific about context**:
   ```
   // Good: "Create a React hook for API calls using our Result type pattern"
   // Better: "Create a React hook that fetches user data, returns Result<User>, and handles loading states"
   ```

2. **Reference existing patterns**:
   ```
   // "Follow the same pattern as validateEmail() in @/utils/string.ts"
   ```

3. **Request complete solutions**:
   ```
   // "Include TypeScript types, error handling, and comprehensive tests"
   ```

### Code Generation Workflow
1. **Comment your intent** - Cursor generates implementation
2. **Use Tab completion** - Accept AI suggestions efficiently  
3. **Iterate with chat** - Refine complex logic through conversation
4. **Validate with tools** - Always run `pnpm validate` after changes

### Multi-File Operations
Cursor understands your entire codebase:
- **Cross-file refactoring** - Updates imports and dependencies
- **Pattern consistency** - Maintains coding standards across files
- **Architecture awareness** - Suggests improvements to project structure

## Integration with Project Stack

### TypeScript Development
- **Strict mode compliance** - Ensures type safety
- **Modern features** - Leverages latest TypeScript capabilities
- **Path mapping** - Uses `@/*` aliases for clean imports
- **Interface generation** - Creates types from usage patterns

### Testing Integration
- **Vitest patterns** - Generates modern test syntax
- **Edge case coverage** - AI suggests comprehensive test scenarios
- **Mock generation** - Creates test doubles and fixtures
- **Test-driven development** - Implements tests alongside features

### Build System
- **pnpm integration** - Uses project scripts consistently
- **Hot reload** - Works with tsx for development
- **Biome formatting** - Automatic code styling
- **Validation pipeline** - Integrates with quality gates

## Troubleshooting

### AI Model Issues
- Verify Claude 3.5 Sonnet is selected in Cursor settings
- Check API quota and authentication status
- Restart Cursor if AI responses seem degraded

### Performance Optimization
- Enable file watching for better responsiveness
- Configure exclusions for node_modules and build outputs
- Use workspace-specific settings for large projects

### Common Issues
1. **Slow completions** - Check internet connection and API status
2. **Inconsistent formatting** - Ensure Biome extension is enabled
3. **Type errors** - Run `pnpm typecheck` to validate TypeScript
4. **Test failures** - Use `pnpm test:run` to check all tests

## Quick Reference

### Essential Shortcuts
- `Cmd/Ctrl + L` - Open AI chat
- `Cmd/Ctrl + K` - Generate code from comment
- `Tab` - Accept AI completion
- `Cmd/Ctrl + Shift + L` - Generate in new file

### Key Commands
```bash
pnpm validate    # Full validation pipeline
pnpm dev         # Start development with hot reload
pnpm test        # Run tests in watch mode
pnpm check:fix   # Auto-fix formatting and linting
```

### Integration Points
- **Shared standards**: Uses `.github/copilot-instructions.md` for consistency
- **Multi-editor support**: Works alongside VS Code and Claude
- **Quality gates**: Integrates with pnpm validation pipeline

---

Happy vibecoding with Cursor! 🚀⚡