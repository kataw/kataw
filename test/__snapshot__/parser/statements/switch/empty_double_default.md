# Kataw parser test case

## Input

`````js
switch(x) { default: default: }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 160,
            "expression": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 7,
                "end": 8
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 170,
                        "statements": [],
                        "autofix": 0,
                        "flags": 128,
                        "start": 11,
                        "end": 20
                    },
                    {
                        "kind": 170,
                        "statements": [],
                        "autofix": 0,
                        "flags": 128,
                        "start": 20,
                        "end": 29
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 9,
                "end": 31
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "switch(x) { default: default: }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

