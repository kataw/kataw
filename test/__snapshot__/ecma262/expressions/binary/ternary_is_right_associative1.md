# Kataw parser test case

## Input

`````js
a * x ? b : c ? d : e
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
                        "kind": 67143222,
                        "flags": 96,
                        "start": 1,
                        "end": 3
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 3,
                        "end": 5
                    },
                    "flags": 96,
                    "start": 0,
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
                    "text": "b",
                    "rawText": "b",
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
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 11,
                        "end": 13
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 64,
                        "start": 13,
                        "end": 15
                    },
                    "consequent": {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 96,
                        "start": 15,
                        "end": 17
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 64,
                        "start": 17,
                        "end": 19
                    },
                    "alternate": {
                        "kind": 134299649,
                        "text": "e",
                        "rawText": "e",
                        "flags": 96,
                        "start": 19,
                        "end": 21
                    },
                    "flags": 96,
                    "start": 11,
                    "end": 21
                },
                "flags": 96,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "a * x ? b : c ? d : e",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

a *  x ? b : c ? d : e;
```

### Diagnostics

```javascript
✔ No errors
```

