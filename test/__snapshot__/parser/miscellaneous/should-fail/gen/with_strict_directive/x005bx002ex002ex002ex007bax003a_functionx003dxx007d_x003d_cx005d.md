# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-fail\gen\with_strict_directive
> :: test: with strict directive
> :: case: [...{a: function=x} = c]
## Input

`````js
"use strict"; [...{a: function=x} = c]
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 15,
                                "end": 18
                            },
                            "argument": {
                                "kind": 125,
                                "left": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "generatorToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 19,
                                                    "end": 20
                                                },
                                                "right": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 177,
                                                        "asyncKeyword": null,
                                                        "functionKeyword": {
                                                            "kind": 37822554,
                                                            "flags": 64,
                                                            "start": 21,
                                                            "end": 30
                                                        },
                                                        "generatorToken": null,
                                                        "name": null,
                                                        "formalParameters": {
                                                            "kind": 214,
                                                            "formalParameterList": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 30,
                                                            "end": 30
                                                        },
                                                        "contents": {
                                                            "kind": 216,
                                                            "functionStatementList": {
                                                                "kind": 217,
                                                                "directives": [],
                                                                "statements": [],
                                                                "flags": 32,
                                                                "start": 30,
                                                                "end": 30
                                                            },
                                                            "flags": 32,
                                                            "start": 30,
                                                            "end": 30
                                                        },
                                                        "typeParameters": null,
                                                        "returnType": null,
                                                        "flags": 32,
                                                        "start": 21,
                                                        "end": 30
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 64,
                                                        "start": 30,
                                                        "end": 31
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 31,
                                                        "end": 32
                                                    },
                                                    "flags": 32,
                                                    "start": 19,
                                                    "end": 32
                                                },
                                                "flags": 32,
                                                "start": 19,
                                                "end": 32
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 19,
                                        "end": 32
                                    },
                                    "flags": 48,
                                    "start": 18,
                                    "end": 33
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 33,
                                    "end": 35
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 35,
                                    "end": 37
                                },
                                "flags": 32,
                                "start": 18,
                                "end": 37
                            },
                            "flags": 32,
                            "start": 15,
                            "end": 37
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 15,
                    "end": 37
                },
                "flags": 32,
                "start": 13,
                "end": 38
            },
            "flags": 16,
            "start": 13,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; [...{a: function=x} = c]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 30, end: 31
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 30, end: 31
✖ The left-hand side must be a variable or a property access. - start: 18, end: 35

```

