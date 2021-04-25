# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: case stand alone
> :: case: while try this and !foo
## Input

`````js
case while try this and !foo
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 768,
                "start": 4,
                "end": 10
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 10,
                "end": 10
            },
            "statement": {
                "kind": 159,
                "tryKeyword": {
                    "kind": 37757027,
                    "flags": 768,
                    "start": 10,
                    "end": 14
                },
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "multiLine": false,
                        "flags": 128,
                        "start": 14,
                        "end": 14
                    },
                    "flags": 128,
                    "start": 14,
                    "end": 14
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
                        "start": 19,
                        "end": 19
                    },
                    "flags": 128,
                    "start": 19,
                    "end": 19
                },
                "flags": 128,
                "start": 10,
                "end": 19
            },
            "flags": 128,
            "start": 4,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "and",
                "rawText": "and",
                "flags": 768,
                "start": 19,
                "end": 23
            },
            "flags": 128,
            "start": 19,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 768,
                    "start": 23,
                    "end": 25
                },
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 768,
                    "start": 25,
                    "end": 28
                },
                "flags": 256,
                "start": 23,
                "end": 28
            },
            "flags": 128,
            "start": 23,
            "end": 28
        }
    ],
    "isModule": false,
    "text": "case while try this and !foo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Statement expected - start: 0, end: 4
@{x2716}@ Unexpected token. - start: 10, end: 14
@{x2716}@ Expression expected - start: 10, end: 14
@{x2716}@ Unexpected token. - start: 10, end: 14
@{x2716}@ Unexpected token. - start: 14, end: 19
@{x2716}@ Unexpected token. - start: 14, end: 19
@{x2716}@ Unexpected token. - start: 19, end: 23
@{x2716}@ Unexpected token. - start: 23, end: 25

```

