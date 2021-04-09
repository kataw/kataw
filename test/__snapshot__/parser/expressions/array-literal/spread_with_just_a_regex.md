# Kataw parser test case

## Input

`````js
[.../x/]
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
                            "kind": 223,
                            "argument": {
                                "kind": 221,
                                "text": "/x/",
                                "autofix": 0,
                                "flags": 768,
                                "start": 4,
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
            "end": 8
        }
    ],
    "isModule": false,
    "text": "[.../x/]",
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

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

