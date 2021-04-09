# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: with unclosed block
> :: case: (a b, c = b : string)
## Input

`````js
{ {} finally(x) { (a b, c = b : string)
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [],
                            "multiLine": false,
                            "autofix": 0,
                            "flags": 128,
                            "start": 3,
                            "end": 3
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 1,
                        "end": 4
                    }
                ],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 1,
                "end": 4
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 4
        },
        {
            "kind": 159,
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "autofix": 0,
                    "flags": 128,
                    "start": 4,
                    "end": 4
                },
                "autofix": 0,
                "flags": 128,
                "start": 4,
                "end": 4
            },
            "catchClause": null,
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "autofix": 0,
                    "flags": 128,
                    "start": 12,
                    "end": 12
                },
                "autofix": 0,
                "flags": 128,
                "start": 12,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 4,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 13,
                    "end": 14
                },
                "autofix": 0,
                "flags": 256,
                "start": 12,
                "end": 15
            },
            "autofix": 0,
            "flags": 128,
            "start": 12,
            "end": 15
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "autofix": 0,
                                "flags": 256,
                                "start": 17,
                                "end": 20
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 17,
                            "end": 20
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 17,
                        "end": 20
                    }
                ],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 17,
                "end": 20
            },
            "autofix": 0,
            "flags": 128,
            "start": 15,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 81921,
                        "value": "b",
                        "autofix": 0,
                        "flags": 768,
                        "start": 20,
                        "end": 22
                    },
                    {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "c",
                            "autofix": 0,
                            "flags": 768,
                            "start": 23,
                            "end": 25
                        },
                        "operatorToken": {
                            "kind": 81921,
                            "autofix": 0,
                            "flags": 0,
                            "start": 23,
                            "end": 27
                        },
                        "right": {
                            "kind": 81921,
                            "value": "b",
                            "autofix": 0,
                            "flags": 768,
                            "start": 27,
                            "end": 29
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 23,
                        "end": 29
                    }
                ],
                "autofix": 0,
                "flags": 256,
                "start": 20,
                "end": 29
            },
            "autofix": 0,
            "flags": 128,
            "start": 20,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "string",
                "autofix": 0,
                "flags": 768,
                "start": 31,
                "end": 38
            },
            "autofix": 0,
            "flags": 128,
            "start": 31,
            "end": 38
        }
    ],
    "isModule": false,
    "text": "{ {} finally(x) { (a b, c = b : string)",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 4,
            "end": 12
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 4,
            "end": 12
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 4,
            "end": 12
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 12,
            "end": 13
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 15,
            "end": 17
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 20,
            "end": 22
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 20,
            "end": 22
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 20,
            "end": 22
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 29,
            "end": 31
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 29,
            "end": 31
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 38,
            "end": 39
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 38,
            "end": 39
        }
    ],
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: with unclosed block
> :: case: (a b, c = b : string)
## Input

`````js
{ {} finally(x) { (a b, c = b : string)
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: with unclosed block
> :: case: (a b, c = b : string)
## Input

`````js
{ {} finally(x) { (a b, c = b : string)
`````
```

