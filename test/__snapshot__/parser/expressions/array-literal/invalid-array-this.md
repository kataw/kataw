# Kataw parser test case

## Input

`````js
[this=x];

[this]=x;
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 135,
                                "autofix": 0,
                                "flags": 768,
                                "start": 1,
                                "end": 5
                            },
                            "operatorToken": {
                                "kind": 81921,
                                "autofix": 0,
                                "flags": 0,
                                "start": 1,
                                "end": 6
                            },
                            "right": {
                                "kind": 81921,
                                "value": "x",
                                "autofix": 0,
                                "flags": 768,
                                "start": 6,
                                "end": 7
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 1,
                            "end": 7
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 7
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 8
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 9
        },
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
                                "kind": 135,
                                "autofix": 0,
                                "flags": 768,
                                "start": 12,
                                "end": 16
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 12,
                        "end": 16
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 9,
                    "end": 17
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 17,
                    "end": 18
                },
                "right": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 18,
                    "end": 19
                },
                "autofix": 0,
                "flags": 256,
                "start": 9,
                "end": 19
            },
            "autofix": 0,
            "flags": 128,
            "start": 9,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "[this=x];\n\n[this]=x;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 5,
            "end": 6
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 17,
            "end": 18
        }
    ],
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

