# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\do-while\gen\do_stand_alone
> :: test: do stand alone
> :: case: try { !xxx
## Input

`````js
do try { !xxx
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
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 13,
                "end": 13
            },
            "whileKeyword": null,
            "statement": {
                "kind": 159,
                "tryKeyword": {
                    "kind": 37757027,
                    "flags": 80,
                    "start": 2,
                    "end": 6
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 65584,
                                        "flags": 64,
                                        "start": 8,
                                        "end": 10
                                    },
                                    "operand": {
                                        "kind": 134299649,
                                        "text": "xxx",
                                        "rawText": "xxx",
                                        "flags": 96,
                                        "start": 10,
                                        "end": 13
                                    },
                                    "flags": 32,
                                    "start": 8,
                                    "end": 13
                                },
                                "flags": 16,
                                "start": 8,
                                "end": 13
                            }
                        ],
                        "flags": 16,
                        "start": 8,
                        "end": 13
                    },
                    "flags": 16,
                    "start": 6,
                    "end": 13
                },
                "catchClause": null,
                "finallyKeyword": null,
                "finallyBlock": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 13,
                        "end": 13
                    },
                    "flags": 16,
                    "start": 13,
                    "end": 13
                },
                "flags": 16,
                "start": 2,
                "end": 13
            },
            "flags": 80,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "do try { !xxx",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 13, end: 13

```

