export const createStorage = <GData>(
  key: string,
  storage = window.localStorage
) => {
  return {
    get: (): GData => JSON.parse(storage.getItem(key) || 'null'),
    set: (value: GData) => storage.setItem(key, JSON.stringify(value)),
    clear: () => storage.removeItem(key),
  };
};
