# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: in computed key
> :: case: a + b instanceof c
## Input

`````js
x = {[ a + b instanceof c ]: y}
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
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
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
                                "left": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 768,
                                    "start": 28,
                                    "end": 30
                                },
                                "right": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 6,
                                            "end": 8
                                        },
                                        "operatorToken": {
                                            "kind": 34098,
                                            "flags": 768,
                                            "start": 8,
                                            "end": 10
                                        },
                                        "right": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 768,
                                                "start": 10,
                                                "end": 12
                                            },
                                            "operatorToken": {
                                                "kind": 4229173,
                                                "flags": 768,
                                                "start": 12,
                                                "end": 23
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 768,
                                                "start": 23,
                                                "end": 25
                                            },
                                            "flags": 256,
                                            "start": 12,
                                            "end": 25
                                        },
                                        "flags": 256,
                                        "start": 6,
                                        "end": 25
                                    },
                                    "flags": 256,
                                    "start": 5,
                                    "end": 27
                                },
                                "flags": 256,
                                "start": 5,
                                "end": 30
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 5,
                        "end": 30
                    },
                    "flags": 256,
                    "start": 3,
                    "end": 31
                },
                "flags": 256,
                "start": 0,
                "end": 31
            },
            "flags": 128,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "x = {[ a + b instanceof c ]: y}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

