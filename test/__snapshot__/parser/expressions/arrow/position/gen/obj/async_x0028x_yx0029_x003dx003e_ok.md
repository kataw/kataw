# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: j
> :: test: obj
> :: case: async (x, y) => ok
## Input

`````js
x = {arrow: async (x, y) => ok}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 3
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 81921,
                                        "value": "async",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 11,
                                        "end": 17
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [
                                            {
                                                "kind": 81921,
                                                "value": "x",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 19,
                                                "end": 20
                                            },
                                            {
                                                "kind": 81921,
                                                "value": "y",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 21,
                                                "end": 23
                                            }
                                        ],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 19,
                                        "end": 23
                                    },
                                    "flags": 256,
                                    "start": 5,
                                    "end": 24
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "arrow",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 5,
                                    "end": 10
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 5,
                                "end": 24
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 5,
                        "end": 24
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 3,
                    "end": 24
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 24
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 24
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "ok",
                "autofix": 0,
                "flags": 768,
                "start": 27,
                "end": 30
            },
            "autofix": 0,
            "flags": 128,
            "start": 27,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "x = {arrow: async (x, y) => ok}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 24,
            "end": 27
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 24,
            "end": 27
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 24,
            "end": 27
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 24,
            "end": 27
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 30,
            "end": 31
        }
    ],
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: j
> :: test: obj
> :: case: async (x, y) => ok
## Input

`````js
x = {arrow: async (x, y) => ok}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: j
> :: test: obj
> :: case: async (x, y) => ok
## Input

`````js
x = {arrow: async (x, y) => ok}
`````
```

