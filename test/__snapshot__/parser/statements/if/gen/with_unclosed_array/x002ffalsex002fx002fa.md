# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: /false//a
## Input

`````js
if[ /false//a
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 0,
                "start": 0,
                "end": 2
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
                                "start": 3,
                                "end": 11
                            },
                            "operatorToken": {
                                "kind": 35640,
                                "flags": 11,
                                "start": 512,
                                "end": 12
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 12,
                                "end": 13
                            },
                            "flags": 256,
                            "start": 3,
                            "end": 13
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 3,
                    "end": 13
                },
                "flags": 256,
                "start": 2,
                "end": 13
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 13,
                    "end": 13
                },
                "flags": 128,
                "start": 13,
                "end": 13
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 128,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "if[ /false//a",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 13, end: 13
✖ Expression expected - start: 13, end: 13

```

