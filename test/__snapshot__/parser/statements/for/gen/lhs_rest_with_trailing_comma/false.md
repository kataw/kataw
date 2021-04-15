# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: a
> :: test: lhs rest with trailing comma
> :: case: false
## Input

`````js
for ([...x,] in [[]]);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "kind": 166,
            "initializer": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 223,
                            "argument": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 9,
                                "end": 10
                            },
                            "flags": 256,
                            "start": 6,
                            "end": 10
                        }
                    ],
                    "trailingComma": true,
                    "flags": 256,
                    "start": 6,
                    "end": 11
                },
                "flags": 256,
                "start": 5,
                "end": 12
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 18,
                                "end": 18
                            },
                            "flags": 256,
                            "start": 17,
                            "end": 19
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 17,
                    "end": 19
                },
                "flags": 256,
                "start": 15,
                "end": 20
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 21,
                "end": 22
            },
            "flags": 128,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "for ([...x,] in [[]]);",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 62,
            "error": "Invalid left-hand side in for-in loop",
            "start": 15,
            "end": 17
        }
    ],
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

