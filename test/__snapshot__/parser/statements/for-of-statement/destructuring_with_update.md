# Kataw parser test case

## Input

`````js
for ([a.b]++ of c) d
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
            "kind": 167,
            "initializer": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "autofix": 0,
                    "flags": 0,
                    "start": 10,
                    "end": 12
                },
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 129,
                                "member": {
                                    "kind": 81921,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 6,
                                    "end": 7
                                },
                                "expression": {
                                    "kind": 81921,
                                    "value": "b",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 8,
                                    "end": 9
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 6,
                                "end": 9
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 6,
                        "end": 9
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 5,
                    "end": 10
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 12
            },
            "expression": {
                "kind": 81921,
                "value": "c",
                "autofix": 0,
                "flags": 768,
                "start": 15,
                "end": 17
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 81921,
                    "value": "d",
                    "autofix": 0,
                    "flags": 768,
                    "start": 18,
                    "end": 20
                },
                "autofix": 0,
                "flags": 128,
                "start": 18,
                "end": 20
            },
            "awaitToken": null,
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "for ([a.b]++ of c) d",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 63,
            "error": "Invalid left-hand side in for-of loop",
            "start": 15,
            "end": 17
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

