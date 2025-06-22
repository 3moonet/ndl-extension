export const objectEntries = <T extends object = object>(
  obj: T
): [keyof T, T[keyof T]][] => {
  return Object.entries(obj) as [keyof T, T[keyof T]][];
};

export const objectFromEntries = <T extends object = object>(
  entries: [keyof T, T[keyof T]][]
): T => {
  return Object.fromEntries(entries) as T;
};
