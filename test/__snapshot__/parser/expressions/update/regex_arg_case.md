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
                    "flags": 768,
                    "start": 0,
                    "end": 2
                },
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 221,
                        "text": "/b/",
                        "flags": 768,
                        "start": 2,
                        "end": 5
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 768,
                        "start": 6,
                        "end": 7
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 2,
                    "end": 7
                },
                "flags": 256,
                "start": 0,
                "end": 7
            },
            "flags": 128,
            "start": 0,
            "end": 7
        }
    ],
    "isModule": false,
    "text": "--/b/.c",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 7
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

