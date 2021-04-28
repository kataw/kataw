# Kataw parser test case

## Input

`````js
a ? b : c ? d : e * x

typeof x;
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
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 1,
                    "start": 0,
                    "end": 3
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 768,
                    "start": 3,
                    "end": 5
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 5,
                    "start": 0,
                    "end": 7
                },
                "alternate": {
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 768,
                        "start": 7,
                        "end": 9
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 9,
                        "start": 0,
                        "end": 11
                    },
                    "consequent": {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 768,
                        "start": 11,
                        "end": 13
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 13,
                        "start": 0,
                        "end": 15
                    },
                    "alternate": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "e",
                            "rawText": "e",
                            "flags": 768,
                            "start": 15,
                            "end": 17
                        },
                        "operatorToken": {
                            "kind": 67143222,
                            "flags": 512,
                            "start": 17,
                            "end": 19
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 19,
                            "end": 21
                        },
                        "flags": 256,
                        "start": 15,
                        "end": 21
                    },
                    "flags": 256,
                    "start": 7,
                    "end": 21
                },
                "flags": 256,
                "start": 0,
                "end": 21
            },
            "flags": 128,
            "start": 0,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 138477613,
                    "flags": 513,
                    "start": 21,
                    "end": 29
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 29,
                    "end": 31
                },
                "flags": 256,
                "start": 21,
                "end": 31
            },
            "flags": 128,
            "start": 21,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "a ? b : c ? d : e * x\n\ntypeof x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

