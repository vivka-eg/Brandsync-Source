# UI Patterns (JSON Contracts)

JSON-based pattern definitions for deterministic UI generation.

## Pattern Structure

Each pattern is a JSON file describing:
- **name**: Pattern identifier
- **description**: What the pattern does
- **parameters**: Required/optional input values (for parameterized patterns)
- **structure**: Complete component tree with props and children

## Available Patterns

### login-form.pattern.json
Split-screen login with image and form.
- Left: Full-height Unsplash image
- Right: Email/password form in raised Surface
- Two-column Row layout

### signup-form.pattern.json
Centered signup form.
- Name, email, password fields
- Validation hints
- Single-column centered layout

### dashboard-card.pattern.json (Parameterized)
Metric display card.

Parameters:
- `title` (string, required)
- `description` (string, required)
- `value` (string, required)
- `trend` (string, required)
- `actionLabel` (string, default: "View Details")

### settings-panel.pattern.json
Full settings page.
- Profile information section
- Preferences section with Select
- Action buttons

### card-grid.pattern.json (Parameterized)
Grid of image cards.

Parameters:
- `columns` (enum: "2"|"3"|"4", default: "3")
- `items` (array of objects with id, title, description, imageUrl, actionLabel)

## Template Variables

Patterns support Mustache-style template variables:
- `{{parameterName}}` - Direct parameter substitution
- `{{item.property}}` - Object property access (in loops)
- `{{value || 'default'}}` - Default value fallback

## Repeat Syntax

For dynamic lists:
```json
{
  "children": {
    "repeat": "{{items}}",
    "template": { /* component structure */ }
  }
}
```

## Usage by LLM

1. Parse pattern JSON
2. Substitute parameters with provided values
3. Generate React component code from structure tree
4. Ensure all components reference correct contracts

## Validation Rules

- All component names must match existing contracts
- All props must be in component's allowed prop list
- All prop values must match contract enums or types
- Template variables must resolve to valid values
