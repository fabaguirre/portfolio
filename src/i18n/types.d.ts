// Utility type to concatenate two string literals
type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

// Recursive type to generate all possible paths
type Paths<T> = {
  [K in keyof T]: T[K] extends Record<string, any>
    ? K extends string | number
      ? `${K}` | Join<K, Paths<T[K]>>
      : never
    : K;
}[keyof T];

// Utility type to get the value type at the end of a path
type PathValue<T, P extends string> = P extends `${infer K}.${infer Rest}`
  ? K extends keyof T
    ? PathValue<T[K], Rest>
    : never
  : P extends keyof T
    ? T[P]
    : never;
