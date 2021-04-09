# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
x, [foo = y, bar] = doo
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 0,
                        "end": 1
                    },
                    {
                        "kind": 125,
                        "left": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 125,
                                        "left": {
                                            "kind": 81921,
                                            "value": "foo",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 4,
                                            "end": 7
                                        },
                                        "operatorToken": {
                                            "kind": 81921,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 4,
                                            "end": 9
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": "y",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 4,
                                        "end": 11
                                    },
                                    {
                                        "kind": 81921,
                                        "value": "bar",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 12,
                                        "end": 16
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 4,
                                "end": 16
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 2,
                            "end": 17
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "autofix": 0,
                            "flags": 0,
                            "start": 17,
                            "end": 19
                        },
                        "right": {
                            "kind": 81921,
                            "value": "doo",
                            "autofix": 0,
                            "flags": 768,
                            "start": 19,
                            "end": 23
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 2,
                        "end": 23
                    }
                ],
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 23
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": true,
    "text": "x, [foo = y, bar] = doo",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

