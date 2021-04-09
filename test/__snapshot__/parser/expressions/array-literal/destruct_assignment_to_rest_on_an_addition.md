# Kataw parser test case

## Input

`````js
[..."foo"+bar] = x
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
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 223,
                                "argument": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 67174403,
                                        "value": "foo",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 4,
                                        "end": 9
                                    },
                                    "operatorToken": {
                                        "kind": 34098,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 9,
                                        "end": 10
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "bar",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 10,
                                        "end": 13
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 4,
                                    "end": 13
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 1,
                                "end": 13
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 13
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 14
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 14,
                    "end": 16
                },
                "right": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 16,
                    "end": 18
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 18
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "[...\"foo\"+bar] = x",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 14,
            "end": 16
        }
    ],
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

