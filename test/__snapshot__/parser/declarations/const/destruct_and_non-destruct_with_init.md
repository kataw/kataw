# Kataw parser test case

## Input

`````js
const [foo] = arr, bar = arr2;
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
                                        "kind": 244,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 81921,
                                            "value": "foo",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 7,
                                            "end": 10
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 7,
                                        "end": 10
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 7,
                                "end": 10
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 5,
                            "end": 11
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 81921,
                            "value": "arr",
                            "autofix": 0,
                            "flags": 768,
                            "start": 13,
                            "end": 17
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 5,
                        "end": 17
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 81921,
                            "value": "bar",
                            "autofix": 0,
                            "flags": 768,
                            "start": 18,
                            "end": 22
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 81921,
                            "value": "arr2",
                            "autofix": 0,
                            "flags": 768,
                            "start": 24,
                            "end": 29
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 18,
                        "end": 29
                    }
                ],
                "autofix": 0,
                "flags": 160,
                "start": 5,
                "end": 29
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "const [foo] = arr, bar = arr2;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

