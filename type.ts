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
