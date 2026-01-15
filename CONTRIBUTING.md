# Contributing to vibe-start

Thank you for your interest in contributing to **vibe-start**! This template aims to provide the ultimate TypeScript development experience with AI-assisted vibecoding across multiple editors.

## 🎯 Project Vision

vibe-start is designed around these core principles:
- **Flow state focus** - Minimal context switching, maximum development velocity
- **Zero configuration** - Works out of the box with sensible defaults
- **Modern patterns** - Latest TypeScript and JavaScript features
- **Multi-editor consistency** - Same experience across VS Code, Claude, and Cursor
- **AI-first approach** - Optimized for AI-assisted development

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+** (LTS recommended)
- **pnpm 9+** (for package management)
- One of: **VS Code**, **Claude**, or **Cursor** (or all three!)

### Setup for Contributors
```bash
# Clone the repository
git clone https://github.com/yourusername/vibe-start.git
cd vibe-start

# Install dependencies
pnpm install

# Run initial validation
pnpm validate

# Start development
pnpm dev
```

## 📁 Project Structure

Understanding the project organization is crucial for contributors:

```
├── .ai/                    # 🧠 Centralized AI skills framework
│   ├── config.json        # AI framework configuration
│   ├── README.md          # AI framework documentation
│   └── skills/            # Organized skill definitions
│       ├── core.json      # Core coding standards
│       ├── typescript/    # TypeScript patterns
│       ├── testing/       # Testing frameworks
│       └── workflow/      # Development commands
├── .claude/               # 🤖 Claude-specific configuration
├── .cursor/               # ⚡ Cursor-specific configuration  
├── .vscode/               # 💻 VS Code settings and tasks
├── .github/               # 🔧 GitHub templates and workflows
├── docs/                  # 📖 Project documentation
├── src/                   # 💾 Source code and tests
└── scripts/               # 🛠️ Automation and setup scripts
```

## 🤝 Types of Contributions

### 1. **AI Skills & Patterns** (.ai/skills/)
Enhance the centralized AI framework that powers consistent behavior across all editors.

**Adding New Skills:**
```bash
# Create new skill category
mkdir .ai/skills/new-category

# Add skill definition
cat > .ai/skills/new-category/patterns.json << 'EOF'
{
  "meta": {
    "name": "New Skill Category",
    "description": "Description of what this skill provides"
  },
  "templates": {
    "examplePattern": {
      "pattern": "// Your pattern template here",
      "requirements": ["List", "of", "requirements"]
    }
  }
}
EOF

# Update .ai/README.md to document the new skill
# Test across all three editors (VS Code, Claude, Cursor)
```

### 2. **Multi-Editor Configuration**
Improve the experience for specific editors while maintaining consistency.

