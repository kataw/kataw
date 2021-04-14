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
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 210,
                    "newKeyword": {
                        "kind": 4259933,
                        "flags": 768,
                        "start": 0,
                        "end": 3
                    },
                    "expression": {
                        "kind": 81921,
                        "text": "a",
                        "rawText": "a",
                        "flags": 768,
                        "start": 3,
                        "end": 5
                    },
                    "argumentList": null,
                    "flags": 256,
                    "start": 0,
                    "end": 5
                },
                "questionToken": {
                    "kind": 22,
                    "flags": 768,
                    "start": 5,
                    "end": 7
                },
                "consequent": {
                    "kind": 81921,
                    "text": "b",
                    "rawText": "b",
                    "flags": 768,
                    "start": 7,
                    "end": 9
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 768,
                    "start": 9,
                    "end": 11
                },
                "alternate": {
                    "kind": 81921,
                    "text": "c",
                    "rawText": "c",
                    "flags": 768,
                    "start": 11,
                    "end": 13
                },
                "flags": 256,
                "start": 0,
                "end": 13
            },
            "flags": 128,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "new a ? b : c",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

