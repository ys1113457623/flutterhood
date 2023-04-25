---
sidebar_position: 2
---

import MermaidComponent from '@site/src/components/MermaidComponent';
import { dartVariableUnderTheHood } from './const.js';

# Variables

### Declaration

To declare a variable, you can use the var keyword, followed by the variable name. Optionally, you can specify the type of the variable before the variable name for stronger typing

```dart title="declarative"
var name;
String name;
```

### Initialization

Variables can be initialized with a value during declaration, or later in the code.

```dart title="declarative"
var name = 'John';
String name = 'John';
```

### Type Inference

Dart automatically infers the type of the variable based on the initial value, if you don't specify the type explicitly

```dart
var name = 'John'; // Dart infers the type 'String'
```

### Final & Const

If you want to create a variable that can't be changed after initialization, you can use the final keyword. For values that are compile-time constants, use the const keyword.

 ```dart
final age = 30;
const PI = 3.14159265359;
 ```

### Null Safety

Dart 2.12 introduced null safety, which means that by default, variables can't be null. To allow a variable to have a null value, you must use the ? suffix on the type. 

```dart
String? nullableName;
```

### Late

With null safety enabled, you can use the late keyword for variables that you know will be initialized later, but you want to declare them first

```
late String fullName;
```

## Variables under the hood
Variables in Dart work through a combination of memory allocation, type inference, and runtime type checks. Here's a high-level overview of how Dart manages variables:

<MermaidComponent example={dartVariableUnderTheHood} />


1. **Memory allocation**: When you declare a variable in Dart, the runtime allocates memory for that variable based on its type. The size of the memory allocation depends on the type, e.g., an `int` variable will have a different memory size than a `double`. If you declare a reference type, such as an object, the variable will store a reference to the memory address where the object is located.

2. **Type inference**: When you use the `var` keyword to declare a variable without explicitly specifying the type, Dart uses type inference to determine the type based on the initial value. For example, if you declare `var name = 'John';`, Dart infers that the type of `name` is `String`. This inferred type is then used for memory allocation and runtime type checks.

3. **Runtime type checks**: Dart is a dynamically typed language, which means that type checks are performed at runtime. When you assign a value to a variable, Dart checks whether the value's type matches the variable's type. If the types don't match, a runtime error is thrown. For example, if you have a `String` variable and try to assign an `int` value to it, you'll get a runtime error.

4. **Garbage collection**: Dart uses a garbage collection mechanism to manage memory. When a variable goes out of scope or is no longer referenced, the garbage collector reclaims the memory occupied by that variable. This helps ensure efficient memory usage in your Dart applications.

5. **Null safety**: With the introduction of null safety in Dart 2.12, the language differentiates between nullable and non-nullable types. By default, variables can't have a null value unless you explicitly mark them as nullable using the `?` suffix on the type (e.g., `String? nullableName;`). This feature helps reduce the occurrence of null-related bugs in your code.

These are some of the key aspects of how variables work under the hood in Dart. The Dart runtime system manages memory allocation, type inference, runtime type checks, and garbage collection to provide a seamless experience for developers while ensuring efficient memory usage and robust error handling.

## Less Known

### Expando

In Dart, an Expando is a class that allows you to associate objects with a specific key, where the key can be any non-null object. The objects that are associated with the key can then be accessed later using the same key.
The Expando class is useful in situations where you need to attach additional information to an object, but you can't or don't want to modify the object itself. Instead, you can use an Expando to associate the additional information with the object, and retrieve it later using the same Expando instance.

Here's an example of how you can use an Expando in Dart:

```dart title="Expando example"
class Person {
  final name;
  Person(this.name);
}

void main() {
  var bob = Person('Bob');
  var expando = Expando<int>();
  expando[bob] = 42; // associate the value 42 with the object bob
  print(expando[bob]); // prints 42
}
```
In this example, we define a Person class with a name field. We create an instance of the Person class called bob, and then create an `Expando<int>` instance called expando. We associate the value 42 with the bob object using the `expando[bob] = 42` syntax, and then retrieve the value using `expando[bob]`. The output of the print statement is 42, which confirms that we successfully associated and retrieved the value using the Expando.
