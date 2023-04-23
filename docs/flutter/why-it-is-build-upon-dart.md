---
sidebar_position: 2
---



import MermaidComponent from '@site/src/components/MermaidComponent';
import { whyItIsBuildUponDart } from './const/charts.js';


# Why Flutter Uses Dart
Flutter uses Dart because it allows the framework to avoid using a separate declarative layout language such as JSX or XML. Dart's layout is both declarative and programmatic, making it easy for developers to read and quickly visualize. This eliminates the need for a separate markup language and enables developers to write more expressive, efficient, and maintainable code. In summary, Dart's declarative and programmatic approach to layout simplifies Flutter's development process and improves the overall experience for developers.

<MermaidComponent example={whyItIsBuildUponDart} />

### Performance

Dart is designed for performance and allows ahead-of-time (AOT) compilation to native code, which leads to faster startup times and smoother animations. This is important for mobile applications where users expect a responsive and fluid experience.


### Hot Reload
Dart supports just-in-time (JIT) compilation, which enables the Hot Reload feature in Flutter. Hot Reload allows developers to see the results of their code changes almost instantly, without losing the application state. This significantly improves the development workflow and speeds up the iteration process.

### Ease of learning
Dart is an easy-to-learn language, especially for developers who are already familiar with languages like Java, JavaScript, or C#. Its syntax and language features are intuitive, which helps reduce the learning curve for new developers adopting Flutter.
### Strong typing and sound null safety:
Dart is a statically-typed language with sound null safety. This helps catch potential bugs and errors during compile-time, improving the overall quality of the code and reducing the chances of runtime crashes.
### First-class support:
Since Dart is developed and maintained by Google, it receives first-class support from the Flutter team. This ensures that the language and the framework are designed to work seamlessly together, providing an optimized experience for both development and production.


## Less Knows
### Tree Shaking Capabilities
Tree shaking is a compiler optimization technique that helps reduce the size of the final compiled application by eliminating unused code and libraries.

Tree shaking is especially important for mobile applications where app size is a crucial factor. It ensures that only the necessary code is included in the final build, making the app lighter and quicker to download. Dart's strong static typing and robust tooling support make tree shaking more effective, contributing to smaller and more efficient apps when using Flutter.

### Dart Isolates
It enables concurrent and parallel programming. Isolates provide a way to run multiple independent pieces of code concurrently, without sharing memory. This feature can enhance app performance by leveraging multi-core processors and managing computationally-intensive tasks without blocking the main UI thread.

Isolates can improve the responsiveness of Flutter apps, especially in scenarios involving complex computations, resource-intensive operations, or background tasks. This feature might not be widely discussed, but it contributes to the overall performance and user experience of Flutter applications.
