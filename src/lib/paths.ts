/**
 * Prefix an internal path with Astro's configured `base`.
 * Required for project GitHub Pages (https://haozou39.github.io/meng-lab.github.io/).
 */
export function withBase(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;

  if (clean === '/') {
    return `${base}/`;
  }

  return `${base}${clean}`;
}

export function isCurrentPath(pathname: string, href: string): boolean {
  const target = withBase(href).replace(/\/+$/, '') || '/';
  const current = pathname.replace(/\/+$/, '') || '/';

  if (href === '/') {
    return current === withBase('/').replace(/\/+$/, '') || current === '';
  }

  return current === target || current.startsWith(`${target}/`);
}
