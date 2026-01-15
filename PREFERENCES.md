# Development Preferences

This project is configured with specific development tools and preferences for an optimal vibecoding experience.

## 🛠️ Tool Choices

### Package Manager: pnpm
- **Why pnpm?** Faster installation, better disk space efficiency, strict node_modules structure
- **Installation:** `npm install -g pnpm`
- **Usage:** Use `pnpm` instead of `npm` for all package operations

### Code Quality: Biome
- **Why Biome?** Single tool for linting and formatting, faster than ESLint + Prettier combination
- **Features:** 
  - Lightning-fast linting and formatting
  - TypeScript-first design
  - Zero configuration required
  - Built-in import sorting

### Testing: Vitest
- **Why Vitest?** Vite-native testing framework, faster than Jest, better TypeScript support
- **Features:**
  - Native ESM support
  - TypeScript support out of the box
  - Hot module replacement for tests
  - Built-in coverage with c8
  - Compatible with Jest API

## 🚀 Commands

### Package Management
```bash
pnpm install          # Install dependencies
pnpm add <package>    # Add dependency
pnpm add -D <package> # Add dev dependency
pnpm remove <package> # Remove dependency
```

### Development
```bash
pnpm dev              # Start development mode
pnpm build            # Build for production
pnpm start            # Run built version
```

### Code Quality
```bash
pnpm check            # Run all Biome checks (lint + format)
pnpm check:fix        # Fix all auto-fixable issues
pnpm lint             # Run only linting
pnpm lint:fix         # Fix linting issues
pnpm format           # Format code
pnpm format:check     # Check formatting
```

### Testing
```bash
pnpm test             # Run tests in watch mode
pnpm test:run         # Run tests once
pnpm test:ui          # Run tests with UI
pnpm test:coverage    # Run tests with coverage
```

## 📁 Configuration Files

- `biome.json` - Biome configuration for linting and formatting
- `vitest.config.ts` - Vitest testing configuration  
- `pnpm-workspace.yaml` - Workspace configuration (if needed)
- `.npmrc` - pnpm configuration

## 🔄 Migration Notes

### From npm to pnpm
- All `npm` commands replaced with `pnpm` equivalents
- `package-lock.json` replaced with `pnpm-lock.yaml`
- Faster installations and better dependency management

### From ESLint + Prettier to Biome
- Single configuration file (`biome.json`)
- Faster execution (10-100x faster)
- Consistent formatting and linting rules
- Better TypeScript integration

### From Jest to Vitest
- Native TypeScript support
- Faster test execution
- Better watch mode with HMR
- Compatible Jest API for easy migration
- Built-in coverage reporting

## 🎯 Benefits

1. **Performance**: All tools chosen for speed and efficiency
2. **Simplicity**: Fewer configuration files and dependencies
3. **Modern**: Latest tooling with best practices
4. **TypeScript-first**: All tools have excellent TypeScript support
5. **Consistency**: Unified toolchain reduces complexity