# `src/lib` Module

This directory contains utility functions and shared logic that do not belong to a specific React component.

## Architecture
- Functions here should be pure and highly testable.
- They must not manage React state directly.
- Export modular functions to be used across UI components or features.

## Usage Example
```typescript
import { cn } from "@/lib/utils";

const className = cn("base-class", condition && "conditional-class");
```
