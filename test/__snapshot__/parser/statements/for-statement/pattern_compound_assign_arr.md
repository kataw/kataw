# Kataw parser test case

## Input

`````js
for([]/=y;;)x
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
            "kind": 165,
            "initializer": {
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
                    "kind": 4133,
                    "autofix": 0,
                    "flags": 0,
                    "start": 6,
                    "end": 8
                },
                "right": {
                    "kind": 81921,
                    "value": "y",
                    "autofix": 0,
                    "flags": 768,
                    "start": 8,
                    "end": 9
                },
                "autofix": 0,
                "flags": 256,
                "start": 4,
                "end": 9
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 12,
                    "end": 13
                },
                "autofix": 0,
                "flags": 128,
                "start": 12,
                "end": 13
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "for([]/=y;;)x",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 9,
            "error": "Expression exprected. A compound assignment cannot follow an array literal",
            "start": 6,
            "end": 8
        }
    ],
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

