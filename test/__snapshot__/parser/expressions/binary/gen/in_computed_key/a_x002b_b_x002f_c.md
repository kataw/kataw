# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: in computed key
> :: case: a + b / c
## Input

`````js
x = {[ a + b / c ]: y}
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
                                "left": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 19,
                                    "end": 21
                                },
                                "right": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 6,
                                            "end": 8
                                        },
                                        "operatorToken": {
                                            "kind": 34098,
                                            "flags": 64,
                                            "start": 8,
                                            "end": 10
                                        },
                                        "right": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 10,
                                                "end": 12
                                            },
                                            "operatorToken": {
                                                "kind": 35640,
                                                "flags": 64,
                                                "start": 12,
                                                "end": 14
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 96,
                                                "start": 14,
                                                "end": 16
                                            },
                                            "flags": 32,
                                            "start": 12,
                                            "end": 16
                                        },
                                        "flags": 32,
                                        "start": 6,
                                        "end": 16
                                    },
                                    "flags": 32,
                                    "start": 5,
                                    "end": 18
                                },
                                "flags": 32,
                                "start": 5,
                                "end": 21
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 5,
                        "end": 21
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 22
                },
                "flags": 32,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "x = {[ a + b / c ]: y}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
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

