# understanding-typescript

From O'Reilly "Understanding Typescript" video course

## TSC

```json
{
  "noImplicitAny": true,
  "noUnusedParameters": true, // override _param
  "sourceMap": true
}
```

## Classes

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
