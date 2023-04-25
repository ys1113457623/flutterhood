export const dartVariableUnderTheHood = `
graph TD
  A(Start) --> B(Explicit Type?)
  B -- Yes --> D(Memory Allocation)
  B -- No --> C(Type Inference)
  C --> D
  D --> E(Runtime Type Check)
  E -- Match --> F(Garbage Collection)
  E -- Mismatch --> G(Throw Runtime Error)
  F --> H(End)
  G --> H

`