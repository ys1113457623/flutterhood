export const whatIsDart = `gantt
dateFormat  YYYY-MM-DD
title Dart Timeline

section Dart Development
Dart Language Announced     :active,    2011-10-10, 60d
Dart 1.0 Released           :completed, 2013-11-14, 30d
Dart 2.0 Announced          :completed, 2018-02-28, 30d
Dart 2.0 Released           :completed, 2018-08-07, 30d
Sound Null Safety Released  :completed, 2020-11-18, 30d
Dart 2.12 Released          :completed, 2021-03-03, 30d`;

export const whyItIsBuildUponDart = `graph LR
A[Flutter] --> B[Dart]

B --> C(Fast Execution)
C --> Ca(JIT)
C --> Cb(AOT)

B --> D(Strong Typing)
B --> E(Productive Development)
E --> Ea(Hot Reload)
E --> Eb(Hot Restart)

B --> F(Easy Learning Curve)
F --> Fa(Flutterhood)
`;