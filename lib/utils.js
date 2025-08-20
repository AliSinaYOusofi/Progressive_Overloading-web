/**
 * Combines class names into a single string.
 *
 * @param {...(string|undefined|null|false)} classes - List of class names or falsy values.
 * @returns {string} The combined class names.
 */
export function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}