**Editor-Specific Contributions:**
- **.vscode/** - VS Code settings, tasks, debugging, extensions
- **.claude/** - Claude project context and collaboration patterns
- **.cursor/** - Cursor AI rules and IDE preferences

### 3. **Core Template Features**
Enhance the foundational TypeScript template functionality.

**Areas for Improvement:**
- **TypeScript Configuration** - Build settings, path mapping, strict mode
- **Testing Framework** - Vitest patterns, coverage, integration tests
- **Build Pipeline** - Hot reload, production builds, optimization
- **Quality Gates** - Biome rules, validation pipeline, pre-commit hooks

### 4. **Documentation & Guides**
Help users understand and adopt the template effectively.

**Documentation Needs:**
- **Migration Guides** - From other templates/frameworks
- **Best Practices** - Vibecoding patterns and workflows
- **Troubleshooting** - Common issues and solutions
- **Examples** - Real-world usage patterns

## 💻 Development Workflow

### Daily Development Commands
```bash
pnpm dev              # Start development with hot reload
pnpm test             # Run tests in watch mode
pnpm check:fix        # Auto-fix formatting and linting
pnpm validate         # Complete validation pipeline
```

### Quality Standards
All contributions must pass our comprehensive validation:

```bash
# REQUIRED before every commit
pnpm validate
```

This runs:
- **TypeScript compilation** - Strict mode type checking
- **Biome linting** - Code quality and style validation  
- **Vitest testing** - Comprehensive test execution
- **Coverage analysis** - Ensure adequate test coverage

### Git Workflow
1. **Fork** the repository to your GitHub account
2. **Create a feature branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** following the contribution guidelines
4. **Add comprehensive tests** for new functionality
5. **Run quality checks**:
   ```bash
   pnpm validate
   ```
6. **Commit with conventional format**:
   ```bash
   git commit -m "feat: add new AI skill for error handling patterns"
   ```
7. **Push to your fork** and **submit a pull request**

### Commit Message Format
Use [Conventional Commits](https://conventionalcommits.org/) format:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- **feat:** New features
- **fix:** Bug fixes
- **docs:** Documentation updates
- **style:** Code style changes (formatting, etc.)
- **refactor:** Code restructuring without behavior changes
- **test:** Test additions or modifications
- **chore:** Build process or auxiliary tool changes

**Examples:**
- `feat(ai): add Result type patterns to TypeScript skills`
- `fix(vscode): correct task runner configuration`
- `docs(editors): update Claude setup instructions`
- `refactor(skills): organize testing patterns by framework`

## 🧪 Testing Guidelines

### Test Requirements
- **Unit tests** for all new functions and utilities
- **Integration tests** for complex workflows
- **Multi-editor validation** for AI skills and configurations
- **Edge case coverage** including error conditions

### Test Structure
Follow the Vitest patterns defined in `.ai/skills/testing/vitest.json`:

```typescript
describe('ComponentName', () => {
  describe('specificMethod', () => {
    it('should expectedBehavior when condition', () => {
      // Arrange
      const input = testData;
      
      // Act
      const result = functionCall(input);
      
      // Assert
      expect(result).toBe(expected);
    });
    
    it('should handle edge case: specificCase', () => {
      // Edge case test
    });
    
    it('should throw error when invalidCondition', () => {
      expect(() => functionCall(invalid)).toThrow('Expected error');
    });
  });
});
```

### Testing AI Skills
When adding new AI skills, validate across all supported editors:

1. **VS Code + GitHub Copilot** - Test code generation and suggestions
2. **Claude** - Verify project understanding and pattern following  
3. **Cursor** - Check AI behavior and natural language programming

## 🎨 Code Style Guidelines

### TypeScript Standards
Follow the patterns in `.ai/skills/core.json`:

- **Naming:** camelCase variables, PascalCase classes/interfaces
- **Imports:** Use `@/*` path mapping for clean imports
- **Types:** Explicit return types, strict mode compliance
- **Documentation:** JSDoc comments for public APIs

### Modern JavaScript Features
Leverage ES2022+ features:
- **Optional chaining:** `user?.profile?.name`
- **Nullish coalescing:** `value ?? defaultValue`
- **Template literals:** Advanced string templating
- **Async/await:** Preferred over Promise chains

### Error Handling
Use Result types for business logic errors:

```typescript
type Result<T, E = Error> = 
  | { success: true; data: T }
  | { success: false; error: E };
```

## 🔍 Code Review Process

### What We Look For
- **Quality:** Code passes all validation checks
- **Consistency:** Follows established patterns and conventions
- **Testing:** Comprehensive test coverage with edge cases
- **Documentation:** Clear explanations for complex functionality
- **Multi-Editor Impact:** Consideration for all supported editors

### Review Criteria
1. **Functional Requirements:** Does it solve the intended problem?
2. **Code Quality:** Is it readable, maintainable, and well-structured?
3. **Performance:** Are there any performance considerations?
4. **Security:** Does it introduce any security concerns?
5. **Compatibility:** Works across all supported editors and environments?

## 🆘 Getting Help

### Resources
- **Documentation:** Check [docs/](docs/) directory
- **AI Skills Reference:** See [.ai/README.md](.ai/README.md)
- **Editor Guides:** Read [docs/EDITORS.md](docs/EDITORS.md)
- **Examples:** Review existing code in [src/](src/) directory

### Communication
- **Issues:** Use GitHub Issues for bug reports and feature requests
- **Discussions:** GitHub Discussions for questions and ideas
- **Pull Requests:** Follow the template and provide detailed descriptions

### Common Issues
1. **Validation Failures:** Run `pnpm validate` and fix all issues
2. **TypeScript Errors:** Ensure strict mode compliance
3. **Test Failures:** Check test patterns in `.ai/skills/testing/`
4. **AI Behavior Issues:** Verify skills are properly referenced

## 🚀 Release Process

### Version Management
- **Semantic Versioning:** Major.Minor.Patch (e.g., 1.2.3)
- **Breaking Changes:** Increment major version
- **New Features:** Increment minor version  
- **Bug Fixes:** Increment patch version

### Release Checklist
1. **Update version** in package.json
2. **Update CHANGELOG.md** with new features and fixes
3. **Run complete validation** across all editors
4. **Test template generation** with new version
5. **Create GitHub release** with comprehensive notes

## 💙 Recognition

Contributors are the heart of vibe-start! We recognize contributions through:

- **GitHub Contributors graph** showing your impact
- **Release notes** highlighting significant contributions
- **Community recognition** in discussions and documentation

Every contribution, no matter how small, helps make vibe-start better for the entire community.

## 📄 License

By contributing to vibe-start, you agree that your contributions will be licensed under the same [MIT License](LICENSE) as the project.

---

**Happy vibecoding!** 🚀 Thank you for helping make TypeScript development more productive and enjoyable for everyone.