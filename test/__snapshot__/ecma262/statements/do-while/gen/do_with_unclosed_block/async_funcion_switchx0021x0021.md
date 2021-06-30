# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/do-while/gen/do_with_unclosed_block
> :: test: do with unclosed block
> :: case: async funcion switch!!
## Options

`````js
{}
`````
## Input

`````js
do {} while (x) { async funcion switch!!
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
                "start": 0,
                "end": 2
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 4,
                    "end": 4
                },
                "flags": 16,
                "start": 2,
                "end": 5
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 64,
                "start": 5,
                "end": 11
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 13,
                "end": 14
            },
            "flags": 80,
            "start": 0,
            "end": 15
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 17,
                                "end": 23
                            },
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 134299649,
                                "text": "funcion",
                                "rawText": "funcion",
                                "flags": 96,
                                "start": 23,
                                "end": 31
                            },
                            "returnType": null,
                            "arrowToken": null,
                            "contents": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
                                "start": 31,
                                "end": 31
                            },
                            "flags": 288,
                            "start": 17,
                            "end": 31
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 31
                    },
                    {
                        "kind": 160,
                        "switchKeyword": {
                            "kind": 37757024,
                            "flags": 80,
                            "start": 31,
                            "end": 38
                        },
                        "expression": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 65584,
                                "flags": 96,
                                "start": 38,
                                "end": 39
                            },
                            "operand": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 65584,
                                    "flags": 96,
                                    "start": 39,
                                    "end": 40
                                },
                                "operand": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "start": 40,
                                    "end": 40
                                },
                                "flags": 32,
                                "start": 39,
                                "end": 40
                            },
                            "flags": 32,
                            "start": 38,
                            "end": 40
                        },
                        "caseBlock": {
                            "kind": 152,
                            "clauses": [],
                            "flags": 16,
                            "start": 40,
                            "end": 40
                        },
                        "flags": 80,
                        "start": 31,
                        "end": 40
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 40
            },
            "flags": 16,
            "start": 15,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "do {} while (x) { async funcion switch!!",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'async' modifier cannot be used here - start: 31, end: 38
✖ Identifier expected - start: 31, end: 38
✖ Missing an opening parentheses - '( - start: 38, end: 39
✖ Identifier expected - start: 40, end: 40

```

