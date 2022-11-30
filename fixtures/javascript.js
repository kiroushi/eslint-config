/**
 * @param {unknown} value
 * @returns {value is (...args: unknown[]) => unknown}
 */
export function isFunction (value) {
  return value && typeof value === 'function'
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const isFooAFunction = isFunction(() => {})

// eslint-disable-next-line require-await
export async function notAsyncFunction () {
  return 'notAsync'
}
