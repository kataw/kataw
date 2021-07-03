# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/destructuring/destructuring-assignment-negative-tests/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/destructuring/destructuring-assignment-negative-tests/gen/lexical_let
> :: test: lexical let
> :: case: [super = 1]
## Options

`````js
{}
`````
## Input

`````js
'use strict'; let x, y, z; ([super = 1]= {});
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
            "rawText": "'use strict'",
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 13,
                "end": 17
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 17,
                            "end": 19
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 17,
                        "end": 19
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 20,
                            "end": 22
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 20,
                        "end": 22
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 23,
                            "end": 25
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 23,
                        "end": 25
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 25
            },
            "flags": 33554448,
            "start": 13,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 4259935,
                                            "flags": 96,
                                            "start": 29,
                                            "end": 34
                                        },
                                        "expression": {
                                            "kind": 16637,
                                            "text": "",
                                            "rawText": "",
                                            "flags": 64,
                                            "start": 34,
                                            "end": 34
                                        },
                                        "flags": 32,
                                        "start": 29,
                                        "end": 34
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "start": 34,
                                        "end": 36
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 36,
                                        "end": 38
                                    },
                                    "flags": 32,
                                    "start": 29,
                                    "end": 38
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 29,
                            "end": 38
                        },
                        "flags": 32,
                        "start": 28,
                        "end": 39
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 39,
                        "end": 40
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 42,
                            "end": 42
                        },
                        "flags": 48,
                        "start": 40,
                        "end": 43
                    },
                    "flags": 32,
                    "start": 28,
                    "end": 43
                },
                "flags": 26,
                "start": 34,
                "end": 44
            },
            "flags": 16,
            "start": 26,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "'use strict'; let x, y, z; ([super = 1]= {});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 29, end: 36
✖ Dot property must be an identifier - start: 34, end: 36
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 34, end: 36

```

