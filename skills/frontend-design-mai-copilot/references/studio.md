# Studio Codebase Reference

This document contains patterns, imports, and component examples specific to the **studio** codebase (Microsoft Copilot web client at copilot.microsoft.com).

---

## Essential Imports

```typescript
import { cn } from "../../utils/shared/classname";
import { ReactElement, ReactNode } from "react";
```

---

## Component Structure

```typescript
// Named exports only
// Props interface with explicit types
// Destructure props with defaults inside function body

interface MyComponentProps {
  children: ReactNode;
  variant?: "default" | "accent";
  className?: string;
}

export function MyComponent(props: MyComponentProps): ReactElement {
  const { children, variant = "default", className } = props;

  return (
    <div className={cn("base-classes", variant === "accent" && "accent-classes", className)}>
      {children}
    </div>
  );
}
```

---

## Button System

Reference: `src/components/system/button.tsx`

**Sizes:** `28-xxs`, `32-xs`, `36-sm`, `40-base`, `48-lg`, `56-xl`, `64-xxl`

**Variants:** `pill`, `circle`, `rect`, `square`

**Colors:**

- `default` - White/transparent with shadow
- `strong` - Dark background, light text **(use for primary actions)**
- `accent` - Accent colored
- `overlay-bright` / `overlay-dimmed` - Semi-transparent
- `subtle-bright` / `subtle-dimmed` - No background until hover
- `acrylic` variants - Frosted glass effect
- `chip` - Selection chips
- `alert` - Red for destructive actions

**Important:** For primary/main action buttons, always use `color="strong"`. Reserve `accent` for secondary emphasis.

**Usage:**

```typescript
import { Button } from "../system/button";

<Button
  title="Click me"
  size="40-base"
  color="default"
  variant="pill"
  onClick={handleClick}
>
  Label
</Button>
```

---

## Focus States

Always include accessibility focus styles:

```typescript
const BUTTON_ACCESSIBILITY_CLASSES =
  "after:absolute after:inset-0 after:pointer-events-none after:border after:border-transparent after:contrast-more:border-2 outline-2 outline-offset-1 focus-visible:z-[1] focus-visible:outline focus-visible:outline-stroke-900";
```

---

## Acrylic Materials

Use the acrylic classes from `src/components/shared/materials.ts`:

- `ACRYLIC_DEFAULT_CLASSES`: Standard acrylic with white/muted tint
- `ACRYLIC_THIN_CLASSES`: Lighter, more transparent acrylic
- `ACRYLIC_*_INVERTED_CLASSES`: Inverted variants for dark-on-light contexts
- Button `color` prop values: `"acrylic"`, `"acrylic-thin"`, `"acrylic-inverted"`, etc.

---

## SSR Considerations

Gate browser APIs:

```typescript
import { useIsHydrated } from "../../hooks/shared/use-is-hydrated";
import { ClientOnly } from "../shared/client-only";

// Option 1: Hook
const isHydrated = useIsHydrated();
if (!isHydrated) return <Skeleton />;

// Option 2: Component
<ClientOnly fallback={<Skeleton />}>
  <BrowserOnlyComponent />
</ClientOnly>
```

---

## File Organization

```
src/components/
├── system/          # Foundational primitives (Button, Chip, Switch, etc.)
├── shared/          # Cross-surface components
└── {surface}/       # Surface-specific components (cmc, edge, etc.)
```

**Import rules:**

- Shared code cannot import from surface-specific directories
- Surface code can import from `shared` and its own directory
- System components are the building blocks - compose them

---

## Icons

SVG icons are stored in `src/assets/svg/`. Key subdirectories:

- Root: General UI icons (add, edit, delete, chevron, etc.)
- `composer/`: Composer-specific icons
- `file-types/`: File type icons (excel, word, pdf, etc.)
- `logos/`: Brand and product logos

**Usage:**

```typescript
import AddIcon from "../../assets/svg/add.svg?react";

<AddIcon className="size-5 fill-foreground-800" />
```

---

## Responsive Design

Use **container queries** (`@sm:`, `@md:`) for components, **media queries** (`sm:`, `md:`) for page layout only.

```typescript
// LAYOUT: Media queries for grid structure
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* COMPONENT: Container queries for internal layout */}
  <div className="@container">
    <div className="flex flex-col @sm:flex-row @sm:items-center">
      <span className="mt-2 @sm:mt-0">Adapts to container width</span>
    </div>
  </div>
</div>
```

