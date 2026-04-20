```markdown
# Design System Specification: Tech-Noir Cinematográfico

## 1. Overview & Creative North Star: "The Digital Auteur"

This design system is built for the intersection of logic and light—the Fullstack Developer and the Filmmaker. The Creative North Star is **"The Digital Auteur."** It rejects the sterile, "friendly" SaaS aesthetic in favor of a high-contrast, editorial experience that feels like a vintage Panavision lens capturing a terminal screen.

We break the "template" look through **Intentional Asymmetry** and **Cinematic Depth**. Layouts should mimic a film editor's desk: overlapping "hardware" panels, parallax layers that suggest 35mm physical depth, and high-impact brutalist typography that demands attention. We are not just building an interface; we are simulating a high-end neobrutalist hardware console.

---

## 2. Colors & Surface Philosophy

The palette is anchored in deep shadows and technical luminance. We utilize a "Void-First" approach where hierarchy is born from darkness.

### Named Color Tokens (Material Design Mapping)
*   **Background / Surface:** `#131313` (The base void)
*   **Primary / Active State:** `#B01B2E` (Bordeaux - The signature glow)
*   **Secondary / Technical Data:** `#B3CDB8` (Subtle dark green - Command line heritage)
*   **Primary Container:** `#B01B2E` (For high-intensity actions)
*   **Surface Container Lowest:** `#0E0E0E` (Inset panels/hardware wells)
*   **Surface Container Highest:** `#353534` (Elevated hardware modules)

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for sectioning. Definition must be achieved through:
1.  **Background Shifts:** Place a `surface-container-low` component on a `surface` background to define its boundary.
2.  **Tonal Transitions:** Use soft gradients (e.g., `#131313` to `#201F1F`) to imply edges.
3.  **Physical Overlap:** Use z-index and parallax to let elements sit "above" one another.

### The Glass & Gradient Rule
To simulate lens optics, use **Glassmorphism** for floating overlays. Apply `surface-variant` at 40% opacity with a `20px` backdrop-blur. For main CTAs, use a radial gradient from `primary` to `on_primary_fixed_variant` to simulate the uneven glow of a CRT monitor.

---

## 3. Typography: The Editorial Scale

We use a "Brutalist-Serif" tension. Large headers are aggressive and technical; body copy is timeless and literary.

| Level | Token | Font Family | Size | Character |
| :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | Space Grotesk | 3.5rem | High-impact, brutalist, tight kerning. |
| **Headline** | `headline-lg` | Space Grotesk | 2.0rem | Authoritative, technical. |
| **Title** | `title-lg` | Noto Serif | 1.375rem | The "Auteur" voice—sophisticated. |
| **Body** | `body-md` | Noto Serif | 0.875rem | High readability, editorial feel. |
| **Technical**| `label-md` | Space Mono* | 0.75rem | Data, metadata, and hardware labels. |

*Note: Use Space Mono for all numerical data and code snippets to maintain the "Hardware Simulation" aesthetic.*

---

## 4. Elevation & Depth: Tonal Layering

Traditional box shadows are too "web." In this system, depth is a physical property of light and glass.

*   **The Layering Principle:** Stack `surface-container` tiers. A code block (`surface-container-lowest`) sits "inside" a project card (`surface-container-high`), which floats over the main `surface`.
*   **Ambient Shadows:** Use extra-diffused shadows for floating modals. Instead of black, use `primary` at 5% opacity with a `40px` blur to create a "Bordeaux Glow" rather than a shadow.
*   **Ghost Borders:** If a boundary is required for accessibility, use `outline-variant` at **15% opacity**. It should feel like a faint reflection on a glass edge, not a stroke.
*   **Cinematic Textures:** Overlay a global **Film Grain** SVG filter at 3% opacity. This unifies the digital elements and provides a tactile, non-digital soul.

---

## 5. Components

### Buttons (Hardware Triggers)
*   **Primary:** Solid Bordeaux (`primary_container`). Sharp corners (`rounded-none`). On hover, add a `0 0 15px` box-shadow in the same color to simulate a glowing light-box button.
*   **Secondary:** Ghost variant. No background, `outline-variant` (20% opacity) border. Noto Serif text.

### Cards & Modules
*   **Forbid Dividers:** Use vertical white space or a shift from `surface-container-low` to `surface-container-high`.
*   **35mm Elements:** Use a vertical strip of `surface-container-highest` with small square cutouts on the left edge to simulate a film strip for image galleries.

### Data & Status
*   **Technical Chips:** Use `secondary_container` (Technical Green) with `Space Mono` text. These should look like readouts on a camera's viewfinder.
*   **Inputs:** Underline only. Use `surface-variant` as the field background. The cursor should be a solid Bordeaux block.

### Signature Component: The "Lens Blur" Overlay
For background elements or secondary content, apply a heavy `blur(8px)` and `opacity(0.5)`. As the user scrolls or hovers, transition the blur to `0px` to simulate a camera pulling focus.

---

## 6. Do's and Don'ts

### Do:
*   **Do** embrace asymmetry. Offset your headers from your grid.
*   **Do** use `Space Mono` for all non-prose text (dates, tags, file sizes).
*   **Do** use Bordeaux (`#B01B2E`) sparingly as a "warning" or "active" light.
*   **Do** use parallax effects on background "hardware" layers to create 35mm depth.

### Don't:
*   **Don't** use rounded corners above `0.25rem`. This is a neobrutalist hardware system; sharp edges communicate precision.
*   **Don't** use standard "Grey" shadows. If an element glows, it glows Bordeaux or Green.
*   **Don't** use 1px solid borders. If you can't see the separation through color shifts, your layout needs more intentional spacing.
*   **Don't** use centered layouts for everything. Align to the edges, like a technical schematic.

---

## 7. Accessibility Note
While we lean into the "Noir" aesthetic, maintain a minimum contrast ratio of 4.5:1 for `body-md` text. Use the `on_surface` (`#E5E2E1`) for all primary reading paths against the `#131313` background.