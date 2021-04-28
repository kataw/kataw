# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: /false//a
## Input

`````js
{[ /false//a
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 198,
                                        "left": {
                                            "kind": 221,
                                            "text": "/false/",
                                            "flags": 768,
                                            "start": 2,
                                            "end": 10
                                        },
                                        "operatorToken": {
                                            "kind": 35640,
                                            "flags": 512,
                                            "start": 10,
                                            "end": 11
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 11,
                                            "end": 12
                                        },
                                        "flags": 256,
                                        "start": 2,
                                        "end": 12
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 2,
                                "end": 12
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 12
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 12
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 12
            },
            "flags": 128,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "text": "{[ /false//a",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 12, end: 12

```

