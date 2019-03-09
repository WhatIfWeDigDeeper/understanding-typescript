# Understanding Typescript

From O'Reilly ["Understanding Typescript"](https://learning.oreilly.com/videos/understanding-typescript/9781789951905) video course

## Chapter 2: Using Types for better Code

Cameron had a great question, why does the following code compile when the output method signature on the object does not match the interface?

```typescript
interface Complex {
    data: number[];
    output: (all: boolean) => number[];
}

const complex: Complex = {
    data: [100, 3.99, 10],
    output(): number[] {
        return this.data;
    },
};
```

See [Microsoft Typescript wiki](https://github.com/Microsoft/TypeScript/wiki/FAQ#why-are-functions-with-fewer-parameters-assignable-to-functions-that-take-more-parameters) for their explanation.

## Chapter 3: Understanding the TypeScript Compiler

```json
{
  "noImplicitAny": true,
  "noUnusedParameters": true,
  "sourceMap": true,
  "strictNullChecks": true
}
```

* Unused parameters can be prefixed with _ to avoid error.
* strict null checks disallow reassigning null to a variable.

## Chapter 4: TypeScript and ES6

```typescript
class Person {
  name: string; // default is public
  private ssn: number;
  protected age: number;

  // username will be created as a public field
  constructor(name: string, public username: string) {
    this.name = name;
  }
}
```

## Other resources

[Typescript handbook](https://www.typescriptlang.org/docs/handbook/basic-types.html)

[Typescript Deep Dive](https://basarat.gitbooks.io/typescript/)

If you have an O’Reilly account, I recommend the author Remo H. Jansen.

[Learning Typescript 2x](https://learning.oreilly.com/library/view/learning-typescript-2x/9781788391474/) by Remo Jansen