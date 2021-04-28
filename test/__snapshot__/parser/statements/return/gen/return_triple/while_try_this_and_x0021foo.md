# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: return triple
> :: case: while try this and !foo
## Input

`````js
return return return while try this and !foo
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
                "flags": 12,
                "start": 6,
                "end": 6
            },
            "flags": 128,
            "start": 0,
            "end": 0
        },
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 6,
                "start": 0,
                "end": 13
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 13,
                "end": 13
            },
            "flags": 128,
            "start": 0,
            "end": 6
        },
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 13,
                "start": 0,
                "end": 20
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 20,
                "end": 20
            },
            "flags": 128,
            "start": 0,
            "end": 13
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 20,
                "start": 0,
                "end": 26
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 26,
                "end": 26
            },
            "statement": {
                "kind": 159,
                "tryKeyword": {
                    "kind": 37757027,
                    "flags": 26,
                    "start": 0,
                    "end": 30
                },
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "multiLine": false,
                        "flags": 128,
                        "start": 30,
                        "end": 30
                    },
                    "flags": 128,
                    "start": 30,
                    "end": 30
                },
                "catchClause": null,
                "finallyKeyword": null,
                "finallyBlock": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "multiLine": false,
                        "flags": 128,
                        "start": 35,
                        "end": 35
                    },
                    "flags": 128,
                    "start": 35,
                    "end": 35
                },
                "flags": 128,
                "start": 26,
                "end": 35
            },
            "flags": 128,
            "start": 20,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "and",
                "rawText": "and",
                "flags": 768,
                "start": 35,
                "end": 39
            },
            "flags": 128,
            "start": 35,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 512,
                    "start": 39,
                    "end": 41
                },
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 768,
                    "start": 41,
                    "end": 44
                },
                "flags": 256,
                "start": 39,
                "end": 44
            },
            "flags": 128,
            "start": 39,
            "end": 44
        }
    ],
    "isModule": false,
    "text": "return return return while try this and !foo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A return statement can only be used within a function_body - start: 0, end: 6
✖ Expression expected - start: 6, end: 13
✖ A return statement can only be used within a function_body - start: 6, end: 13
✖ Expression expected - start: 13, end: 20
✖ A return statement can only be used within a function_body - start: 13, end: 20
✖ Expression expected - start: 20, end: 26
✖ Expression expected - start: 26, end: 30

```

