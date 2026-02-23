# `src/components` Module

This overarching directory stores all modular and reusable React components used throughout the application.

## Architecture
To maintain high cohesion and low coupling, components are segregated into two primary sub-directories:
1. `ui/`: Stateless, generic design system components.
2. `features/`: Complex, task-specific assemblies composed of UI parts and business logic.

## Usage Example
Do not import from `src/app` into `src/components`. Components should be leaf nodes or branch nodes building upwards.
