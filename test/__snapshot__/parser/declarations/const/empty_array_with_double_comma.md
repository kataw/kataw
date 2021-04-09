# Kataw parser test case

## Input

`````js
const [,,] = x;
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
            "kind": 162,
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 202,
                                "elements": [
                                    {
                                        "kind": 230,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 7,
                                        "end": 7
                                    },
                                    {
                                        "kind": 230,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 8,
                                        "end": 8
                                    }
                                ],
                                "trailingComma": true,
                                "autofix": 0,
                                "flags": 256,
                                "start": 7,
                                "end": 9
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 5,
                            "end": 10
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 12,
                            "end": 14
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 5,
                        "end": 14
                    }
                ],
                "autofix": 0,
                "flags": 160,
                "start": 5,
                "end": 14
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "const [,,] = x;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

