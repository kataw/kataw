# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: switch with invalid array
> :: case: while try this and !foo
## Input

`````js
switch [catch] while try this and !foo
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 8,
                    "end": 8
                },
                "flags": 256,
                "start": 6,
                "end": 8
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 128,
                "start": 8,
                "end": 8
            },
            "flags": 128,
            "start": 0,
            "end": 8
        },
        {
            "kind": 159,
            "tryKeyword": null,
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 13,
                    "end": 13
                },
                "flags": 128,
                "start": 13,
                "end": 13
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
                    "start": 14,
                    "end": 14
                },
                "flags": 128,
                "start": 14,
                "end": 14
            },
            "flags": 128,
            "start": 8,
            "end": 14
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 768,
                "start": 14,
                "end": 20
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 20,
                "end": 20
            },
            "statement": {
                "kind": 159,
                "tryKeyword": {
                    "kind": 37757027,
                    "flags": 768,
                    "start": 20,
                    "end": 24
                },
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "multiLine": false,
                        "flags": 128,
                        "start": 24,
                        "end": 24
                    },
                    "flags": 128,
                    "start": 24,
                    "end": 24
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
                        "start": 29,
                        "end": 29
                    },
                    "flags": 128,
                    "start": 29,
                    "end": 29
                },
                "flags": 128,
                "start": 20,
                "end": 29
            },
            "flags": 128,
            "start": 14,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "and",
                "rawText": "and",
                "flags": 768,
                "start": 29,
                "end": 33
            },
            "flags": 128,
            "start": 29,
            "end": 33
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 768,
                    "start": 33,
                    "end": 35
                },
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 768,
                    "start": 35,
                    "end": 38
                },
                "flags": 256,
                "start": 33,
                "end": 38
            },
            "flags": 128,
            "start": 33,
            "end": 38
        }
    ],
    "isModule": false,
    "text": "switch [catch] while try this and !foo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 6, end: 8
@{x2716}@ Unexpected token. - start: 8, end: 13
@{x2716}@ Unexpected token. - start: 8, end: 13
@{x2716}@ Unexpected token. - start: 8, end: 13
@{x2716}@ Unexpected token. - start: 8, end: 13
@{x2716}@ Unexpected token. - start: 8, end: 13
@{x2716}@ Unexpected token. - start: 13, end: 14
@{x2716}@ Unexpected token. - start: 13, end: 14
@{x2716}@ Unexpected token. - start: 14, end: 20
@{x2716}@ Unexpected token. - start: 20, end: 24
@{x2716}@ Expression expected - start: 20, end: 24
@{x2716}@ Unexpected token. - start: 20, end: 24
@{x2716}@ Unexpected token. - start: 24, end: 29
@{x2716}@ Unexpected token. - start: 24, end: 29
@{x2716}@ Unexpected token. - start: 29, end: 33
@{x2716}@ Unexpected token. - start: 33, end: 35

```

