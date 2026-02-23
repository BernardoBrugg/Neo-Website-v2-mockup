# `src/components/ui` Module

This directory contains pure, stateless, and highly reusable design system blocks.

## Architecture
- Components here must be presentation-only.
- They accept data and callbacks via props.
- They employ the utility function `cn` to allow flexible Tailwind class-merging.

## Usage Example
```tsx
import { Button } from "@/components/ui/Button";

<Button variant="primary" onClick={handleClick}>Click Me</Button>
```
