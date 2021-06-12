# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: [...{a: function=x} = c]
## Options

`````js
{}
`````
## Input

`````js
{ [...{a: function=x} = c] }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
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
                                            "start": 3,
                                            "end": 6
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
                                                                "start": 7,
                                                                "end": 8
                                                            },
                                                            "right": {
                                                                "kind": 125,
                                                                "left": {
                                                                    "kind": 177,
                                                                    "asyncKeyword": null,
                                                                    "functionKeyword": {
                                                                        "kind": 37822554,
                                                                        "flags": 64,
                                                                        "start": 9,
                                                                        "end": 18
                                                                    },
                                                                    "generatorToken": null,
                                                                    "name": null,
                                                                    "formalParameters": {
                                                                        "kind": 214,
                                                                        "formalParameterList": [],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 18,
                                                                        "end": 18
                                                                    },
                                                                    "contents": {
                                                                        "kind": 216,
                                                                        "functionStatementList": {
                                                                            "kind": 217,
                                                                            "directives": [],
                                                                            "statements": [],
                                                                            "flags": 32,
                                                                            "start": 18,
                                                                            "end": 18
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 18,
                                                                        "end": 18
                                                                    },
                                                                    "typeParameters": null,
                                                                    "returnType": null,
                                                                    "flags": 32,
                                                                    "start": 9,
                                                                    "end": 18
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 4125,
                                                                    "flags": 64,
                                                                    "start": 18,
                                                                    "end": 19
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "start": 19,
                                                                    "end": 20
                                                                },
                                                                "flags": 32,
                                                                "start": 7,
                                                                "end": 20
                                                            },
                                                            "flags": 32,
                                                            "start": 7,
                                                            "end": 20
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 16,
                                                    "start": 7,
                                                    "end": 20
                                                },
                                                "flags": 48,
                                                "start": 6,
                                                "end": 21
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 64,
                                                "start": 21,
                                                "end": 23
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 96,
                                                "start": 23,
                                                "end": 25
                                            },
                                            "flags": 32,
                                            "start": 6,
                                            "end": 25
                                        },
                                        "flags": 32,
                                        "start": 3,
                                        "end": 25
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 3,
                                "end": 25
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 26
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 26
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "{ [...{a: function=x} = c] }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 18, end: 19
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 18, end: 19
✖ The left-hand side must be a variable or a property access. - start: 6, end: 23

```

