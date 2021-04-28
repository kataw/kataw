# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: (a b, c = b : string)
## Input

`````js
{[ (a b, c = b : string)
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
                                        "kind": 121,
                                        "expression": {
                                            "kind": 132,
                                            "flags": 256,
                                            "start": 2,
                                            "end": 5
                                        },
                                        "flags": 256,
                                        "start": 2,
                                        "end": 5
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 768,
                                        "start": 5,
                                        "end": 7
                                    },
                                    {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 768,
                                            "start": 8,
                                            "end": 10
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 10,
                                            "start": 512,
                                            "end": 12
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 768,
                                            "start": 12,
                                            "end": 14
                                        },
                                        "flags": 256,
                                        "start": 8,
                                        "end": 14
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 2,
                                "end": 14
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 14
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 14
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 14
            },
            "flags": 128,
            "start": 0,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 768,
                "start": 16,
                "end": 23
            },
            "flags": 128,
            "start": 16,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "{[ (a b, c = b : string)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 5, end: 7
✖ ',' expected - start: 14, end: 16
✖ Statement expected - start: 14, end: 16
✖ Statement expected - start: 23, end: 24

```

