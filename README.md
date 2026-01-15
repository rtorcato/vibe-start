# TypeScript Vibecoding Project

A modern TypeScript project setup with Biome, pnpm, and Vitest for optimal vibecoding experience.

## 🚀 Features

- **TypeScript** - Static typing with ESM modules
- **Biome** - Ultra-fast linting and formatting (replaces ESLint + Prettier)
- **Vitest** - Fast native testing framework with TypeScript support
- **pnpm** - Efficient package manager with better dependency management
- **GitHub Actions** - CI/CD pipeline optimized for modern toolchain
- **GitHub Templates** - Issue and PR templates

## 📦 Installation

```bash
# Install pnpm globally if you haven't already
npm install -g pnpm

# Install dependencies
pnpm install
```

## 🛠️ Development

Start development mode:
```bash
pnpm dev
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