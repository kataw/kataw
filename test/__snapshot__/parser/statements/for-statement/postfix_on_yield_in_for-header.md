# Kataw parser test case

## Input

`````js
for (yield[g]--;;);
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
                "kind": 127,
                "operandToken": {
                    "kind": 196636,
                    "autofix": 0,
                    "flags": 0,
                    "start": 13,
                    "end": 15
                },
                "expression": {
                    "kind": 130,
                    "member": {
                        "kind": 81921,
                        "value": "yield",
                        "autofix": 0,
                        "flags": 768,
                        "start": 5,
                        "end": 10
                    },
                    "expression": {
                        "kind": 81921,
                        "value": "g",
                        "autofix": 0,
                        "flags": 768,
                        "start": 11,
                        "end": 12
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 5,
                    "end": 13
                },
                "autofix": 0,
                "flags": 256,
                "start": 5,
                "end": 15
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "autofix": 0,
                "flags": 128,
                "start": 18,
                "end": 19
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "for (yield[g]--;;);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