**Why?** Media queries respond to viewport, not container. A 300px-wide sidebar component breaks with `sm:` when viewport is 1200px.

Container breakpoints: `@xs` 320px, `@sm` 384px, `@md` 448px, `@lg` 512px, `@xl` 576px, `@2xl`+ larger.

See `docs/responsive-design.md` for complete examples.

---

## Code Style

- Named exports only
- Comments only for intent, tricky logic, a11y, or perf
- Prefer `as const` objects or string unions over enums
- Use `cn()` for className composition (it's tailwind-merge + clsx)
- Destructure props inside function body with defaults
- Keep props stable to avoid re-renders
- **DO NOT gate features behind feature flags** when implementing designs. Only use `useFeatureEnabled` or `isFeatureEnabled` if the user explicitly requests feature flag gating.

---

## Example: Card Component

```typescript
import { ReactElement, ReactNode } from "react";
import { cn } from "../../utils/shared/classname";

interface CardProps {
  children: ReactNode;
  variant?: "elevated" | "outlined" | "filled";
  className?: string;
}

export function Card(props: CardProps): ReactElement {
  const { children, variant = "elevated", className } = props;

  return (
    <div
      className={cn(
        // Base styles
        "rounded-xl p-4",
        // Variant styles
        variant === "elevated" && "bg-background-100 shadow-md",
        variant === "outlined" && "border border-stroke-300 bg-transparent",
        variant === "filled" && "bg-background-200",
        // Dark mode adjustments
        "dark:bg-background-150",
        // Allow overrides
        className,
      )}
    >
      {children}
    </div>
  );
}
```

---

## Answer Cards

Answer Cards are structured responses from Copilot (images, videos, weather, etc.).

**To add a new card type `foo`:**

1. Add Zod schema in `src/schemas/answer-cards/foo-schemas.ts`
2. Register in `src/schemas/answer-cards/answer-card-schemas.ts` union
3. Create component in `src/components/answer-cards/foo/foo-card.tsx`
4. Lazy-load in `src/components/system/ai-card-message.tsx`
5. Enable in `src/utils/shared/get-chat-options.ts`
6. Create mock data for testing (see below)

**Gating:** Use `useFeatureEnabled("foo-cards")` for new cards, `!useKillSwitch("kill-foo-cards")` for GA cards.

**Creating mock data for testing:**

1. Create mock data file at `api/answer-cards/foo/mock-foo-card-data.ts`:

   ```typescript
   import { FooCardProps } from "../../../src/schemas/answer-cards/foo-schemas";

   // Use PascalCase for const names (ESLint naming convention)
   const SampleData: FooCardProps = {
     type: "foo",
     // ... your mock data
   };

   export const FooCardMock: FooCardProps = {
     type: "foo",
     ...SampleData,
   };
   ```

2. Create mock handler at `api/answer-cards/foo/mock-foo-card.ts`:

   ```typescript
   import { FooCardMock } from "./mock-foo-card-data";
   import { SendEvent } from "../../send-event";

   export async function mockFooCard(
     sendEvent: SendEvent,
     messageId: string,
   ): Promise<void> {
     sendEvent({ event: "card", messageId, partId: "0", card: FooCardMock });
     sendEvent({ event: "done", messageId });
   }
   ```

3. Register command in `api/answer-cards/index.ts`:

   ```typescript
   import { mockFooCard } from "./foo/mock-foo-card";

   export const ANSWER_CARD_COMMANDS = {
     // ... existing commands
     "card-foo": ({ sendEvent, messageId }) =>
       mockFooCard(sendEvent, messageId),
   };
   ```

4. Enable the feature flag in `api/start.ts` for mock mode:

   ```typescript
   features: ["voice", "foo-cards"],  // Add your feature flag
   ```

5. Test by running `npm run dev:mock --surface=cmc` and typing `!card-foo` in chat.

See `docs/answer-cards.md` for complete details.

---

## Reference Files

For detailed patterns, consult:

- Design tokens: `tailwind.config.js`
- Typography: `tailwind/typography/tailwind.typography.config.ts`
- CSS variables: `src/index.css`
- System components: `src/components/system/`
- Style guidelines: `.github/agents/style.agent.md`
- Responsive design: `docs/responsive-design.md`
- Answer cards guide: `docs/answer-cards.md`
