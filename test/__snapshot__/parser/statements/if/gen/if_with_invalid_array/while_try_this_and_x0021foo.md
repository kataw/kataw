# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: if with invalid array
> :: case: while try this and !foo
## Input

`````js
if [else] while try this and !foo
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 4,
                    "end": 4
                },
                "flags": 32,
                "start": 2,
                "end": 4
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 4,
                    "end": 4
                },
                "flags": 16,
                "start": 4,
                "end": 4
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 64,
                "start": 4,
                "end": 8
            },
            "alternate": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 8,
                    "end": 8
                },
                "flags": 16,
                "start": 8,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 8
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 9,
                "end": 15
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 15,
                "end": 15
            },
            "statement": {
                "kind": 159,
                "tryKeyword": {
                    "kind": 37757027,
                    "flags": 0,
                    "start": 15,
                    "end": 19
                },
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "multiLine": false,
                        "flags": 16,
                        "start": 19,
                        "end": 19
                    },
                    "flags": 16,
                    "start": 19,
                    "end": 19
                },
                "catchClause": null,
                "finallyKeyword": null,
                "finallyBlock": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "multiLine": false,
                        "flags": 16,
                        "start": 24,
                        "end": 24
                    },
                    "flags": 16,
                    "start": 24,
                    "end": 24
                },
                "flags": 16,
                "start": 15,
                "end": 24
            },
            "flags": 16,
            "start": 9,
            "end": 24
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "and",
                "rawText": "and",
                "flags": 96,
                "start": 24,
                "end": 28
            },
            "flags": 16,
            "start": 24,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 64,
                    "start": 28,
                    "end": 30
                },
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 30,
                    "end": 33
                },
                "flags": 32,
                "start": 28,
                "end": 33
            },
            "flags": 16,
            "start": 28,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "if [else] while try this and !foo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 4, end: 8
✖ Expression expected - start: 8, end: 9
✖ Statement expected - start: 8, end: 9
✖ Expression expected - start: 15, end: 19

```

