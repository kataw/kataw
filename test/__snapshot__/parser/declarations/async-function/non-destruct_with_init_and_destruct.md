# Kataw parser test case

## Input

`````js
let foo = arr, [bar] = arr2;
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
                            "kind": 81921,
                            "value": "foo",
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 81921,
                            "value": "arr",
                            "autofix": 0,
                            "flags": 768,
                            "start": 9,
                            "end": 13
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 13
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 202,
                                "elements": [
                                    {
                                        "kind": 244,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 81921,
                                            "value": "bar",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 16,
                                            "end": 19
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 16,
                                        "end": 19
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 16,
                                "end": 19
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 14,
                            "end": 20
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 81921,
                            "value": "arr2",
                            "autofix": 0,
                            "flags": 768,
                            "start": 22,
                            "end": 27
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 14,
                        "end": 27
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 27
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "text": "let foo = arr, [bar] = arr2;",
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

