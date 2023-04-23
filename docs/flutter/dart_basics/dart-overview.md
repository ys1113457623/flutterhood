---
sidebar_position: 1
---

# Overview

## Hello World

Starting with the classic "Hello, World!" program is a great way to introduce the basic syntax and structure of any programming language.

```dart title="Hello, World!"
void main() {
  print('Hello, World!');
}
```

## Variables

```dart title="Learn Static and Dynamic Typing to understand var ?"
var name = 'Flutterhood';
var year = 2023;
var antennaDiameter = 3.7;
var flybyObjects = ['Dart', 'Flutter', 'AOT', 'JIT'];
var image = {
  'tags': ['dart'],
  'url': '//path/to/dart.jpg'
};
```

## Functions

```dart title="Functions in computer science are like black boxes that take input and produce output, "
void sayHello(String name) {
  print("Hello, $name!");
}

sayHello("John"); // prints "Hello, John!"
```


```dart title="Anonymous functions. What is big arrow ?"
var addNumbers = (int a, int b) => a + b;

print(addNumbers(2, 3)); // prints 5
```

## Classes

```dart
class Person {
  String name;
  int age;
  
  Person(this.name, this.age);
  
  void sayHello() {
    print("Hello, my name is $name and I'm $age years old.");
  }
}

var john = Person("John", 30);
john.sayHello(); // prints "Hello, my name is John and I'm 30 years old."

```
### Enums

```dart
enum PlanetType { terrestrial, gas, ice }
```
```dart
final yourPlanet = Planet.earth;

if (!yourPlanet.isGiant) {
  print('Your planet is not a "giant planet".');
}
```

### Inheritance

```dart
class Orbiter extends Spacecraft {
  double altitude;

  Orbiter(super.name, DateTime super.launchDate, this.altitude);
}
```

### Mixins

```dart
mixin Piloted {
  int astronauts = 1;

  void describeCrew() {
    print('Number of astronauts: $astronauts');
  }
}
```

## Comments

```dart
// This is a normal, one-line comment.

/// This is a documentation comment, used to document libraries,
/// classes, and their members. Tools like IDEs and dartdoc treat
/// doc comments specially.

/* Comments like these are also supported. */
```

## Asynchronous Programming

```dart
Future<String> fetchUserData(String userId) async {
  // simulate network delay
  await Future.delayed(Duration(seconds: 2));
  
  // return user data
  return "User $userId";
}

void main() async {
  var userData = await fetchUserData("123");
  print(userData); // prints "User 123"
}

```

## Exception

```dart
if (astronauts == 0) {
  throw StateError('No astronauts.');
}
```




:::info Less Known
- Although Dart is strongly typed, type annotations are optional because Dart can infer types. In var number = 101, number is inferred to be of type int.
- Cascades allow you to perform a sequence of operations on the same object. It's a convenient way to perform multiple operations on a single object in a more readable and compact way.
- In Dart, you can make classes callable like a function by defining the call() method. When an instance of the class is called as a function, the call() method is executed.
- Mixins are a way to reuse a class's code in multiple class hierarchies. You can think of them as a way to share functionality between classes without using inheritance.
- Factory constructors allow you to return an instance of a class from a constructor without creating a new instance of the class. This can be useful for implementing the Singleton pattern or for reusing objects.
- Asynchronous generators are functions that can generate a sequence of values over time using yield statements. They can be used with await for loops and return a Stream.
- Extension methods allow you to add new functionality to existing classes without modifying the original class or creating a subclass. This can be particularly useful for working with classes from external libraries.
- The Dart language specification is available under a Creative Commons license, which allows anyone to use, copy, and distribute it freely.
:::


:::danger Version Note

-  Null safety was introduced in Dart 2.12. Using null safety requires a language version of at least 2.12.

:::

