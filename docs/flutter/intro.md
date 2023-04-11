---
sidebar_position: 1
---

# What is Flutter

Flutter is an open source framework built on top of [Dart Language](/docs/flutter/what-is-dart.md) developed by Google launched in May 2017. It allows developers to build high-quality, natively compiled applications for mobile, web , desktop, smart TVs and Embeded devices(Raspberry Pi and Iot Devices).

## Analytics

![Analytics](./img/Flutter-Usage-Statistics.png)

- More than 36,889 projects were built with Flutter and have been downloaded over 11 Billion times.
- As of February 2023, Flutter has 487,428 repository results this number almost doubled as in 2022
- As of April 2023, Flutter has about [152K Stars](https://github.com/flutter/flutter) on Github and has about [159,751](https://stackoverflow.com/questions/tagged/flutter) questions asked on Stackoverflow

## Whay it is growing so much ?

**1. Best for cross-platform app development.**

> Before Flutter, companies often chose cross-platform development for its cost-effectiveness and faster development time compared to native development, even though cross-platform apps typically lacked in performance and native appearance.
> However, with the introduction of Flutter, it became possible to build apps with performance that was close to native. This means that companies no longer have to choose between cost and quality when deciding on a development approach.

**2. Outstanding performance**

> Flutter apps achieve great performance results, ranging from 60 to 120 frames per second (fps), thanks to the use of Dart as its programming language. Dart is a client-optimized language that supports Ahead-of-Time (AOT) compilation. By running the code natively on each platform without relying on intermediaries, Flutter apps are faster than other cross-platform frameworks which use bridging technology.

**3. Hot Reload**

> Hot reload is a beloved feature among Flutter developers and highly valued by business owners. With hot reload, developers can instantly see the changes made to the code without the need to restart the application. This feature not only saves time but also reduces development costs.Hot reload enables developers to iterate quickly on code changes, identify and fix code errors more efficiently, and experiment more freely, leading to an improved user experience.

**4. Pre-built UI widgets**

> The core UI building blocks for Flutter apps are widgets. Flutter offers an extensive range of built-in widgets, including both stateless widgets such as Icon, IconButton, and Text, as well as stateful widgets like Checkbox, Radio, Slider, InkWell, and Form.

export const Image = ({image}) => (
<img
src={require(`${image}`).default}
alt="Example banner"
width="100"
height="100"
/>
);

## React Native vs Flutter

| Framework                | <Image image="./img/flutter.jpeg" />     | <Image image="./img/react_native.png" /> |
| ------------------------ | ---------------------------------------- | ---------------------------------------- |
| Initial Release          | May 2017                                 | March 2015                               |
| Developed By             | Google                                   | Facebook                                 |
| Programming Language     | Dart                                     | Javascript                               |
| Platform Support         | Android,IOS,Smart TV, Wearables, IOT     | Android,IOS,Web Apps                     |
| App Performance          | Close to native                          | Fairly robust                            |
| Documentation            | Extensive                                | Extensive                                |
| UI                       | Proprietary customized widgets           | Native Component                         |
| Community & support      | Limited, fast growing                    | Extensive                                |
| 60+ fps support          | ✅                                        | Require workarounds                      |
| Code reusability         | ✅                                        | ✅                                        |
| JIT,AOT complication     | ✅                                        | ❌                                        |
| Used By                  | Google, Alibaba, Tencent, Reflectly      | Facebook, Instagram, Uber, Salesforce    |
| **Compilation Langauge** | **Directly to Java, Swift, Objective-C** | **Runs Javascript**                      |

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
