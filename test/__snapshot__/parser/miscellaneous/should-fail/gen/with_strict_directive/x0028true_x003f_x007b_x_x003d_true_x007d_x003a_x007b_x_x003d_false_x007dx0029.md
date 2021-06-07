# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-fail\gen\with_strict_directive
> :: test: with strict directive
> :: case: (true ? { x = true } : { x = false })
## Input

`````js
"use strict"; (true ? { x = true } : { x = false })
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
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 24752947,
                        "flags": 96,
                        "start": 15,
                        "end": 19
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 64,
                        "start": 19,
                        "end": 21
                    },
                    "consequent": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 205,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 23,
                                        "end": 25
                                    },
                                    "right": {
                                        "kind": 24752947,
                                        "flags": 96,
                                        "start": 27,
                                        "end": 32
                                    },
                                    "flags": 32,
                                    "start": 23,
                                    "end": 32
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 23,
                            "end": 32
                        },
                        "flags": 48,
                        "start": 21,
                        "end": 34
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 64,
                        "start": 34,
                        "end": 36
                    },
                    "alternate": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 205,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 38,
                                        "end": 40
                                    },
                                    "right": {
                                        "kind": 205586437,
                                        "flags": 96,
                                        "start": 42,
                                        "end": 48
                                    },
                                    "flags": 32,
                                    "start": 38,
                                    "end": 48
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 38,
                            "end": 48
                        },
                        "flags": 48,
                        "start": 36,
                        "end": 50
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 50
                },
                "flags": 32,
                "start": 13,
                "end": 51
            },
            "flags": 16,
            "start": 13,
            "end": 51
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; (true ? { x = true } : { x = false })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring - start: 34, end: 36
✖ Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring - start: 50, end: 51

```

