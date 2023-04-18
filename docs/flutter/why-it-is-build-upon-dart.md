---
sidebar_position: 2
---

# Why Flutter Uses Dart
Flutter uses Dart because it allows the framework to avoid using a separate declarative layout language such as JSX or XML. Dart's layout is both declarative and programmatic, making it easy for developers to read and quickly visualize. This eliminates the need for a separate markup language and enables developers to write more expressive, efficient, and maintainable code. In summary, Dart's declarative and programmatic approach to layout simplifies Flutter's development process and improves the overall experience for developers.

### Combines Ahead-of-Time and Just-in-Time Compilation 

In the initial days of Flutter it used four primary dimensions for evaluation, and considered the needs of framework authors, developers, and end users

Dart runtimes and compilers support the combination of two critical features for Flutter: a JIT-based fast development cycle that allows for shape changing and stateful hot reloads in a language with types, plus an Ahead-of-Time compiler that emits efficient ARM code for fast startup and predictable performance of production deployments.


### Eliminates XML Files
Because Dart’s layout is easy to read and visualize, Flutter doesn’t require a separate language for its layout, like XML. Flutter also has advanced tooling as everything is in one language and in one place.

### Eliminates the JavaScript Bridge
Dart’s direct compilation and execution into native code without an intermediary bridge (e.g., JavaScript to Native) allows for hitchless animations on a user’s gadget, as well as smoother user interfaces running at 60fps. Additionally, Dart is able to perform object allocation and garbage collection without the need to acquire locks.

### Scaffolding
The scaffold in Flutter is noticeably different from the scaffolds in iOS or React Native or Android UI. One key difference is that it stretches to fill in the space available. This typically results in the scaffold taking up the entire screen of the device window.

The scaffold has APIs for an app bar, drawers, floating buttons, and the bottom sheets so that the primary content design’s graphic interface can be enforced.

### Incorporates HTTP
The Dart programming language uses an abstraction called Future to host HTTP resources from the internet. The http.get() function returns a Future that contains a Response. The Future class is used in Dart to deal with asynchronous functions, and a future object reflects a possible value or error that will be visible in the Future at some point.

---
### Less Knows

One reason that may be less known to developers is that Flutter's creators chose to use Dart because it allowed them to achieve their vision of building a high-performance and expressive framework. Dart was designed with a modern and flexible syntax, and it includes features that enable Flutter to provide a rich set of widgets and tools for developers to build beautiful and responsive user interfaces.
Furthermore, Dart's architecture allows Flutter to use a unique approach to layout and rendering that is optimized for performance and customizability. This approach involves using a reactive programming model with a high-performance rendering engine that provides fast and smooth animations and transitions, even on low-end devices.

