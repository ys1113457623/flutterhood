---
title: Operators
sidebar_position: 3
---

import MermaidComponent from '@site/src/components/MermaidComponent';
import { dartOperatorUnderTheHood } from './const.js';


export const Table = () => (
  <table class="table table-striped">
  <thead>
    <tr>
      <th>Description</th>
      <th>Operator</th>
      <th>Associativity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>unary postfix</td>
      <td>
<code><em>expr</em>++</code> &nbsp;&nbsp; <code><em>expr</em>--</code> &nbsp;&nbsp; <code>()</code> &nbsp;&nbsp; <code >[]</code> &nbsp;&nbsp; <code >?[]</code> &nbsp;&nbsp; <code >.</code> &nbsp;&nbsp; <code >?.</code> &nbsp;&nbsp; <code >!</code>
</td>
      <td>None</td>
    </tr>
    <tr>
      <td>unary prefix</td>
      <td>
<code>-<em>expr</em></code> &nbsp;&nbsp; <code>!<em>expr</em></code> &nbsp;&nbsp; <code>~<em>expr</em></code> &nbsp;&nbsp; <code>++<em>expr</em></code> &nbsp;&nbsp; <code>--<em>expr</em></code> &nbsp;&nbsp;&nbsp;&nbsp; <code>await <em>expr</em></code> &nbsp;&nbsp;</td>
      <td>None</td>
    </tr>
    <tr>
      <td>multiplicative</td>
      <td>
<code >*</code> &nbsp;&nbsp; <code >/</code> &nbsp;&nbsp; <code >%</code>   &nbsp;<code >~/</code>
</td>
      <td>Left</td>
    </tr>
    <tr>
      <td>additive</td>
      <td>
<code >+</code> &nbsp;&nbsp; <code >-</code>
</td>
      <td>Left</td>
    </tr>
    <tr>
      <td>shift</td>
      <td>
<code >&lt;&lt;</code> &nbsp;&nbsp; <code >&gt;&gt;</code> &nbsp;&nbsp; <code >&gt;&gt;&gt;</code>
</td>
      <td>Left</td>
    </tr>
    <tr>
      <td>bitwise AND</td>
      <td><code >&amp;</code></td>
      <td>Left</td>
    </tr>
    <tr>
      <td>bitwise XOR</td>
      <td><code >^</code></td>
      <td>Left</td>
    </tr>
    <tr>
      <td>bitwise OR</td>
      <td><code >|</code></td>
      <td>Left</td>
    </tr>
    <tr>
      <td>relational&nbsp;and&nbsp;type&nbsp;test</td>
      <td>
<code >&gt;=</code> &nbsp;&nbsp; <code >&gt;</code> &nbsp;&nbsp; <code >&lt;=</code> &nbsp;&nbsp; <code >&lt;</code> &nbsp;&nbsp; <code >as</code> &nbsp;&nbsp; <code >is</code> &nbsp;&nbsp; <code >is!</code>
</td>
      <td>None</td>
    </tr>
    <tr>
      <td>equality</td>
      <td>
<code >==</code> &nbsp;&nbsp; <code >!=</code> &nbsp;&nbsp;</td>
      <td>None</td>
    </tr>
    <tr>
      <td>logical AND</td>
      <td><code >&amp;&amp;</code></td>
      <td>Left</td>
    </tr>
    <tr>
      <td>logical OR</td>
      <td><code >||</code></td>
      <td>Left</td>
    </tr>
    <tr>
      <td>if null</td>
      <td><code >??</code></td>
      <td>Left</td>
    </tr>
    <tr>
      <td>conditional</td>
      <td><code><em>expr1</em> ? <em>expr2</em> : <em>expr3</em></code></td>
      <td>Right</td>
    </tr>
    <tr>
      <td>cascade</td>
      <td>
<code >..</code> &nbsp;&nbsp; <code >?..</code>
</td>
      <td>Left</td>
    </tr>
    <tr>
      <td>assignment</td>
      <td>
<code >=</code> &nbsp;&nbsp; <code >*=</code> &nbsp;&nbsp; <code >/=</code>  &nbsp;&nbsp;<code >+=</code>  &nbsp;&nbsp;<code >-=</code>  &nbsp;&nbsp;<code >&amp;=</code>  &nbsp;&nbsp;<code >^=</code>  &nbsp;&nbsp;<em>etc.</em>
</td>
      <td>Right</td>
    </tr>
    <tr>
      <td>type test</td>
      <td><code >is</code> &nbsp;&nbsp;<code >!is</code></td>
      <td>Left</td>
    </tr>
  </tbody>
</table>
);

## Intro

<Table />

## Operator under the hood

<MermaidComponent example={dartOperatorUnderTheHood} />

Dart operators work under the hood by translating the operations into lower-level instructions that are executed by the Dart runtime or compiled code, depending on the execution mode. While the exact implementation details may vary, here is a high-level overview of how operators work in Dart:

1. **Parsing and tokenization**: When you write Dart code that uses operators, the code is first parsed and tokenized by the Dart compiler. This process breaks the code into tokens, which represent the smallest meaningful units in the code. Operators, along with other language constructs, are identified as tokens during this phase.

2. **Compilation or interpretation**: Depending on the execution mode (AOT, JIT, or interpreted), the Dart code is either compiled ahead of time or just-in-time, or it's interpreted at runtime. During this process, the operators in the code are translated into lower-level instructions that can be executed by the Dart runtime or the target platform (e.g., native code for mobile apps).

3. **Execution**: When the Dart code is executed, the operators perform their corresponding operations on the values or variables specified as operands. The Dart runtime or compiled code handles the operator execution, taking care of the necessary type checks, memory management, and error handling. The result of the operator's operation is then used in the program as required.

For example, consider the following Dart code that uses the addition operator:

```dart
int a = 5;
int b = 10;
int sum = a + b;
```

During parsing and tokenization, the Dart compiler identifies the addition operator (`+`). During compilation or interpretation, the addition operation is translated into lower-level instructions. When the code is executed, the values of `a` and `b` are added together, and the result is assigned to the variable `sum`.

The exact implementation details of operators in Dart may vary depending on the language version, execution mode, and target platform, but this high-level overview should give you a general understanding of how operators work under the hood in Dart.

