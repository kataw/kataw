# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: call
> :: case: a instanceof b + c
## Input

`````js
foo( a instanceof b + c )
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
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "value": "foo",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 3
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 81921,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 4,
                                    "end": 6
                                },
                                "operatorToken": {
                                    "kind": 4229173,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 6,
                                    "end": 17
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "b",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 17,
                                    "end": 19
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 4,
                                "end": 19
                            },
                            "operatorToken": {
                                "kind": 34098,
                                "autofix": 0,
                                "flags": 0,
                                "start": 19,
                                "end": 21
                            },
                            "right": {
                                "kind": 81921,
                                "value": "c",
                                "autofix": 0,
                                "flags": 768,
                                "start": 21,
                                "end": 23
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 4,
                            "end": 23
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 4,
                    "end": 23
                },
                "flags": 256,
                "start": 0,
                "end": 25
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "foo( a instanceof b + c )",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: call
> :: case: a instanceof b + c
## Input

`````js
foo( a instanceof b + c )
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: call
> :: case: a instanceof b + c
## Input

`````js
foo( a instanceof b + c )
`````
```

