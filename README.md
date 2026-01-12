# Brandsync Design System

Deterministic UI component library with layout primitives and pattern templates for compiler-driven UI generation.

## Installation

```bash
npm install brandsync-design-system
```

## Usage

### Import Components

```jsx
import { Button, Stack, Row, Container, Input } from 'brandsync-design-system';
import 'brandsync-design-system/tokens.css';

function App() {
  return (
    <Container>
      <Stack gap="md">
        <h1>Welcome</h1>
        <Input label="Email" type="email" />
        <Button variant="primary" size="md">Submit</Button>
      </Stack>
    </Container>
  );
}
```

### Import Design Tokens CSS

```js
// In your main entry file
import 'brandsync-design-system/tokens.css';
```

## Components

### Layout Primitives
- **Stack** - Vertical layout with gap-based spacing
- **Row** - Horizontal layout with gap-based spacing
- **Container** - Max-width container with horizontal padding
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

### Hooks
- **useMobile** - Mobile breakpoint detection hook

## Design Tokens

All spacing uses design tokens:
- `sm` → `--spacing-150` (12px)
- `md` → `--spacing-200` (16px)
- `lg` → `--spacing-300` (24px)

## Component Contracts & Patterns

This design system includes JSON contracts and pattern templates for programmatic UI generation:

```js
// Access component contracts
import componentManifest from 'brandsync-design-system/components';

// Access pattern templates
import patternManifest from 'brandsync-design-system/patterns';

// Access validation schema
import validationSchema from 'brandsync-design-system/contracts';
```

## Examples

### Simple Form

```jsx
import { Stack, Input, PasswordInput, Button } from 'brandsync-design-system';

<Stack gap="md">
  <Input label="Email" type="email" />
  <PasswordInput label="Password" />
  <Button variant="primary" size="md">Sign In</Button>
</Stack>
```

### Card Layout

```jsx
import { Surface, Stack, Row, Spacer } from 'brandsync-design-system';

<Surface variant="raised">
  <Stack gap="md">
    <h2>Dashboard Card</h2>
    <Row gap="sm">
      <span>Status:</span>
      <Spacer />
      <strong>Active</strong>
    </Row>
  </Stack>
</Surface>
```

### Responsive Grid

```jsx
import { Container, Grid, Box } from 'brandsync-design-system';

<Container>
  <Grid columns={3} gap="lg">
    <Box padding="md">Item 1</Box>
    <Box padding="md">Item 2</Box>
    <Box padding="md">Item 3</Box>
  </Grid>
</Container>
```

## Documentation

For complete documentation including:
- Component contracts (JSON)
- Pattern templates
- Validation schemas
- RAG/MCP integration guides

Visit the [GitHub repository](https://github.com/yourusername/brandsync-design-system)

## License

MIT
