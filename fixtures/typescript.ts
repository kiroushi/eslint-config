export function isFunction (value: unknown): value is (...args: unknown[]) => unknown {
  return value && typeof value === 'function'
}
