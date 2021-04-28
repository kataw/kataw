# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: let  =
## Input

`````js
{[ let  =
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
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "let",
                                            "rawText": "let",
                                            "flags": 768,
                                            "start": 2,
                                            "end": 6
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 6,
                                            "start": 512,
                                            "end": 9
                                        },
                                        "right": {
                                            "kind": 16637,
                                            "text": "",
                                            "flags": 12,
                                            "start": 9,
                                            "end": 9
                                        },
                                        "flags": 256,
                                        "start": 2,
                                        "end": 9
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 2,
                                "end": 9
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 9
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 9
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 9
            },
            "flags": 128,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "text": "{[ let  =",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 9, end: 9
✖ ',' expected - start: 9, end: 9

```

