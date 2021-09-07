export const isSubstring = (value: string, needle: string): boolean =>
  !!value.toLowerCase().match(needle.toLowerCase());

export const escape = (value: string): string => value.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
