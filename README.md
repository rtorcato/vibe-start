# Vibe-Start

A modern TypeScript project setup with Biome, pnpm, and Vitest for optimal vibecoding experience across VS Code, Claude, and Cursor.

## 🎯 Using This Template

### Quick Start
1. **Click "Use this template"** button on GitHub
2. **Create your new repository** from the template
3. **Clone your new repository** locally
4. **Run the setup script**:
   ```bash
   node scripts/template-setup.mjs "my-project" "My awesome project description" "Your Name" "your@email.com"
   ```
5. **Install dependencies**: `pnpm install`
6. **Start coding**: `pnpm dev`

### Manual Setup
If you prefer manual setup:
1. Update [package.json](package.json) with your project name, description, and author
2. Update this README with your project information
3. Remove [IMPLEMENTATION.md](IMPLEMENTATION.md) and [scripts/template-setup.mjs](scripts/template-setup.mjs)
4. Start building your awesome project!

## 🚀 Features

- **TypeScript** - Static typing with ESM modules and path mapping
- **Biome** - Ultra-fast linting and formatting (replaces ESLint + Prettier)
- **Vitest** - Fast native testing framework with TypeScript support
- **pnpm** - Efficient package manager with better dependency management
- **Multi-Editor Support** - Optimized for VS Code, Claude, and Cursor
- **GitHub Actions** - CI/CD pipeline optimized for modern toolchain
- **GitHub Templates** - Issue and PR templates

## 📦 Installation

### For New Projects (Template Users)
```bash
# 1. Use this template on GitHub or clone your new project
# 2. Run template setup (recommended)
node scripts/template-setup.mjs "my-project" "My project description" "Your Name" "your@email.com"

# 3. Install dependencies
pnpm install
```

### For Contributing to Template
```bash
# Install pnpm globally if you haven't already
npm install -g pnpm

# Quick setup (recommended)
./scripts/setup.mjs

# OR manual installation
pnpm install
```

## 🛠️ Development

Start development mode:
```bash
pnpm dev
```

Start with auto-restart on file changes:
```bash
pnpm dev:watch
```

Build the project:
```bash
pnpm build
```

Run tests:
```bash
pnpm test
```

Run tests once:
```bash
pnpm test:run
```

Run tests with UI:
```bash
pnpm test:ui
```

## ⚡ Vibecoding Features

**VS Code Integration:**
- Press `Ctrl+Shift+P` → "Tasks: Run Task" for quick actions
- Integrated debugging with F5
- Auto-format on save with Biome
- Test explorer integration

**Quality Gates:**
- Pre-commit hooks with validation
- Auto-fix on save
- Type checking integration

**Fast Feedback:**
- Hot reload in development
- Watch mode for tests
- Instant formatting and linting

## 🎯 Multi-Editor Support

This project is optimized for three development environments:

- **VS Code** - Complete IDE experience with debugging, tasks, and extensions
- **Claude** - AI-assisted development with project-aware suggestions  
- **Cursor** - AI-powered editor with natural language programming

All editors share the same core tooling (TypeScript, Biome, Vitest, pnpm) for consistent development experience. See [docs/EDITORS.md](docs/EDITORS.md) for detailed setup and usage guides.

## 🔍 Code Quality

Run all checks (lint + format):
```bash
pnpm check
```

Fix all auto-fixable issues:
```bash
pnpm check:fix
```

Lint code:
```bash
pnpm lint
```

Fix linting issues:
```bash
pnpm lint:fix
```

Format code:
```bash
pnpm format
```

Check formatting:
```bash
pnpm format:check
```

## 📋 Scripts

| Command | Description |
|---------|-------------|
| `pnpm build` | Compile TypeScript to JavaScript |
| `pnpm dev` | Run in development mode with tsx |
| `pnpm start` | Run the built JavaScript |
| `pnpm test` | Run tests in watch mode |
| `pnpm test:run` | Run tests once |
| `pnpm test:ui` | Run tests with Vitest UI |
| `pnpm test:coverage` | Run tests with coverage |
| `pnpm check` | Run all Biome checks |
| `pnpm check:fix` | Fix all auto-fixable issues |
| `pnpm lint` | Lint TypeScript files |
| `pnpm lint:fix` | Fix linting issues |
| `pnpm format` | Format code with Biome |
| `pnpm format:check` | Check code formatting |

## 🏗️ Project Structure

```
├── .github/                 # GitHub templates and workflows
│   ├── ISSUE_TEMPLATE/     # Issue templates
│   ├── workflows/          # GitHub Actions
│   ├── copilot-instructions.md
│   └── pull_request_template.md
├── src/                    # Source code
│   ├── __tests__/         # Test files
│   └── index.ts           # Main entry point
├── dist/                   # Compiled JavaScript (generated)
├── coverage/              # Test coverage reports (generated)
├── biome.json            # Biome configuration
├── vitest.config.ts      # Vitest configuration
├── tsconfig.json         # TypeScript configuration
├── pnpm-lock.yaml        # pnpm lockfile
├── PREFERENCES.md        # Development tool preferences
└── package.json          # Package configuration
```

## 🧪 Testing

This project uses Vitest for testing. Tests are located in the `src/__tests__/` directory.

Run all tests:
```bash
pnpm test
```

Run tests once:
```bash
pnpm test:run
```

Generate coverage report:
```bash
pnpm test:coverage
```

Open test UI:
```bash
pnpm test:ui
```

## 🔧 Configuration

### TypeScript
Configuration in `tsconfig.json` with strict mode and ESM modules.

### Biome
All-in-one toolchain configured in `biome.json` for linting and formatting.

### Vitest
Testing configuration in `vitest.config.ts` with TypeScript support and coverage.

### pnpm
Package management with `pnpm-workspace.yaml` for workspace configuration.

## 🎯 Why These Tools?

See [PREFERENCES.md](PREFERENCES.md) for detailed explanations of tool choices and migration benefits.

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for your changes
5. Run `pnpm check:fix` to ensure code quality
6. Ensure all tests pass with `pnpm test:run`
7. Submit a pull request

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.