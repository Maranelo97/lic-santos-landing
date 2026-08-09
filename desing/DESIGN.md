---
name: Kindred Path
colors:
  surface: '#fcf9f4'
  surface-dim: '#dcdad5'
  surface-bright: '#fcf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ee'
  surface-container: '#f0ede9'
  surface-container-high: '#ebe8e3'
  surface-container-highest: '#e5e2dd'
  on-surface: '#1c1c19'
  on-surface-variant: '#43474c'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f3f0eb'
  outline: '#74777d'
  outline-variant: '#c4c6cd'
  surface-tint: '#4e6073'
  primary: '#162839'
  on-primary: '#ffffff'
  primary-container: '#2c3e50'
  on-primary-container: '#96a9be'
  inverse-primary: '#b5c8df'
  secondary: '#974822'
  on-secondary: '#ffffff'
  secondary-container: '#ff996d'
  on-secondary-container: '#77300b'
  tertiary: '#1b2a1c'
  on-tertiary: '#ffffff'
  tertiary-container: '#304031'
  on-tertiary-container: '#99ac98'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d1e4fb'
  primary-fixed-dim: '#b5c8df'
  on-primary-fixed: '#091d2e'
  on-primary-fixed-variant: '#36485b'
  secondary-fixed: '#ffdbcd'
  secondary-fixed-dim: '#ffb597'
  on-secondary-fixed: '#360f00'
  on-secondary-fixed-variant: '#78310c'
  tertiary-fixed: '#d5e8d2'
  tertiary-fixed-dim: '#b9ccb7'
  on-tertiary-fixed: '#101f12'
  on-tertiary-fixed-variant: '#3a4b3b'
  background: '#fcf9f4'
  on-background: '#1c1c19'
  surface-variant: '#e5e2dd'
typography:
  headline-xl:
    fontFamily: Literata
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Literata
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Literata
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Literata
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

The design system is built for a psychoanalytic practice that bridges clinical authority with deep human empathy. The brand personality is "The Wise Guardian"—sophisticated enough for adult clinical discourse, yet warm and tactile enough to feel safe for children and adolescents.

The aesthetic direction is **Modern Tactile**. It utilizes a sophisticated "visual punch" through high-contrast typography and deep pigment colors, avoiding the sterile clinical look of traditional healthcare. It leans into organic shapes, soft layering, and a composition that feels curated and intentional. The goal is to evoke an emotional response of being "held" and understood.

## Colors

The palette is grounded in the natural world to foster a sense of psychological safety. 

- **Primary (Deep Navy):** Used for primary navigation, headings, and high-authority moments. It represents professional stability.
- **Secondary (Terracotta):** Used for calls to action and focal points. This "warm punch" provides the striking visual energy requested.
- **Tertiary (Sage Green):** Used for success states, secondary buttons, and background washes to introduce calmness.
- **Neutral (Sand/Bone):** The surface color. We avoid pure white (#FFFFFF) to reduce eye strain and create a warmer, paper-like quality.

## Typography

This design system uses a high-contrast typographic pairing to signal both expertise and accessibility.

- **Literata (Headings):** A contemporary serif with a "bookish" and authoritative feel. It communicates the deep academic and clinical roots of psychoanalysis.
- **Be Vietnam Pro (Body & Labels):** A friendly, slightly warm sans-serif. It ensures that complex clinical information remains readable and approachable for parents and young adults.

**Scale and Rhythm:** Headlines use tighter tracking and leading for a bold "editorial" look. Body text uses generous line-height (1.6) to provide breathing room for sensitive topics.

## Layout & Spacing

The layout philosophy is **Spacious & Breathable**. Psychoanalysis requires mental space; the UI reflects this by utilizing "active" whitespace. 

- **Grid:** A 12-column fluid grid for desktop with 24px gutters.
- **Sectioning:** Vertical spacing between major sections is intentionally large (120px) to prevent the user from feeling rushed or overwhelmed by information.
- **Alignment:** Content should be centered or use asymmetrical offsets to create a more organic, less "corporate" feel.
- **Mobile:** Margins are reduced to 20px, and section gaps scale down to 64px to maintain momentum on smaller screens.

## Elevation & Depth

To maintain a human and tactile feel, we avoid harsh dropshadows. Instead, this design system utilizes:

1.  **Ambient Depth:** Very large, ultra-diffused shadows (Blur: 40px+, Opacity: 4%) with a slight Terracotta or Navy tint rather than pure black. This makes elements feel like they are floating gently above the sand-colored background.
2.  **Tonal Stacking:** Using slightly darker or lighter shades of the Neutral palette to define areas, rather than relying on lines or heavy shadows.
3.  **Soft Insets:** For input fields, a subtle inner shadow can be used to create a "pressed" or "hollow" feeling, inviting the user to fill the space.

## Shapes

The shape language is defined by **Softened Geometry**. 

- **Standard Radius:** 0.5rem (8px) for buttons and inputs, providing a friendly but structured appearance.
- **Large Radius:** 1.5rem (24px) for cards and featured imagery, evoking a sense of "enclosure" and safety.
- **Organic Accents:** Use "blob" shapes or hand-drawn underlines (in Sage Green) as decorative elements to contrast the professional typography.

## Components

**Buttons**
- **Primary:** Terracotta background with white text. High visual punch. Rounded-md.
- **Secondary:** Navy border with Navy text. Used for "Professional/Clinical" actions like "Download Resources."
- **Ghost:** Sage Green text. Used for less critical navigation.

**Cards**
- Cards use a `neutral-light` background (slightly lighter than the page background) and `rounded-xl` corners. 
- Apply the diffused ambient shadow on hover to indicate interactivity.

**Input Fields**
- Inputs should have a thick 2px border in a muted Navy (30% opacity) that transitions to 100% Navy on focus. 
- Labels always use the `label-sm` style for clarity.

**Chips/Tags**
- Used for categorizing services (e.g., "Child Therapy," "Adolescent Care"). These should use the Sage Green background with dark Navy text to feel soothing.

**Interactive Lists**
- Lists for FAQs or service details should use a "reveal" animation. The container should have a subtle Sage Green left-border to guide the eye.