# Kataw parser test case

## Input

`````js
for ({ eval = 0 } in [{}]) ;
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
            "kind": 166,
            "initializer": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 205,
                            "left": {
                                "kind": 81921,
                                "value": "eval",
                                "autofix": 0,
                                "flags": 768,
                                "start": 6,
                                "end": 11
                            },
                            "right": {
                                "kind": 81921,
                                "value": 0,
                                "autofix": 0,
                                "flags": 768,
                                "start": 13,
                                "end": 15
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 6,
                            "end": 15
                        }
                    ],
                    "trailingComma": false,
                    "multiline": false,
                    "autofix": 0,
                    "flags": 0,
                    "start": 6,
                    "end": 15
                },
                "autofix": 0,
                "flags": 256,
                "start": 5,
                "end": 17
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 23,
                                "end": 23
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 22,
                            "end": 24
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 22,
                    "end": 24
                },
                "autofix": 0,
                "flags": 256,
                "start": 20,
                "end": 25
            },
            "statement": {
                "kind": 168,
                "autofix": 0,
                "flags": 128,
                "start": 26,
                "end": 28
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "text": "for ({ eval = 0 } in [{}]) ;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

