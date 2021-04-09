# Kataw parser test case

## Input

`````js
[]=n/f>>=v
`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
}
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
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 1,
                            "end": 1
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 0,
                        "end": 2
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 2,
                        "end": 3
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 81921,
                            "value": "n",
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 4
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "autofix": 0,
                            "flags": 0,
                            "start": 4,
                            "end": 5
                        },
                        "right": {
                            "kind": 81921,
                            "value": "f",
                            "autofix": 0,
                            "flags": 768,
                            "start": 5,
                            "end": 6
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 3,
                        "end": 6
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 81921,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 9
                },
                "right": {
                    "kind": 81921,
                    "value": "v",
                    "autofix": 0,
                    "flags": 768,
                    "start": 9,
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
            "end": 10
        }
    ],
    "isModule": false,
    "text": "[]=n/f>>=v",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 6,
            "end": 9
        }
    ],
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

