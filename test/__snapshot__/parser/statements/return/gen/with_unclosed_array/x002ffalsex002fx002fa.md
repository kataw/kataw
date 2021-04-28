# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: /false//a
## Input

`````js
return[ /false//a
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 768,
                "start": 0,
                "end": 6
            },
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
                                "start": 7,
                                "end": 15
                            },
                            "operatorToken": {
                                "kind": 35640,
                                "flags": 768,
                                "start": 15,
                                "end": 16
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 16,
                                "end": 17
                            },
                            "flags": 256,
                            "start": 7,
                            "end": 17
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 7,
                    "end": 17
                },
                "flags": 256,
                "start": 6,
                "end": 17
            },
            "flags": 128,
            "start": 0,
            "end": 0
        }
    ],
    "isModule": false,
    "text": "return[ /false//a",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A return statement can only be used within a function_body - start: 0, end: 6
✖ ',' expected - start: 17, end: 17

```

