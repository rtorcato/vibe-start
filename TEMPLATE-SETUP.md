# GitHub Template Setup Guide

This document provides complete instructions for setting up vibe-start as a GitHub template and using it to create new projects.

## Setting Up the Template Repository

### 1. Enable Template on GitHub

1. **Push your repository** to GitHub if not already done
2. **Navigate to your repository** on GitHub.com
3. **Go to Settings** tab (repository settings, not account settings)
4. **Scroll down to "Template repository"** section
5. **Check the box** ✅ "Template repository" 
6. **Click Save**

Your repository is now marked as a template and will show a "Use this template" button.

### 2. Template Files Added

The following files have been added for template functionality:

- **`.github/template.yml`** - Template metadata and configuration
- **`scripts/template-setup.mjs`** - Automated project initialization script
- **`TEMPLATE-SETUP.md`** - This guide (can be removed after setup)

### 3. Template-Ready Features

✅ **Multi-editor support** (VS Code, Claude, Cursor)  
✅ **Modern TypeScript** with path mapping (`@/*`)  
✅ **Zero-config tooling** (Biome, Vitest, pnpm)  
✅ **Automated setup script** for new projects  
✅ **Comprehensive documentation** in `docs/EDITORS.md`  
✅ **CI/CD pipeline** ready to go  
✅ **Issue and PR templates** included  

## Using the Template

### For Template Users

1. **Click "Use this template"** on the repository page
2. **Create new repository** with your project name
3. **Clone your new repository**:
   ```bash
   git clone https://github.com/your-username/your-project.git
   cd your-project
   ```
4. **Run template setup** (recommended):
   ```bash
   node scripts/template-setup.mjs "my-project" "My project description" "Your Name" "your@email.com"
   ```
5. **Install dependencies**:
   ```bash
   pnpm install
   ```
6. **Start developing**:
   ```bash
   pnpm dev
   ```

### Manual Customization

If you prefer manual setup:

1. **Update package.json**:
   - Change `name` to your project name
   - Update `description` 
   - Set `author` information
   - Update repository URLs

2. **Update README.md**:
   - Change title from "Vibe-Start" to your project name
   - Update description and project-specific information
   - Remove template usage section

3. **Clean up template files**:
   ```bash
   rm IMPLEMENTATION.md TEMPLATE-SETUP.md scripts/template-setup.mjs
   ```

## Template Maintenance

### Updating the Template

1. **Make improvements** to the template repository
2. **Test thoroughly** with `pnpm validate`
3. **Update version** if needed
4. **Document changes** in release notes

### Template Best Practices

- **Keep it minimal** - Only include what most projects need
- **Document everything** - Clear setup instructions are crucial
- **Test the template** - Regularly create projects from it to ensure it works
- **Version releases** - Tag stable versions for users to reference
- **Maintain compatibility** - Keep editor configurations in sync

## Template Features Included

### Core Technology Stack
- **TypeScript 5.3+** with modern ES2022 features
- **Biome** for fast linting and formatting
- **Vitest** for testing with TypeScript support
- **pnpm** for efficient package management

### Development Experience
- **Hot reload** with `tsx` 
- **Path mapping** with `@/*` aliases
- **Comprehensive validation** pipeline
- **Pre-configured tasks** for VS Code

### Multi-Editor Support
- **VS Code** - Full IDE experience with debugging and tasks
- **Cursor** - AI-powered development with `.cursorrules`
- **Claude** - Project-aware AI assistance with GitHub Copilot

### Quality Assurance
- **GitHub Actions** CI/CD pipeline
- **Comprehensive testing** with coverage reports
- **Automated formatting** and linting
- **Type checking** with strict TypeScript settings

---

**Ready to start vibecoding!** 🚀

Your template is now ready for others to use. Share the repository URL and let developers create amazing TypeScript projects with optimal development experience across all major editors.