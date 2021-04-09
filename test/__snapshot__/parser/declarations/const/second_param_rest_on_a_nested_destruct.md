# Kataw parser test case

## Input

`````js
const [x, ...[foo, bar]] = obj;
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
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 7,
                                            "end": 8
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 7,
                                        "end": 8
                                    },
                                    {
                                        "kind": 244,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 9,
                                            "end": 13
                                        },
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
                                                            "start": 14,
                                                            "end": 17
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 14,
                                                        "end": 17
                                                    },
                                                    {
                                                        "kind": 244,
                                                        "ellipsisToken": null,
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
                                                        "initializer": null,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 18,
                                                        "end": 22
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 14,
                                                "end": 22
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 13,
                                            "end": 23
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 9,
                                        "end": 23
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 7,
                                "end": 23
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 5,
                            "end": 24
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 81921,
                            "value": "obj",
                            "autofix": 0,
                            "flags": 768,
                            "start": 26,
                            "end": 30
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 5,
                        "end": 30
                    }
                ],
                "autofix": 0,
                "flags": 160,
                "start": 5,
                "end": 30
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "const [x, ...[foo, bar]] = obj;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

