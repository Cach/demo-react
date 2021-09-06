export const isSubstring = (value: string, needle: string): boolean =>
  !!value.toLowerCase().match(needle.toLowerCase());
