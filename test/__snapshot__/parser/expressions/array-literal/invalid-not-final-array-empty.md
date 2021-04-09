# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
[...a, ] = b;
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
                        "trailingComma": true,
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 6
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 8
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 8,
                    "end": 10
                },
                "right": {
                    "kind": 81921,
                    "value": "b",
                    "autofix": 0,
                    "flags": 768,
                    "start": 10,
                    "end": 12
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "[...a, ] = b;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 8,
            "end": 10
        }
    ],
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

