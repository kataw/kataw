# Kataw parser test case

## Input

`````js
new a ? b : c
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
                    "kind": 210,
                    "newKeyword": {
                        "kind": 138477661,
                        "flags": 0,
                        "start": 0,
                        "end": 3
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": " a",
                        "flags": 96,
                        "start": 3,
                        "end": 5
                    },
                    "argumentList": null,
                    "flags": 32,
                    "start": 0,
                    "end": 5
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 0,
                    "start": 5,
                    "end": 7
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": " b",
                    "flags": 96,
                    "start": 7,
                    "end": 9
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 0,
                    "start": 9,
                    "end": 11
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": " c",
                    "flags": 96,
                    "start": 11,
                    "end": 13
                },
                "flags": 32,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "new a ? b : c",
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
✔ No errors
```

