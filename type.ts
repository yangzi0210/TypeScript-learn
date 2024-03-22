interface A {
  x: number;
  y: number;
}

type T = Partial<A>;

const a: T = { x: 0, y: 0 };
const b: T = { x: 0 };
const c: T = { y: 0 };
const d: T = {};

type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

interface B {
  x?: number;
  y: number;
}

type T0 = Required<B>;

const a0: T0 = { x: 0, y: 0 };

type MyRequired<T> = {
  [P in keyof T]-?: T[P];
};

interface C {
  x?: number;
  y: number;
}

type T1 = Readonly<C>;

const a1: T1 = { x: 0, y: 0 };

// a1.x=1

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface Cat {
  age: number;
  gender: string;
}

type CatName = "seraph" | "ashe" | "ahri";

const cats: Record<CatName, Cat> = {
  seraph: { age: 10, gender: "male" },
  ashe: { age: 5, gender: "female" },
  ahri: { age: 16, gender: "female" },
};

/* 在 TypeScript 中，当你看到 K extends keyof any 这样的表达时，
它的作用是约束类型 K 为一个有效的类型，可以作为对象的键。
这里的 keyof any 是指所有可能的 JavaScript 值的键的联合类型。
简单来说，keyof any 通常等价于 string | number | symbol ，
因为在 JavaScript 中，对象的键可以是这三种类型。
你可以使用 string，number 或者 symbol 作为对象属性的键。 */

type MyRecord<K extends keyof any, T> = {
  [P in K]: T;
};

interface Todo {
  title: string;
  description: string;
  done: boolean;
}

type TodoPreview = Pick<Todo, "title" | "done">;

const todo: TodoPreview = {
  title: "play games",
  done: false,
};

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type E0 = Exclude<"a" | "b", "a">;

type E1 = Exclude<string | number | (() => void), Function>;

type MyExclude<T, U> = T extends U ? never : T;

interface Todos {
  title: string;
  desc: string;
  done: boolean;
  no: number;
}

type TodoPre = Omit<Todos, "desc">;

const todopre: TodoPre = {
  title: "play",
  done: false,
  no: 2,
};

type TodoInfo = Omit<Todos, "desc" | "no">;

const todoInfo: TodoInfo = {
  title: "play",
  done: false,
};

type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

type E = Extract<"a" | "b", "a" | "f">;

type E3 = Extract<string | number | (() => void), Function>;

type MyExtrat<T, U> = T extends U ? T : never;

declare function f(args: { a: number; b: string }): void;

type P0 = Parameters<() => string>; // []

type P1 = Parameters<(s: string) => void>; // [s: string]

type P2 = Parameters<<T>(arg: T) => T>; // [arg: unknown]

type P3 = Parameters<typeof f>;

type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

type R = ReturnType<() => void>;

const add = (x: number, y: number): number => {
  return x + y;
};

type R1 = MyReturnType<typeof add>;

type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
