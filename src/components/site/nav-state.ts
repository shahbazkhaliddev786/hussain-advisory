/** True when the path is inside the section a menu group leads to, e.g. any /services page. */
export function inSection(groupHref: string, pathname?: string) {
  if (!pathname) return false
  const section = `/${groupHref.split("/")[1]}`
  return pathname === section || pathname.startsWith(`${section}/`)
}

/** True when a link points at the page being shown. Links with a query string never match. */
export function isCurrent(href: string, pathname?: string) {
  return pathname !== undefined && href === pathname
}
