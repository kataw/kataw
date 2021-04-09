# Kataw parser test case

## Input

`````js
switch(y&[]=y){}
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
                "kind": 198,
                "left": {
                    "kind": 81921,
                    "value": "y",
                    "autofix": 0,
                    "flags": 768,
                    "start": 7,
                    "end": 8
                },
                "operatorToken": {
                    "kind": 34375,
                    "autofix": 0,
                    "flags": 0,
                    "start": 8,
                    "end": 9
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 10,
                            "end": 10
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 9,
                        "end": 11
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 11,
                        "end": 12
                    },
                    "right": {
                        "kind": 81921,
                        "value": "y",
                        "autofix": 0,
                        "flags": 768,
                        "start": 12,
                        "end": 13
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 9,
                    "end": 13
                },
                "autofix": 0,
                "flags": 256,
                "start": 7,
                "end": 13
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "autofix": 0,
                "flags": 128,
                "start": 14,
                "end": 16
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "switch(y&[]=y){}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

