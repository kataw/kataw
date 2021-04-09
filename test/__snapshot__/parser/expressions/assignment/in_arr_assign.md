# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
x in[]=x
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
                "kind": 198,
                "left": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 21006388,
                    "autofix": 0,
                    "flags": 0,
                    "start": 1,
                    "end": 4
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
                            "start": 5,
                            "end": 5
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 4,
                        "end": 6
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 6,
                        "end": 7
                    },
                    "right": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 7,
                        "end": 8
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 4,
                    "end": 8
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 8
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": true,
    "text": "x in[]=x",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 8
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

