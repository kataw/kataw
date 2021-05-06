# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
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
                "kind": 134299649,
                "text": "funcion",
                "rawText": "funcion",
                "flags": 96,
                "start": 22,
                "end": 30
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
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [],
                            "flags": 16,
                            "start": 15,
                            "end": 15
                        },
                        "flags": 16,
                        "start": 15,
                        "end": 15
                    },
                    "catchClause": null,
                    "finallyKeyword": null,
                    "finallyBlock": {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [],
                            "flags": 16,
                            "start": 16,
                            "end": 16
                        },
                        "flags": 16,
                        "start": 16,
                        "end": 16
                    },
                    "flags": 16,
                    "start": 10,
                    "end": 16
                },
                "flags": 16,
                "start": 2,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 30
        },
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
                "expression": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 64,
                        "start": 38,
                        "end": 39
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
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
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Did you forgot a ']' to match the `[` token? - start: 10, end: 15
✖ 'try' expected - start: 10, end: 15
✖ Expected a ')' to match the '(' token here - start: 30, end: 37
✖ Expression expected - start: 39, end: 39

```

