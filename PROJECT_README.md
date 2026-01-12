# Brandsync Design System

Deterministic UI component library with layout primitives and pattern templates for compiler-driven UI generation.

## Overview

This design system is built for **deterministic UI compilation** using:
- JSON component contracts
- Layout primitives with gap-based spacing
- Design token system
- Pattern templates for common UIs
- RAG/MCP-ready structure

## Structure

```
/components          - React components with contracts
  /Button           - Component folder
    Button.jsx      - Implementation
    Button.css      - Styles
    button.contract.json - API contract
    index.ts        - Barrel export
  index.json        - Master component manifest

/patterns           - UI pattern templates (JSON)
  login-form.pattern.json
  signup-form.pattern.json
  dashboard-card.pattern.json
  settings-panel.pattern.json
  card-grid.pattern.json
  index.json        - Pattern manifest
  /examples         - Example inputs/outputs

/styles             - Design tokens
  _tokens.css       - CSS variables
  tokens.json       - Token reference

/contracts          - Validation schemas
  validation.schema.json

/hooks              - React hooks
  useMobile.ts
```

## Components

### Layout Primitives
- **Stack** - Vertical layout with gap
- **Row** - Horizontal layout with gap
- **Container** - Max-width + horizontal padding
- **Grid** - N-column grid layout
- **Box** - Padding container
- **Spacer** - Fixed space (horizontal/vertical)
- **Divider** - Visual separator line
- **Surface** - Background variants (base, raised, container, inset)

### Form Components
- **Input** - Text/email/number input with label
- **PasswordInput** - Password input with visibility toggle
- **Select** - Dropdown select with options

### Action Components
- **Button** - Primary action button (8 variants, 3 sizes)

## Design Tokens

All spacing uses design tokens:
- `sm` → `--spacing-150` (12px)
- `md` → `--spacing-200` (16px)
- `lg` → `--spacing-300` (24px)

See [styles/tokens.json](styles/tokens.json) for complete token reference.

## Component Contracts

Each component has a JSON contract defining:
- Allowed props and values
- Slots (children)
- Behavioral rules
- Default values

Example: [components/Button/button.contract.json](components/Button/button.contract.json)

## Pattern Templates

Pre-built UI patterns as JSON templates:
- **login-form** - Split-screen login
- **signup-form** - Centered signup
- **dashboard-card** - Metric card (parameterized)
- **settings-panel** - Settings page
- **card-grid** - Content grid (with loop)

See [patterns/index.json](patterns/index.json) for pattern manifest.

## Usage for RAG/MCP

### 1. Component Discovery
```
Load: components/index.json
Retrieve: Component contracts from paths
Validate: Props against contract schemas
```

### 2. Pattern Generation
```
Load: patterns/index.json
Select: Pattern by name or category
Parse: Pattern template JSON
Substitute: Parameters with values
Validate: Against contracts and validation.schema.json
Generate: React/TypeScript code
```

### 3. Token Resolution
```
Load: styles/tokens.json
Map: gap="md" → --spacing-200 → 16px
Apply: Design system constraints
```

## Validation Rules

See [contracts/validation.schema.json](contracts/validation.schema.json)

Key rules:
- ✅ Components must exist in manifest
- ✅ Props must match contract enums
- ✅ Spacing tokens only (sm/md/lg)
- ❌ No inline styles (except images)
- ❌ No className or style props
- ❌ No margin (use gap instead)

## Examples

See [patterns/examples/](patterns/examples/) for:
- Input/output examples
- Parameter substitution
- Loop expansion
- Validation checks

## Getting Started

```bash
npm install
npm run dev
```

Visit http://localhost:5173 to see component demos.

## License

MIT
