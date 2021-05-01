# Kataw parser test case

## Input

`````js
--/b/.c
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
                "kind": 128,
                "operandToken": {
                    "kind": 196636,
                    "flags": 64,
                    "start": 0,
                    "end": 2
                },
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 221,
                        "text": "/b/",
                        "flags": 96,
                        "start": 2,
                        "end": 5
                    },
                    "expression": {
                        "kind": 134299649,
                        "original": "c",
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 6,
                        "end": 7
                    },
                    "flags": 32,
                    "start": 2,
                    "end": 7
                },
                "flags": 32,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 7
        }
    ],
    "isModule": false,
    "source": "--/b/.c",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 7
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

