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

## Chapter 5: Classes & Interfaces

Classes as blueprints

### Interfaces

Add readonly properties

```typescript
interface Greetable {
  readonly name: string;
}
```

```typescript
// interface as function type
// fn type more often used
type AddFn = (a: number, b: number) => number;

// alternative
interface AddFun {
  (a: number, b: number): number;
}
```

can inherit multiple interfaces

## Chapter 6: Advanced Types

### Intersction types

#### Object type intersection is combination

```typescript
type Employee = {
  name: string;
  startDate: Date;
}

type Admin = {
  name: string;
  privileges: string[];
}

type ElevatedEmployee = Employee & Admin;
// combined, like extending interfaces
```

#### Union type intersection is actual intersction

```typescript
type Combinable = string | number;
type Numeric = number | boolean;

// number
type Universal = Combinable & Numeric;
```

### Runtime Javascript type checking (type guards)

```typescript
// Runtime normal Javascript
if (count typeof === 'number')

// use in for object.properties check
if ('privileges' in emp) {

}
// can't use typeof with object or type Employee as
// it will always return typeof as 'object'
if (emp typeof === 'object')
// JS in check
```

```typescript
// class can use instanceof
if (vehicle instanceof Truck)
// can't use interface as not at runtime
```

### Discriminated Unions

add kind or type to interface
one common property

```typescript
interface Bird {
  kind: 'bird';
  flyingSpeed: number;
}

interface Horse {
  kind: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.kind) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  // tslint:disable-next-line no-console
  console.log(`Moving at ${speed}`);
}
```

### Index Properties

## Other resources

[Typescript handbook](https://www.typescriptlang.org/docs/handbook/basic-types.html)

[Typescript Deep Dive](https://basarat.gitbooks.io/typescript/)

If you have an O’Reilly account, I recommend the author Remo H. Jansen.

[Learning Typescript 2x](https://learning.oreilly.com/library/view/learning-typescript-2x/9781788391474/) by Remo Jansen