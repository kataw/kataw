# Kataw parser test case

## Input

`````js
"use strict";
class x{[yield](a){}}
`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "\"use strict\"",
            "flags": 96,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 13,
                "end": 19
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 19,
                "end": 21
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 28
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 29
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 30,
                                            "end": 31
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 30,
                                    "end": 32
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 33
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 34
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 34
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 34
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 34
                },
                "flags": 21,
                "transformFlags": 0,
                "start": 32,
                "end": 35
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 13,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "\"use strict\";\nclass x{[yield](a){}}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

"\"use strict\"";
class x {
  [yield](a) {}
}
```

### Diagnostics

```javascript
✔ No errors
```

