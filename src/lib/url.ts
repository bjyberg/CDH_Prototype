const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Resolve an internal path against the site's base URL. */
export const url = (path: string) => `${base}${path}`;
