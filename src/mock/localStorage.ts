export interface LocalStorageInterface {
    getItem(key: string): string;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
    clear(): void;
    get length(): number;
    key(i: any): String;
}

export function localStorage(): LocalStorageInterface {
  let storage: any = {};

  return {
    getItem: (key: string) => (key in storage ? storage[key] : null),
    setItem: (key: string, value: string) => (storage[key] = value || ""),
    removeItem: (key: any): boolean => (key in storage ? delete storage[key] : null),
    clear: (): {} => (storage = {}),
    get length(): number {
      return Object.keys(storage).length;
    },
    key: function(i: any): string {
      const keys: string[] = Object.keys(storage);
      return keys[i] || null;
    }
  };
}
