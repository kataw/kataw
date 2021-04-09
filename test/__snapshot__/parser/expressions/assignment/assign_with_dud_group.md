# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
a = ((b)) = c;
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
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "a",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 537067531,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 3
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 81921,
                                "value": "b",
                                "autofix": 0,
                                "flags": 768,
                                "start": 6,
                                "end": 7
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 5,
                            "end": 8
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 3,
                        "end": 9
                    },
                    "operatorToken": {
                        "kind": 81921,
                        "autofix": 0,
                        "flags": 0,
                        "start": 3,
                        "end": 11
                    },
                    "right": {
                        "kind": 81921,
                        "value": "c",
                        "autofix": 0,
                        "flags": 768,
                        "start": 11,
                        "end": 13
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 3,
                    "end": 13
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 13
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "a = ((b)) = c;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

