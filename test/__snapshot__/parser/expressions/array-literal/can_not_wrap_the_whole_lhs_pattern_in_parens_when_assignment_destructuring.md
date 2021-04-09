# Kataw parser test case

## Input

`````js
([foo]) = arr;
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
                    "kind": 121,
                    "expression": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 81921,
                                    "value": "foo",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 2,
                                    "end": 5
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 2,
                            "end": 5
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 6
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 7
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
                    "value": "arr",
                    "autofix": 0,
                    "flags": 768,
                    "start": 9,
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
    "text": "([foo]) = arr;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 7,
            "end": 9
        }
    ],
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

