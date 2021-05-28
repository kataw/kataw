# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: y
> :: test: do with invalid array
> :: case: async funcion switch!!
## Input

`````js
do while [catch] async funcion switch!!
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 15,
                "end": 15
            },
            "whileKeyword": null,
            "statement": {
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 0,
                    "start": 2,
                    "end": 8
                },
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 10,
                        "end": 10
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 10
                },
                "statement": {
                    "kind": 159,
                    "tryKeyword": null,
                    "block": {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [],
                            "flags": 16,
                            "start": 10,
                            "end": 10
                        },
                        "flags": 16,
                        "start": 10,
                        "end": 10
                    },
                    "catchClause": {
                        "kind": 173,
                        "catchKeyword": {
                            "kind": 4202575,
                            "flags": 0,
                            "start": 10,
                            "end": 15
                        },
                        "catchParameter": null,
                        "initializer": null,
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 15,
                                "end": 15
                            },
                            "flags": 16,
                            "start": 15,
                            "end": 15
                        },
                        "flags": 16,
                        "start": 10,
                        "end": 15
                    },
                    "finallyKeyword": null,
                    "finallyBlock": null,
                    "flags": 16,
                    "start": 10,
                    "end": 15
                },
                "flags": 16,
                "start": 2,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": null,
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "funcion",
                    "rawText": "funcion",
                    "flags": 96,
                    "start": 22,
                    "end": 30
                },
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 16,
                    "end": 22
                },
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 160,
                                "switchKeyword": {
                                    "kind": 37757024,
                                    "flags": 0,
                                    "start": 30,
                                    "end": 37
                                },
                                "expression": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 65584,
                                        "flags": 64,
                                        "start": 37,
                                        "end": 38
                                    },
                                    "operand": {
                                        "kind": 126,
                                        "operandToken": {
                                            "kind": 65584,
                                            "flags": 64,
                                            "start": 38,
                                            "end": 39
                                        },
                                        "operand": {
                                            "kind": 16637,
                                            "text": "",
                                            "flags": 64,
                                            "start": 39,
                                            "end": 39
                                        },
                                        "flags": 32,
                                        "start": 38,
                                        "end": 39
                                    },
                                    "flags": 32,
                                    "start": 37,
                                    "end": 39
                                },
                                "caseBlock": {
                                    "kind": 152,
                                    "clauses": [],
                                    "flags": 16,
                                    "start": 39,
                                    "end": 39
                                },
                                "flags": 16,
                                "start": 30,
                                "end": 39
                            }
                        ],
                        "flags": 32,
                        "start": 30,
                        "end": 39
                    },
                    "flags": 32,
                    "start": 30,
                    "end": 39
                },
                "flags": 288,
                "start": 16,
                "end": 39
            },
            "flags": 16,
            "start": 16,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "do while [catch] async funcion switch!!",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 8, end: 10
✖ Did you forgot a ']' to match the `[` token? - start: 10, end: 15
✖ 'try' expected - start: 10, end: 15
✖ Missing an opening parentheses - '( - start: 15, end: 16
✖ Missing an opening parentheses - '( - start: 37, end: 38
✖ Identifier expected - start: 39, end: 39

```

