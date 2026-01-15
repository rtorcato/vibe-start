# AI Skills Framework

Centralized AI skills and patterns for consistent behavior across VS Code Copilot, Claude, and Cursor.

## Directory Structure

```
.ai/
├── README.md              # This documentation  
├── config.json            # AI framework configuration
└── skills/                # Organized skill definitions
    ├── core.json          # Fundamental coding standards
    ├── typescript/        # TypeScript-specific patterns
    │   ├── functions.json # Function templates and validation
    │   └── interfaces.json# Interface and type patterns
    ├── testing/           # Testing frameworks and patterns  
    │   └── vitest.json    # Vitest-specific test templates
    └── workflow/          # Development workflow
        └── commands.json  # Standardized pnpm scripts
```

## Purpose

This `.ai` directory serves as the **single source of truth** for AI behavior across all editors:

- **VS Code + GitHub Copilot** - References via `.github/copilot-instructions.md`
- **Claude** - References via `.claude/.claude_project` skillsFramework field
- **Cursor** - References via `.cursor/.cursorrules` with skill imports

## Adding New Skills

1. **Choose category** - Add to existing directory or create new one in `skills/`
2. **Create skill file** - Follow the JSON schema with meta, templates, examples
3. **Update this README** - Document the new skill and its purpose
4. **Test cross-platform** - Validate behavior in all three editors

## Skill Categories

### Core Standards (`skills/core.json`)
- Naming conventions for variables, functions, classes
- Import organization and path mapping (`@/*` → `src/*`)
- Quality gates and validation requirements
- Project structure and file organization

### TypeScript Skills (`skills/typescript/`)
- **Functions** - JSDoc templates, validation patterns, error handling
- **Interfaces** - Type definitions, readonly patterns, optional properties
- **Error Handling** - Result types, async patterns, validation strategies

### Testing Skills (`skills/testing/`)
- **Vitest** - Test structure, mocking, async testing, coverage strategies
- **Best Practices** - Arrange-Act-Assert, edge cases, error path testing

### Workflow Skills (`skills/workflow/`)
- **Commands** - Standardized pnpm scripts for development, testing, building
- **Quality Pipeline** - Validation workflow and pre-commit requirements
- **Development Patterns** - Daily workflow and troubleshooting guides

## Integration

All AI systems reference this directory for:
- **Code Generation** - Consistent templates and patterns
- **Quality Standards** - Uniform validation and formatting requirements  
- **Development Workflow** - Standardized commands and processes
- **Testing Approaches** - Comprehensive testing strategies

## Benefits

✅ **Single Source of Truth** - One location for all AI skills
✅ **Multi-Editor Consistency** - Same behavior across VS Code, Claude, Cursor
✅ **Easy Maintenance** - Centralized updates affect all platforms
✅ **Scalable Organization** - Clear structure for adding new skills
✅ **Project Agnostic** - Skills can be reused across different projects

---

*This framework ensures vibecoding principles are consistently applied regardless of which AI assistant you're using.*