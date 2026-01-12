# Publishing Guide

## Package Structure

This npm package includes:

### Exports
- **Main bundle**: `dist/index.js` - All React components
- **Design tokens**: `brandsync-design-system/tokens.css` - CSS variables
- **Component manifest**: `brandsync-design-system/components` - JSON contracts
- **Pattern templates**: `brandsync-design-system/patterns` - UI patterns
- **Validation schema**: `brandsync-design-system/contracts` - JSON schema

### Files Included
- `dist/` - Built component library (10.8 KB JS + 41.5 KB CSS)
- `components/` - Component source + contracts + individual CSS
- `patterns/` - Pattern templates and examples
- `contracts/` - Validation schemas
- `styles/` - Design tokens CSS
- `hooks/` - React hooks

## Build Process

The package uses Vite to bundle components:

```bash
npm run build:lib
```

This creates:
- `dist/index.js` - ES module with all components
- `dist/index.css` - Bundled component styles

## Publishing

### 1. Pre-publish Checklist
- [ ] Update version in `package.json`
- [ ] Run `npm run build:lib` to create fresh build
- [ ] Test package locally: `npm pack` and install in test project
- [ ] Update CHANGELOG (if applicable)

### 2. Publish to npm

```bash
# Login to npm (first time only)
npm login

# Dry run to see what would be published
npm publish --dry-run

# Publish to npm
npm publish
```

### 3. Publish as Scoped Package (Optional)

If you want to publish under a scope (e.g., `@yourorg/brandsync-design-system`):

1. Update `package.json`:
```json
{
  "name": "@yourorg/brandsync-design-system"
}
```

2. Publish:
```bash
npm publish --access public
```

## Testing Package Locally

Before publishing, test the package in another project:

```bash
# In this directory
npm pack

# In your test project
npm install /path/to/brandsync-design-system-1.0.0.tgz
```

Then import and test:
```jsx
import { Button, Stack } from 'brandsync-design-system';
import 'brandsync-design-system/tokens.css';
```

## Version Management

Follow semantic versioning:
- **MAJOR** (1.0.0): Breaking changes
- **MINOR** (0.1.0): New features, backwards compatible
- **PATCH** (0.0.1): Bug fixes

```bash
npm version patch  # 1.0.0 -> 1.0.1
npm version minor  # 1.0.0 -> 1.1.0
npm version major  # 1.0.0 -> 2.0.0
```

## Automatic Build on Publish

The `prepublishOnly` script automatically runs `npm run build:lib` before publishing, ensuring the latest build is always published.

## Package Size

Current package size: **27.2 KB** (155.4 KB unpacked)

Breakdown:
- Bundled JS: 10.8 KB
- Bundled CSS: 41.5 KB
- Component source files
- Contracts and patterns
- Design tokens

## Usage Examples

See [README.md](README.md) for complete usage examples.
