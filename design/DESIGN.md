```markdown
# Design System Document: The Scholarly Architect

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Curator."** 

In the world of education development, clarity is authority. This system moves away from the "busy" nature of traditional EdTech and toward a high-end editorial experience. We are not building a generic portfolio; we are building a digital gallery of intellectual property. The design breaks the standard grid through **intentional asymmetry**—large display type balanced by expansive white space—and **layered surfaces** that suggest depth and meticulous organization. It feels expert because it is disciplined; it feels innovative because it rejects the "template" look in favor of a bespoke, spatial experience.

---

## 2. Colors: Tonal Depth & Sophistication
This palette is rooted in deep, authoritative blues (`primary`) and intellectual teals (`tertiary`), contrasted against crisp, airy neutrals.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Traditional lines create a "boxed-in" feel that contradicts the innovation of the brand. Boundaries must be defined through background color shifts. A section might transition from `surface` to `surface-container-low` to signal a change in context.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine vellum.
- **Base Layer:** `surface` (#f7f9fb)
- **Primary Content Area:** `surface-container-lowest` (#ffffff) for maximum focus.
- **Nested Detail:** `surface-container` (#eceef0) for sidebars or secondary metadata.
Use these shifts to create "nested" depth. An "Expertise" card should not have a border; it should sit as a `surface-container-lowest` block on top of a `surface-container-low` section.

### The "Glass & Gradient" Rule
To elevate the "tech-forward" vibe, use **Glassmorphism** for floating elements (like a sticky navigation bar or a mobile menu). Use `surface` colors at 80% opacity with a `backdrop-blur` of 20px. 
**Signature Texture:** Use a subtle linear gradient for Hero backgrounds, transitioning from `primary` (#002446) to `primary-container` (#1a3a5f) at a 135-degree angle. This provides a "soul" and professional polish that flat fills cannot achieve.

---

## 3. Typography: The Editorial Voice
We utilize a dual-font strategy to balance "Expertise" with "Modernity."

- **The Display Voice (Manrope):** Used for `display` and `headline` scales. Manrope’s geometric yet warm proportions provide a tech-forward, architectural feel. 
    - *Usage:* Large, asymmetrical headlines that drive the narrative.
- **The Functional Voice (Inter):** Used for `title`, `body`, and `label` scales. Inter is the gold standard for readability.
    - *Usage:* Use `body-lg` (1rem) for project descriptions to ensure an "expert" reading experience. Use `label-md` for technical metadata, always in uppercase with +0.05em letter spacing.

**Hierarchy Note:** A massive `display-lg` headline should often be paired with a much smaller, high-contrast `label-md` tag (using `on_tertiary_fixed_variant`) to create a sophisticated, high-end editorial tension.

---

## 4. Elevation & Depth: Tonal Layering
We convey hierarchy through **Tonal Layering** rather than traditional structural shadows.

- **The Layering Principle:** Depth is achieved by "stacking" surface-container tiers. Place a `surface-container-lowest` card on a `surface-container-low` section to create a soft, natural lift.
- **Ambient Shadows:** For floating elements (like a "Contact Me" FAB), shadows must be extra-diffused. 
    - *Spec:* `0px 20px 40px rgba(25, 28, 30, 0.06)`. The shadow color is a tinted version of `on-surface`, making it feel like natural ambient light.
- **The "Ghost Border" Fallback:** If containment is absolutely required for accessibility, use a "Ghost Border": the `outline-variant` token (#c3c6cf) at **15% opacity**. Never use 100% opaque borders.

---

## 5. Components

### Buttons
- **Primary:** `primary` background with `on_primary` text. Use `lg` (0.5rem) roundedness. No border.
- **Secondary:** `secondary_container` background with `on_secondary_container` text. This provides a softer, "tech-slate" alternative to the heavy primary blue.
- **Tertiary (The "Innovator" Action):** `tertiary_fixed` background with `on_tertiary_fixed` text. Reserve this for the single most important CTA (e.g., "View Case Study").

### Cards & Project Previews
- **Requirement:** Forbid the use of divider lines. 
- **Style:** Use `surface-container-lowest` as the card base. Separate the image and text using a 24px vertical spacing gap. Images should have a `md` (0.375rem) corner radius to feel precise and professional.

### Input Fields
- **Style:** Underlined or "Ghost" style. Use `surface-container-high` as a subtle background fill with a 2px bottom-border using `outline`.
- **Focus State:** Transition the bottom-border to `tertiary` (#002924) to signal the "Education Developer" accent.

### Chips (Skill Tags)
- Use `secondary_container` with `on_secondary_container` text. Keep these small (`label-sm`) and use `full` roundedness (Pill shape) to contrast against the more rectangular layout elements.

---

## 6. Do's and Don'ts

### Do:
- **Do** use asymmetrical layouts. Place a headline on the left and a supporting paragraph on the right, offset by one column.
- **Do** embrace white space. If you think there is enough space, add 16px more. Space = Authority.
- **Do** use `tertiary` (#002924) and `tertiary_fixed_dim` for "Innovation" accents—it’s the "Education Developer's" signature color.

### Don't:
- **Don't** use black (#000000). Always use `on_surface` (#191c1e) for text to maintain a sophisticated, soft-contrast look.
- **Don't** use standard "drop shadows." Use the Tonal Layering method described in Section 4.
- **Don't** use "default" Inter weights. Use Medium (500) for titles and Regular (400) for body text to maintain an editorial feel.
- **Don't** crowd the edges. Ensure a minimum page margin of 5vw to let the content breathe.

---

*This design system is a living framework. It values the quiet confidence of a well-organized thought over the loud noise of trendy animations.*```