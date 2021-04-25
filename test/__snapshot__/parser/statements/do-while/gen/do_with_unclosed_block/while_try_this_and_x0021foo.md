# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: do with unclosed block
> :: case: while try this and !foo
## Input

`````js
do {} while (x) { while try this and !foo
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 768,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 13,
                "end": 14
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 768,
                "start": 5,
                "end": 11
            },
            "statement": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 4,
                    "end": 4
                },
                "flags": 128,
                "start": 2,
                "end": 5
            },
            "flags": 128,
            "start": 0,
            "end": 15
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 154,
                        "whileKeyword": {
                            "kind": 37757028,
                            "flags": 768,
                            "start": 17,
                            "end": 23
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 23,
                            "end": 23
                        },
                        "statement": {
                            "kind": 159,
                            "tryKeyword": {
                                "kind": 37757027,
                                "flags": 768,
                                "start": 23,
                                "end": 27
                            },
                            "block": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "multiLine": false,
                                    "flags": 128,
                                    "start": 27,
                                    "end": 27
                                },
                                "flags": 128,
                                "start": 27,
                                "end": 27
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
                                    "start": 32,
                                    "end": 32
                                },
                                "flags": 128,
                                "start": 32,
                                "end": 32
                            },
                            "flags": 128,
                            "start": 23,
                            "end": 32
                        },
                        "flags": 128,
                        "start": 17,
                        "end": 32
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "and",
                            "rawText": "and",
                            "flags": 768,
                            "start": 32,
                            "end": 36
                        },
                        "flags": 128,
                        "start": 32,
                        "end": 36
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 65584,
                                "flags": 768,
                                "start": 36,
                                "end": 38
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 768,
                                "start": 38,
                                "end": 41
                            },
                            "flags": 256,
                            "start": 36,
                            "end": 41
                        },
                        "flags": 128,
                        "start": 36,
                        "end": 41
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 17,
                "end": 41
            },
            "flags": 128,
            "start": 15,
            "end": 41
        }
    ],
    "isModule": false,
    "text": "do {} while (x) { while try this and !foo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 23, end: 27
@{x2716}@ Expression expected - start: 23, end: 27
@{x2716}@ Unexpected token. - start: 23, end: 27
@{x2716}@ Unexpected token. - start: 27, end: 32
@{x2716}@ Unexpected token. - start: 27, end: 32
@{x2716}@ Unexpected token. - start: 32, end: 36
@{x2716}@ Unexpected token. - start: 36, end: 38
@{x2716}@ Unexpected token. - start: 41, end: 41

```

