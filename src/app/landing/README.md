# Landing Page Route

This directory contains the root Next.js configuration and layout entry point for the landing page application.

## Responsibility
The `page.tsx` file inside this module acts as the orchestrator rendering all major landing page features (Hero, About, Join Sections) and managing the global React state for the `LoadingScreen` transition, while keeping track of overarching UI backgrounds like the WebGL Water Ripple.

## Internal Architecture
- `page.tsx`: The route page entrypoint wrapper.
- `components/`: A dedicated folder holding all individual modular components exclusively used here on the landing section.

## Usage
Simply navigate to `http://localhost:3000/landing/` to view the full page orchestration. All features dynamically mount as part of the React App Router framework.
