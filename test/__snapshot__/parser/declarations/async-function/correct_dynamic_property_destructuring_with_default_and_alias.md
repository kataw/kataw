# Kataw parser test case

## Input

`````js
let {[x]: y = z} = a;
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
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 81921,
                                                "value": "x",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 6,
                                                "end": 7
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 5,
                                            "end": 8
                                        },
                                        "value": {
                                            "kind": 203,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 81921,
                                                "value": "y",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 9,
                                                "end": 11
                                            },
                                            "initializer": {
                                                "kind": 81921,
                                                "value": "z",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 13,
                                                "end": 15
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 9,
                                            "end": 15
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 5,
                                        "end": 15
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 5,
                                "end": 15
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 3,
                            "end": 16
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 81921,
                            "value": "a",
                            "autofix": 0,
                            "flags": 768,
                            "start": 18,
                            "end": 20
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 20
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 20
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "let {[x]: y = z} = a;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

