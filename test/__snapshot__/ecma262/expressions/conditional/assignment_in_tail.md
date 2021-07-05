# Kataw parser test case

## Input

`````js
a?b:c=d
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
                    "end": 2
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 2,
                    "end": 3
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 3,
                    "end": 4
                },
                "alternate": {
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 4,
                        "end": 5
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 5,
                        "end": 6
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 96,
                        "start": 6,
                        "end": 7
                    },
                    "flags": 0,
                    "start": 4,
                    "end": 7
                },
                "flags": 96,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 7
        }
    ],
    "isModule": false,
    "source": "a?b:c=d",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 7
}
```

### Printed

```javascript

a ? b : c = d;
```

### Diagnostics

```javascript
✔ No errors
```

