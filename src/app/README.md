# `src/app` Module

This directory uses the Next.js App Router paradigm. It defines the routing structure, global layouts, and main page compositions.

## Architecture
- Uses file-system based routing.
- The `layout.tsx` file provides the overarching HTML structure and global context providers.
- The `page.tsx` compose features from `src/components/features` into full page visuals.
- Do not place heavy business logic here; delegate to feature components or `src/lib`.

## Usage Example
Data flows downwards from the layout/page into the components through standard React props.
