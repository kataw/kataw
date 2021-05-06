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
### CST

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
                                            "flags": 96,
                                            "start": 2,
                                            "end": 6
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 64,
                                            "start": 6,
                                            "end": 9
                                        },
                                        "right": {
                                            "kind": 16637,
                                            "text": "",
                                            "flags": 68,
                                            "start": 9,
                                            "end": 9
                                        },
                                        "flags": 32,
                                        "start": 2,
                                        "end": 9
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2,
                                "end": 9
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 9
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 9
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "{[ let  =",
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

