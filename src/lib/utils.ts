/**
 * Lightweight className joiner. Avoids pulling in clsx/tailwind-merge
 * to keep the bundle small — sufficient for conditional class logic here.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
