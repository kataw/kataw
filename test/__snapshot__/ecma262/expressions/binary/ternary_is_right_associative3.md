# Kataw parser test case

## Input

`````js
a ? b ? c : d ** x : e
`````

## Output

### CST

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
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "consequent": {
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 3,
                        "end": 5
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 64,
                        "start": 5,
                        "end": 7
                    },
                    "consequent": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 7,
                        "end": 9
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 64,
                        "start": 9,
                        "end": 11
                    },
                    "alternate": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "d",
                            "rawText": "d",
                            "flags": 96,
                            "start": 11,
                            "end": 13
                        },
                        "operatorToken": {
                            "kind": 35897,
                            "flags": 96,
                            "start": 13,
                            "end": 16
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 16,
                            "end": 18
                        },
                        "flags": 96,
                        "start": 11,
                        "end": 18
                    },
                    "flags": 96,
                    "start": 3,
                    "end": 18
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 18,
                    "end": 20
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 20,
                    "end": 22
                },
                "flags": 96,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "a ? b ? c : d ** x : e",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

a ? b ? c : d ** x : e;

```

### Diagnostics

```javascript
✔ No errors
```

