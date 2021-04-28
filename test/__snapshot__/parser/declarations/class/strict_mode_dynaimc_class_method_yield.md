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

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 768,
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
                "flags": 13,
                "start": 1,
                "end": 19
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 19,
                "end": 21
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 194,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 768,
                                    "start": 23,
                                    "end": 28
                                },
                                "flags": 256,
                                "start": 22,
                                "end": 29
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 30,
                                            "end": 31
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 30,
                                        "end": 31
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 30,
                                "end": 32
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 33,
                                    "end": 33
                                },
                                "flags": 256,
                                "start": 32,
                                "end": 34
                            },
                            "flags": 0,
                            "start": 29,
                            "end": 34
                        },
                        "flags": 0,
                        "start": 22,
                        "end": 34
                    }
                ],
                "flags": 256,
                "start": 22,
                "end": 35
            },
            "flags": 128,
            "start": 13,
            "end": 35
        }
    ],
    "isModule": false,
    "text": "\"use strict\";\nclass x{[yield](a){}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

