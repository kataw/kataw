# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/do-while/gen/do_with_invalid_array
> :: test: do with invalid array
> :: case: async funcion switch!!
## Options

`````js
{}
`````
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
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "statement": {
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 80,
                    "transformFlags": 0,
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
                        "transformFlags": 0,
                        "start": 10,
                        "end": 10
                    },
                    "flags": 32,
                    "transformFlags": 8,
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
                            "transformFlags": 0,
                            "start": 10,
                            "end": 10
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 10
                    },
                    "catchClause": {
                        "kind": 173,
                        "catchKeyword": {
                            "kind": 4202575,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 15
                        },
                        "catchParameter": null,
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 15
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 15
                        },
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 15
                    },
                    "finallyKeyword": null,
                    "finallyBlock": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 15
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 2,
                "end": 15
            },
            "whileKeyword": null,
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 15,
                "end": 15
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 22
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "funcion",
                    "rawText": "funcion",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 30
                },
                "returnType": null,
                "arrowToken": null,
                "contents": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 30
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 16,
                "end": 30
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 16,
            "end": 30
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 80,
                "transformFlags": 0,
                "start": 30,
                "end": 37
            },
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 37,
                    "end": 38
                },
                "operand": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 38,
                        "end": 39
                    },
                    "operand": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 39,
                        "end": 39
                    },
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 38,
                    "end": 39
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 37,
                "end": 39
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 39,
                "end": 39
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 30,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "do while [catch] async funcion switch!!",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 9, end: 10
✖ Did you forgot a ']' to match the `[` token? - start: 10, end: 15
✖ 'try' expected - start: 10, end: 15
✖ Missing an opening parentheses - '( - start: 15, end: 16
✖ 'async' modifier cannot be used here - start: 30, end: 37
✖ Identifier expected - start: 30, end: 37
✖ Missing an opening parentheses - '( - start: 37, end: 38
✖ Identifier expected - start: 39, end: 39

```

