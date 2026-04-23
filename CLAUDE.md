Use bun as the JS runtime. Use Astro as the framework. The site must be completely static.

## Linting & formatting

Use Biome for linting and formatting. Run `bun check` before committing — this runs both lint and format in one pass.

- `bun run lint` — lint only
- `bun run format` — format only  
- `bun run check` — lint + format + fix (use this)

Biome is configured in `biome.json`. The `useConst`, `useImportType`, `noUnusedVariables`, and `noUnusedImports` rules are disabled for `.astro` files to avoid false positives in component frontmatter.
