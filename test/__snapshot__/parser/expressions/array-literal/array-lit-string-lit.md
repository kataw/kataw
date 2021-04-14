# Kataw parser test case

## Input

`````js
["X".length] = x
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
    "directives": [],
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
                                "kind": 129,
                                "member": {
                                    "kind": 67174403,
                                    "text": "X",
                                    "rawText": "X",
                                    "flags": 768,
                                    "start": 1,
                                    "end": 4
                                },
                                "expression": {
                                    "kind": 81921,
                                    "text": "length",
                                    "rawText": "length",
                                    "flags": 768,
                                    "start": 5,
                                    "end": 11
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 1,
                                "end": 11
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 1,
                        "end": 11
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 12
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 12,
                    "end": 14
                },
                "right": {
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 14,
                    "end": 16
                },
                "flags": 256,
                "start": 0,
                "end": 16
            },
            "flags": 128,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "[\"X\".length] = x",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

