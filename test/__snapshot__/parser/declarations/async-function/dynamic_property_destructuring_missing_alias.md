# Kataw parser test case

## Input

`````js
let {[x]} = z;
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
                                                "kind": 253,
                                                "text": "",
                                                "autofix": 0,
                                                "flags": 12,
                                                "start": 8,
                                                "end": 8
                                            },
                                            "initializer": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 8,
                                            "end": 8
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 5,
                                        "end": 8
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 5,
                                "end": 8
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 3,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 81921,
                            "value": "z",
                            "autofix": 0,
                            "flags": 768,
                            "start": 11,
                            "end": 13
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 13
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 13
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "let {[x]} = z;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 8,
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 8,
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

