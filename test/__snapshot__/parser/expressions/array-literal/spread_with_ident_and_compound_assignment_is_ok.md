# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
[...x += y];
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 223,
                            "argument": {
                                "kind": 125,
                                "left": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 4,
                                    "end": 5
                                },
                                "operatorToken": {
                                    "kind": 81921,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 4,
                                    "end": 8
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "y",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 8,
                                    "end": 10
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 4,
                                "end": 10
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 1,
                            "end": 10
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 10
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 11
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": true,
    "text": "[...x += y];",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

