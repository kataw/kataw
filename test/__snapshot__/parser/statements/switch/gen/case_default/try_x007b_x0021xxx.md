# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: case default
> :: case: try { !xxx
## Input

`````js
case try { !xxx default
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 768,
                "start": 4,
                "end": 8
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 65584,
                                    "flags": 768,
                                    "start": 10,
                                    "end": 12
                                },
                                "expression": {
                                    "kind": 81921,
                                    "text": "xxx",
                                    "rawText": "xxx",
                                    "flags": 768,
                                    "start": 12,
                                    "end": 15
                                },
                                "flags": 256,
                                "start": 10,
                                "end": 15
                            },
                            "flags": 128,
                            "start": 10,
                            "end": 15
                        }
                    ],
                    "multiLine": false,
                    "flags": 128,
                    "start": 10,
                    "end": 15
                },
                "flags": 128,
                "start": 8,
                "end": 15
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
                    "start": 23,
                    "end": 23
                },
                "flags": 128,
                "start": 23,
                "end": 23
            },
            "flags": 128,
            "start": 4,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "case try { !xxx default",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 0,
            "end": 4
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 15,
            "end": 23
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 15,
            "end": 23
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 15,
            "end": 23
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 23,
            "end": 23
        }
    ],
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: case default
> :: case: try { !xxx
## Input

`````js
case try { !xxx default
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: case default
> :: case: try { !xxx
## Input

`````js
case try { !xxx default
`````
```

