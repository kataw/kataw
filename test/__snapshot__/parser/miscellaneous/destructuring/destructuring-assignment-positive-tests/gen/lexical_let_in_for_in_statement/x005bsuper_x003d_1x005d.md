# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/destructuring/destructuring-assignment-positive-tests/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/destructuring/destructuring-assignment-positive-tests/gen/lexical_let_in_for_in_statement
> :: test: lexical let in for in statement
> :: case: [super = 1]
## Options

`````js
{}
`````
## Input

`````js
'use strict'; let x, y, z; for (x in [super = 1] = {});
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
                        "optionalToken": null,
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
                        "optionalToken": null,
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
                        "optionalToken": null,
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
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 26,
                "end": 30
            },
            "initializer": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 32,
                "end": 33
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 33,
                "end": 36
            },
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
                                        "kind": 225,
                                        "superKeyword": {
                                            "kind": 4259935,
                                            "flags": 96,
                                            "start": 38,
                                            "end": 43
                                        },
                                        "flags": 96,
                                        "start": 38,
                                        "end": 43
                                    },
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "start": 43,
                                        "end": 43
                                    },
                                    "flags": 536870944,
                                    "start": 38,
                                    "end": 43
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 43,
                                    "end": 45
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 45,
                                    "end": 47
                                },
                                "flags": 32,
                                "start": 38,
                                "end": 47
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 38,
                        "end": 47
                    },
                    "flags": 32,
                    "start": 36,
                    "end": 48
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 48,
                    "end": 50
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 52,
                        "end": 52
                    },
                    "flags": 48,
                    "start": 50,
                    "end": 53
                },
                "flags": 32,
                "start": 36,
                "end": 53
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 54,
                "end": 55
            },
            "flags": 80,
            "start": 26,
            "end": 55
        }
    ],
    "isModule": false,
    "source": "'use strict'; let x, y, z; for (x in [super = 1] = {});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 55
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 38, end: 45
✖ Dot property must be an identifier - start: 43, end: 45
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 43, end: 45

```

