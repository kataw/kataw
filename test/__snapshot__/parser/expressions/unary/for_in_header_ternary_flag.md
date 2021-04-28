# Kataw parser test case

## Input

`````js
for(delete((1)?y:x in y) in z)x
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
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 512,
                "start": 24,
                "end": 27
            },
            "kind": 166,
            "initializer": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 512,
                    "start": 4,
                    "end": 10
                },
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 197,
                        "shortCircuit": {
                            "kind": 121,
                            "expression": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 768,
                                "start": 12,
                                "end": 13
                            },
                            "flags": 256,
                            "start": 11,
                            "end": 14
                        },
                        "questionToken": {
                            "kind": 134217750,
                            "flags": 0,
                            "start": 14,
                            "end": 15
                        },
                        "consequent": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 15,
                            "end": 16
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 0,
                            "start": 16,
                            "end": 17
                        },
                        "alternate": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 17,
                                "end": 18
                            },
                            "operatorToken": {
                                "kind": 21006388,
                                "flags": 512,
                                "start": 18,
                                "end": 21
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 768,
                                "start": 21,
                                "end": 23
                            },
                            "flags": 256,
                            "start": 17,
                            "end": 23
                        },
                        "flags": 256,
                        "start": 11,
                        "end": 23
                    },
                    "flags": 256,
                    "start": 10,
                    "end": 24
                },
                "flags": 256,
                "start": 4,
                "end": 24
            },
            "expression": {
                "kind": 134299649,
                "text": "z",
                "rawText": "z",
                "flags": 768,
                "start": 27,
                "end": 29
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 30,
                    "end": 31
                },
                "flags": 128,
                "start": 30,
                "end": 31
            },
            "flags": 128,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "for(delete((1)?y:x in y) in z)x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid left-hand side in for-in loop - start: 27, end: 29

```

