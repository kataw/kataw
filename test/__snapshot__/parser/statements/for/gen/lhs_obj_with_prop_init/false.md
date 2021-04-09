# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: lhs obj with prop init
> :: case: false
## Input

`````js
for ({p: x = 0} = 0 in {});
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 165,
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 8,
                                        "end": 10
                                    },
                                    "operatorToken": {
                                        "kind": 67174402,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 6,
                                        "end": 12
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": 0,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 12,
                                        "end": 14
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 6,
                                    "end": 14
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "p",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 6,
                                    "end": 7
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 6,
                                "end": 14
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 6,
                        "end": 14
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 5,
                    "end": 15
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 15,
                    "end": 17
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 81921,
                        "value": 0,
                        "autofix": 0,
                        "flags": 768,
                        "start": 17,
                        "end": 19
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "autofix": 0,
                        "flags": 0,
                        "start": 19,
                        "end": 22
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 24,
                            "end": 24
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 22,
                        "end": 25
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 17,
                    "end": 25
                },
                "autofix": 0,
                "flags": 256,
                "start": 5,
                "end": 25
            },
            "condition": null,
            "incrementor": {
                "kind": 253,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 25,
                "end": 25
            },
            "statement": {
                "kind": 168,
                "autofix": 0,
                "flags": 128,
                "start": 26,
                "end": 27
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "for ({p: x = 0} = 0 in {});",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 25,
            "end": 26
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 25,
            "end": 26
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 25,
            "end": 26
        }
    ],
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: lhs obj with prop init
> :: case: false
## Input

`````js
for ({p: x = 0} = 0 in {});
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: lhs obj with prop init
> :: case: false
## Input

`````js
for ({p: x = 0} = 0 in {});
`````
```

