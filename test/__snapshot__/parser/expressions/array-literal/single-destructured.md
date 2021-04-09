# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
[...a] = b;
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
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 223,
                                "argument": {
                                    "kind": 81921,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 4,
                                    "end": 5
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 1,
                                "end": 5
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 5
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 6,
                    "end": 8
                },
                "right": {
                    "kind": 81921,
                    "value": "b",
                    "autofix": 0,
                    "flags": 768,
                    "start": 8,
                    "end": 10
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 10
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": true,
    "text": "[...a] = b;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

