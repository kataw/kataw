# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/destructuring-assignment-positive-tests/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/destructuring-assignment-positive-tests/gen/lexical_let_in_for_in_statement
> :: test: lexical let in for in statement
> :: case: { x: async function() {} }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; let x, y, z; for (x in { x: async function() {} } = {});
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
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 38,
                                    "end": 40
                                },
                                "right": {
                                    "kind": 177,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 41,
                                        "end": 47
                                    },
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "start": 47,
                                        "end": 56
                                    },
                                    "asteriskToken": null,
                                    "name": null,
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 57,
                                        "end": 57
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 60,
                                            "end": 60
                                        },
                                        "flags": 32,
                                        "start": 58,
                                        "end": 61
                                    },
                                    "returnType": null,
                                    "flags": 160,
                                    "start": 41,
                                    "end": 61
                                },
                                "flags": 32,
                                "start": 38,
                                "end": 61
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 38,
                        "end": 61
                    },
                    "flags": 48,
                    "start": 36,
                    "end": 63
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 63,
                    "end": 65
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 67,
                        "end": 67
                    },
                    "flags": 48,
                    "start": 65,
                    "end": 68
                },
                "flags": 32,
                "start": 36,
                "end": 68
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 69,
                "end": 70
            },
            "flags": 80,
            "start": 26,
            "end": 70
        }
    ],
    "isModule": false,
    "source": "'use strict'; let x, y, z; for (x in { x: async function() {} } = {});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 70
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side must be a variable or a property access. - start: 36, end: 65

```

