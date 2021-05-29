# Kataw parser test case

## Input

`````js
for(delete((1)?y:x in y) in z)x
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 64,
                    "start": 4,
                    "end": 10
                },
                "operand": {
                    "kind": 121,
                    "expression": {
                        "kind": 197,
                        "shortCircuit": {
                            "kind": 121,
                            "expression": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 12,
                                "end": 13
                            },
                            "flags": 32,
                            "start": 11,
                            "end": 14
                        },
                        "questionToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "start": 14,
                            "end": 15
                        },
                        "consequent": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 15,
                            "end": 16
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 16,
                            "end": 17
                        },
                        "alternate": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 17,
                                "end": 18
                            },
                            "operatorToken": {
                                "kind": 21006388,
                                "flags": 64,
                                "start": 18,
                                "end": 21
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 21,
                                "end": 23
                            },
                            "flags": 32,
                            "start": 17,
                            "end": 23
                        },
                        "flags": 32,
                        "start": 11,
                        "end": 23
                    },
                    "flags": 32,
                    "start": 10,
                    "end": 24
                },
                "flags": 32,
                "start": 4,
                "end": 24
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 24,
                "end": 27
            },
            "expression": {
                "kind": 134299649,
                "text": "z",
                "rawText": "z",
                "flags": 96,
                "start": 27,
                "end": 29
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 30,
                    "end": 31
                },
                "flags": 16,
                "start": 30,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "for(delete((1)?y:x in y) in z)x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 27, end: 29

```

