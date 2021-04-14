# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: call
> :: case: a / b + c
## Input

`````js
foo( a / b + c )
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "text": "foo",
                    "rawText": "foo",
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
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 4,
                                    "end": 6
                                },
                                "operatorToken": {
                                    "kind": 35640,
                                    "flags": 768,
                                    "start": 6,
                                    "end": 8
                                },
                                "right": {
                                    "kind": 81921,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 768,
                                    "start": 8,
                                    "end": 10
                                },
                                "flags": 256,
                                "start": 4,
                                "end": 10
                            },
                            "operatorToken": {
                                "kind": 34098,
                                "flags": 768,
                                "start": 10,
                                "end": 12
                            },
                            "right": {
                                "kind": 81921,
                                "text": "c",
                                "rawText": "c",
                                "flags": 768,
                                "start": 12,
                                "end": 14
                            },
                            "flags": 256,
                            "start": 4,
                            "end": 14
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 4,
                    "end": 14
                },
                "flags": 256,
                "start": 0,
                "end": 16
            },
            "flags": 128,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "foo( a / b + c )",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: call
> :: case: a / b + c
## Input

`````js
foo( a / b + c )
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: call
> :: case: a / b + c
## Input

`````js
foo( a / b + c )
`````
```

