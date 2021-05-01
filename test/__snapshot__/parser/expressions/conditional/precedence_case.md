# Kataw parser test case

## Input

`````js
a === b ? c : d % e;
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
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 0,
                        "end": 1
                    },
                    "operatorToken": {
                        "kind": 34620,
                        "flags": 64,
                        "start": 1,
                        "end": 5
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": " b",
                        "flags": 96,
                        "start": 5,
                        "end": 7
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 7
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 0,
                    "start": 7,
                    "end": 9
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": " c",
                    "flags": 96,
                    "start": 9,
                    "end": 11
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 0,
                    "start": 11,
                    "end": 13
                },
                "alternate": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": " d",
                        "flags": 96,
                        "start": 13,
                        "end": 15
                    },
                    "operatorToken": {
                        "kind": 35639,
                        "flags": 64,
                        "start": 15,
                        "end": 17
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "e",
                        "rawText": " e",
                        "flags": 96,
                        "start": 17,
                        "end": 19
                    },
                    "flags": 32,
                    "start": 13,
                    "end": 19
                },
                "flags": 32,
                "start": 0,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "a === b ? c : d % e;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
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

