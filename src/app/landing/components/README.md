# Landing Page Components

This directory exclusively holds modular UI React components specific to the landing page route. 

## Responsibility
Break down the complex landing page view into single-responsibility building-blocks, from Hero Sections to interactive backgrounds. This isolates styling, state, and animation implementations.

## Internal Architecture
- `HeroSection.tsx`: Core Top-Fold text and Action Button.
- `AboutSection.tsx`: Explanatory component featuring company history, mission, vision, and values cards.
- `JoinSection.tsx`: Bottom call to action encouraging application/registration.
- `InteractiveBackground.tsx`: Orange particle floating effect using Framer Motion. 
- `WaterRippleBackground.tsx`: Interactive jQuery WebGL water distortion.
- `LoadingScreen.tsx`: Pre-loader component showcasing an animated rocket explosion transition.

## Usage
Import these components individually into `page.tsx` within the parent `/landing` route. Note that they rely heavily on `framer-motion` for complex scroll-triggered effects and transitions.
