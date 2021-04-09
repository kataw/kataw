# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: lhs arr with rest with number init
> :: case: false
## Input

`````js
for ([...[a]] = 0 in {});
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
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 223,
                                "argument": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 81921,
                                                "value": "a",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 10,
                                                "end": 11
                                            }
                                        ],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 10,
                                        "end": 11
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 9,
                                    "end": 12
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 6,
                                "end": 12
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 6,
                        "end": 12
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 5,
                    "end": 13
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 13,
                    "end": 15
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 81921,
                        "value": 0,
                        "autofix": 0,
                        "flags": 768,
                        "start": 15,
                        "end": 17
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "autofix": 0,
                        "flags": 0,
                        "start": 17,
                        "end": 20
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
                            "start": 22,
                            "end": 22
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 20,
                        "end": 23
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 15,
                    "end": 23
                },
                "autofix": 0,
                "flags": 256,
                "start": 5,
                "end": 23
            },
            "condition": null,
            "incrementor": {
                "kind": 253,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 23,
                "end": 23
            },
            "statement": {
                "kind": 168,
                "autofix": 0,
                "flags": 128,
                "start": 24,
                "end": 25
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "for ([...[a]] = 0 in {});",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 23,
            "end": 24
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 23,
            "end": 24
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 23,
            "end": 24
        }
    ],
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: lhs arr with rest with number init
> :: case: false
## Input

`````js
for ([...[a]] = 0 in {});
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: lhs arr with rest with number init
> :: case: false
## Input

`````js
for ([...[a]] = 0 in {});
`````
```

