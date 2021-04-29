# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: return return
> :: case: while try this and !foo
## Input

`````js
return while try this and !foo return
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 6,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 0
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 6,
                "end": 12
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 12,
                "end": 12
            },
            "statement": {
                "kind": 159,
                "tryKeyword": {
                    "kind": 37757027,
                    "flags": 0,
                    "start": 12,
                    "end": 16
                },
                "block": {
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
                "catchClause": null,
                "finallyKeyword": null,
                "finallyBlock": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "flags": 16,
                        "start": 21,
                        "end": 21
                    },
                    "flags": 16,
                    "start": 21,
                    "end": 21
                },
                "flags": 16,
                "start": 12,
                "end": 21
            },
            "flags": 16,
            "start": 6,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "and",
                "rawText": "and",
                "flags": 96,
                "start": 21,
                "end": 25
            },
            "flags": 16,
            "start": 21,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 64,
                    "start": 25,
                    "end": 27
                },
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 27,
                    "end": 30
                },
                "flags": 32,
                "start": 25,
                "end": 30
            },
            "flags": 16,
            "start": 25,
            "end": 30
        },
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 0,
                "start": 30,
                "end": 37
            },
            "expression": null,
            "flags": 16,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "return while try this and !foo return",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A return statement can only be used within a function_body - start: 0, end: 6
✖ Expression expected - start: 6, end: 12
✖ Expression expected - start: 12, end: 16
✖ A return statement can only be used within a function_body - start: 30, end: 37

```

