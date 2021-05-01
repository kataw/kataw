# Kataw parser test case

## Input

`````js
a?.200
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
                    "original": "a",
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 0,
                    "start": 1,
                    "end": 3
                },
                "consequent": {
                    "kind": 201392130,
                    "text": 200,
                    "original": "200",
                    "rawText": "200",
                    "flags": 96,
                    "start": 3,
                    "end": 6
                },
                "colonToken": null,
                "alternate": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 6,
                    "end": 6
                },
                "flags": 32,
                "start": 0,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "source": "a?.200",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 6, end: 6

```

