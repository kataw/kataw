# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: in object
> :: case: a instanceof b + c
## Input

`````js
x = { a: a instanceof b + c }
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "original": "x",
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "asyncKeyword": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "original": "a",
                                            "text": "a",
                                            "rawText": " a",
                                            "flags": 96,
                                            "start": 8,
                                            "end": 10
                                        },
                                        "operatorToken": {
                                            "kind": 4229173,
                                            "flags": 64,
                                            "start": 10,
                                            "end": 21
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "original": "b",
                                            "text": "b",
                                            "rawText": " b",
                                            "flags": 96,
                                            "start": 21,
                                            "end": 23
                                        },
                                        "flags": 32,
                                        "start": 5,
                                        "end": 23
                                    },
                                    "operatorToken": {
                                        "kind": 34098,
                                        "flags": 64,
                                        "start": 23,
                                        "end": 25
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "original": "c",
                                        "text": "c",
                                        "rawText": " c",
                                        "flags": 96,
                                        "start": 25,
                                        "end": 27
                                    },
                                    "flags": 32,
                                    "start": 5,
                                    "end": 27
                                },
                                "right": {
                                    "kind": 134299649,
                                    "original": "a",
                                    "text": "a",
                                    "rawText": " a",
                                    "flags": 96,
                                    "start": 5,
                                    "end": 7
                                },
                                "flags": 32,
                                "start": 5,
                                "end": 27
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 5,
                        "end": 27
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 29
                },
                "flags": 32,
                "start": 0,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "x = { a: a instanceof b + c }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

